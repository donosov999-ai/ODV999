# iPhone Sound Recognition → Event Log — ТЗ на реализацию

Дата: 2026-07-11
Автор контекста: Денис Оносов
Статус: план готов, реализация не начата.
Назначение: техзадание для чата/сессии, которая будет это внедрять. Самодостаточно — можно отдавать «с нуля».

---

## 0. Зачем это

iOS-фича «Распознавание звуков» (Настройки → Универсальный доступ) слушает микрофон on-device и шлёт уведомление при распознавании звука (кошка, дверной звонок, сирена, бытовые приборы и т. д.). У неё **нет встроенной истории/статистики** — событие показывается как обычное уведомление и нигде не логируется.

Идея: перехватывать каждое срабатывание и складывать в базу, чтобы получить **второй канал данных о дне** — параллельный аудиозаписи Plaud. Дальше этот лог используется как вспомогательный сигнал в дневном разборе Plaud (см. раздел 6).

---

## 1. Архитектура

```
iPhone (Sound Recognition)
   → Shortcuts: Личная автоматизация «Распознавание звуков» (по одному триггеру на звук)
      → общий Shortcut «Log sound event» (принимает параметр = название звука)
         → POST (Get Contents of URL)
            → приёмник: Supabase REST  ИЛИ  Make.com webhook  ИЛИ  n8n webhook
               → таблица sound_events
```

Приёмник на выбор — три равнозначных варианта (раздел 3). Рекомендация: **Supabase напрямую** (меньше звеньев, у Дениса уже есть Supabase с библиотекой аудиокниг 240+).

---

## 2. iPhone: настройка (делает пользователь на телефоне)

### 2.1. Включить звуки
Настройки → Универсальный доступ → Распознавание звуков → Звуки. Включить минимум:
- Кошка (уже вкл — это Маркиз)
- Дверной звонок
- Стук в дверь
- Бытовые приборы
- Сигнал автомобиля

(остальные — по желанию; чем больше, тем больше ложных срабатываний)

### 2.2. Создать общий Shortcut «Log sound event»
Приложение «Команды» → новая команда. Принимает вход-текст (название звука). Действия:
1. `Текущая дата` (формат ISO 8601).
2. `Получить содержимое URL`:
   - URL — эндпоинт приёмника (раздел 3)
   - Метод — POST
   - Заголовки — по варианту приёмника
   - Тело — JSON (раздел 4)
3. (опц.) `Получить текущее местоположение` → положить lat/lon в тело.

### 2.3. Создать автоматизации (по одной на звук)
Команды → Автоматизация → Личная → «Распознавание звуков» → выбрать звук →
действие «Запустить команду» → «Log sound event», передать название звука параметром →
**выключить «Спрашивать перед запуском»** (иначе нужен тап каждый раз).

Повторить для каждого включённого звука.

---

## 3. Приёмник — 3 варианта

### Вариант A — Supabase REST (рекомендуется)
```
POST https://<PROJECT>.supabase.co/rest/v1/sound_events
Headers:
  apikey: <SUPABASE_ANON_KEY>
  Authorization: Bearer <SUPABASE_ANON_KEY>
  Content-Type: application/json
  Prefer: return=minimal
```
⚠️ anon-ключ попадёт в Shortcut на телефоне. Для записи-только настроить RLS-политику `insert` для anon на таблице `sound_events` и НЕ давать select/delete.

### Вариант B — Make.com webhook
Создать сценарий с триггером Custom Webhook → модуль Supabase/Google Sheets/Notion. URL вебхука в Shortcut. Плюс: маршрутизация и обогащение внутри Make без правки телефона.

### Вариант C — n8n webhook
Аналогично B: Webhook node → Postgres/Supabase node. Подходит, если хочется self-hosted-контроль.

---

## 4. Формат события (тело POST)

```json
{
  "ts": "<ISO 8601 timestamp>",
  "sound": "cat",
  "device": "iphone",
  "lat": null,
  "lon": null
}
```

Словарь значений `sound` (маппинг RU-иконок iOS → латинские ключи для БД):
`cat, dog, doorbell, door_knock, appliance, car_horn, siren, smoke_alarm, fire_alarm, glass_break, baby_cry, shouting, water_running, cough`

---

## 5. Схема БД (Supabase / Postgres)

```sql
create table sound_events (
  id bigserial primary key,
  ts timestamptz not null,
  sound text not null,
  device text,
  lat double precision,
  lon double precision,
  verified boolean default null,   -- ручная/ИИ-постфильтрация ложных
  inserted_at timestamptz default now()
);
create index on sound_events (ts);
create index on sound_events (sound);

-- RLS: insert-only для anon
alter table sound_events enable row level security;
create policy "anon insert only" on sound_events
  for insert to anon with check (true);
```

### Выгрузка событий за день (для вставки в Plaud-промпт)
```sql
select to_char(ts at time zone 'Asia/Yekaterinburg', 'HH24:MI:SS')
       || ' — ' || sound as line
from sound_events
where ts at time zone 'Asia/Yekaterinburg' >= date '2026-07-11'
  and ts at time zone 'Asia/Yekaterinburg' <  date '2026-07-12'
order by ts;
```

---

## 6. Интеграция с Plaud-разбором

Перед прогоном дневного разбора Plaud вставить блок **ПЕРЕД** DAY INDEX:

```
SOUND-EVENT TIMELINE (external data, not from the audio)

* The following list is independent sound-detection events from the owner's iPhone for the same day. Use them as auxiliary signals to:
  - confirm episode boundaries (doorbell, alarm, car horn typically mark scene changes);
  - confirm home context (cat sounds = Маркиз = домашняя среда);
  - cross-check timecodes if the recording's timeline looks drifted;
  - enrich META with a one-line summary of detected sounds for the day.
* Never treat sound events as speech and never include them in FULL TRANSCRIPT. They are background metadata only.
* Event format: HH:MM:SS — sound type — [optional location].
* List:
  <вставляется автоматически из SQL раздела 5>
```

---

## 7. Ограничения (обязательно учесть)

1. **Конфликт за микрофон.** Sound Recognition отключается, когда другое приложение пишет с микрофона. Если Plaud-устройство — отдельная железка, конфликта нет. Если Plaud — приложение на том же iPhone, события во время записи будут пустые. **Проверить на конкретном сетапе Дениса.**
2. **Ложные срабатывания.** Тостер → «сирена», блендер → «дрель». Поэтому колонка `verified` и постфильтр.
3. **Батарея.** Постоянное прослушивание: ~5–10%/сутки доп. разряда на iPhone 15+.
4. **Приватность.** Распознавание on-device (ок), но POST уходит в облако. Слать только тип звука + время, без аудио.
5. **Только включённые звуки.** iOS не логирует то, что не включено в списке.

---

## 8. Definition of Done

- [ ] Включены ≥5 звуков на iPhone.
- [ ] Создан Shortcut «Log sound event» + автоматизации на каждый звук (без запроса подтверждения).
- [ ] Создана таблица `sound_events` в Supabase с RLS insert-only.
- [ ] Тестовое срабатывание (позвонить в дверь / мяукнуть коту) → строка появилась в БД.
- [ ] SQL суточной выгрузки отдаёт готовый текст для промпта.
- [ ] Один реальный день прогнан через Plaud с блоком SOUND-EVENT TIMELINE — проверено, что модель использует его как метаданные, а не как речь.

---

## 9. Что нужно от Дениса, чтобы стартовать
- Какой Plaud: отдельное устройство или приложение на iPhone? (решает п.7.1)
- Приёмник: Supabase / Make / n8n?
- Реквизиты выбранного приёмника (URL проекта + anon-ключ ЛИБО webhook-URL) — **дать в локальном/защищённом чате, не в публичном.**

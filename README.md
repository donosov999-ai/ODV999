# NZT-48 Шпаргалка отношений

> Только формулы и действия. Только подтверждённое исследованиями. Без воды.

Интерактивный single-file HTML-дашборд по шпаргалке отношений. Версия `v2.0.1` (30.04.2026).

**Автор:** Denis Onosov (ODV999)

## Возможности

- 📑 Навигация по 6 основным разделам + кризис, ярлыки, словарь, источники
- 🔍 Полнотекстовый поиск
- 🏷 Фильтр по тегам (👩 ей / 👨 ему / обоим)
- 🌙 Тёмная и светлая темы (запоминаются в браузере)
- ✅ Чек-лист «Сегодня вечером» с автосбросом раз в сутки
- 📱 Адаптивная вёрстка (mobile, tablet, desktop)
- 0️⃣ Без зависимостей, без сборщиков, без сети — просто `index.html`

## Открыть локально

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

## Развернуть на GitHub Pages

После `git push` в `main`:

1. GitHub → репозиторий → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `/ (root)`
4. Save → ссылка появится через ~30 секунд

URL будет: `https://<username>.github.io/<repo-name>/`

## Структура

```
.
├── index.html       # дашборд (всё внутри: HTML + CSS + JS)
├── README.md        # этот файл
└── LICENSE          # MIT
```

## Источники (peer-review)

- Gottman, J. — 4 horsemen, repair attempts, aftermath, magic 6 hours
- Light, Grewen, Amico (2005) — *Biological Psychology* — объятия и окситоцин
- Bowlby, J. — теория привязанности
- Fogg, B. J. — B = MAP, микропривычки
- Frontiers in Psychology (2025) — phubbing meta-analysis
- WEF Global Risks Report (2026) — AI-deepfakes top-3 risks
- Cleveland Clinic (2024) — therapy speak
- DSM-5 (2022) — критерии NPD, PTSD

## Версионирование

См. CHANGELOG в самой шпаргалке (нижняя секция HTML). При обновлении контента — версия в `<title>` и в `.brand-version` обновляется вручную.

## Лицензия

MIT — см. [LICENSE](./LICENSE).

⚠ Контент основан на peer-review источниках, но не является медицинским советом. При кризисе — см. блок "Кризис" в дашборде.

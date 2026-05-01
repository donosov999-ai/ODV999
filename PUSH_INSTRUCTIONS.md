# Push на GitHub `donosov999-ai`

Папка готова: `/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard/`

Я вижу что у тебя приватный репо `donosov999-ai/gidromash` (это твой бизнес-репо — гидравлика). Класть туда дашборд по отношениям — путаница: смешать два разных проекта в одном репо.

**Рекомендую:** создать **отдельный публичный** репо `donosov999-ai/relation-os-cheatsheet`. GitHub Pages работает только на публичных (или на платном Pro для приватных).

Ниже — три варианта по убыванию рекомендуемости.

---

## ✅ Вариант A — отдельный публичный репо через `gh` CLI (60 секунд)

Открой Terminal на своей маке и копипасть блок:

```bash
cd "/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard"

# Установить gh если не установлен:
brew install gh 2>/dev/null || echo "gh уже есть"

# Войти (один раз; пропустит если уже залогинен):
gh auth status 2>/dev/null || gh auth login

# Инициализация git
git init
git add .
git commit -m "feat: NZT-48 cheatsheet dashboard v2.0.1"
git branch -M main

# Создать публичный репо + push одной командой
gh repo create donosov999-ai/relation-os-cheatsheet \
  --public \
  --source=. \
  --push \
  --description "NZT-48 Шпаргалка отношений · интерактивный дашборд"

# Включить GitHub Pages из main / root
gh api -X POST "repos/donosov999-ai/relation-os-cheatsheet/pages" \
  -f "source[branch]=main" -f "source[path]=/"

# Подождать ~30 сек, узнать URL
sleep 45
gh api "repos/donosov999-ai/relation-os-cheatsheet/pages" --jq .html_url
```

URL будет: **https://donosov999-ai.github.io/relation-os-cheatsheet/**

---

## ⚠ Вариант B — в существующий приватный `gidromash`

Если всё-таки хочешь смешать с гидромашем — вот как, в **новой ветке**, чтобы не сломать main и сделать PR:

```bash
cd "/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard"
git init
git checkout -b dashboard-relation-os
git add .
git commit -m "feat: NZT-48 cheatsheet dashboard"
git remote add origin https://github.com/donosov999-ai/gidromash.git
git push -u origin dashboard-relation-os

# Открыть страницу для создания PR:
gh pr create --repo donosov999-ai/gidromash --base main --head dashboard-relation-os \
  --title "NZT-48 cheatsheet dashboard" \
  --body "Single-file HTML dashboard в подпапке relation-os-dashboard/"
```

⚠ **Минусы этого варианта:**
- GitHub Pages не будет работать (репо приватный, нужен Pro $4/мес)
- Файлы окажутся в подпапке вместе с гидромаш-кодом — странно по логике
- Если репо большой — клон займёт время

**Если всё равно идти этим путём** — лучше переместить файлы в подпапку *перед* git init:

```bash
cd ~
git clone https://github.com/donosov999-ai/gidromash.git
cd gidromash
git checkout -b dashboard-relation-os
mkdir -p docs/relation-os
cp -r "/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard/." docs/relation-os/
git add docs/relation-os/
git commit -m "feat: add NZT-48 cheatsheet dashboard"
git push -u origin dashboard-relation-os
```

---

## Вариант C — без `gh` CLI, через GitHub web UI

```bash
cd "/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard"
git init
git add .
git commit -m "feat: NZT-48 cheatsheet dashboard v2.0.1"
git branch -M main
```

Затем:
1. https://github.com/new
2. Owner: `donosov999-ai` · Name: `relation-os-cheatsheet` · Public · без README
3. Create repository
4. Скопировать в Terminal:

```bash
git remote add origin https://github.com/donosov999-ai/relation-os-cheatsheet.git
git push -u origin main
```

5. Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/(root)` → Save

URL через ~30 сек: **https://donosov999-ai.github.io/relation-os-cheatsheet/**

---

## Если что-то пошло не так

| Ошибка | Решение |
|--------|---------|
| `gh: command not found` | `brew install gh` |
| `gh auth status` = not logged in | `gh auth login` → GitHub.com → HTTPS → web browser |
| `Permission denied (publickey)` | используешь SSH без ключа — переключись на HTTPS: `git remote set-url origin https://github.com/donosov999-ai/<repo>.git` |
| `Updates were rejected (non-fast-forward)` | репо не пустой → `git pull --rebase origin main` потом `git push` |
| Pages 404 на ссылке | подожди 1-2 минуты после Save, или Settings → Pages → пересохрани branch |

---

## Что проверить ДО push

```bash
cd "/Users/denisonosov/Downloads/Claude/Отношения/relation-os-dashboard"
ls -la
# Должно быть: index.html, README.md, LICENSE, .gitignore, PUSH_INSTRUCTIONS.md
open index.html  # проверить что открывается локально
```

Если не хочешь чтобы `PUSH_INSTRUCTIONS.md` попал в репо:

```bash
echo "PUSH_INSTRUCTIONS.md" >> .gitignore
```

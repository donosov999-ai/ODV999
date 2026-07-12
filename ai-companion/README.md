# AI Companion

🌐 **English** · [Русский](./README.ru.md)

Starter scaffold for an AI-companion platform (Candy.ai / Fanvue style): users
chat with AI characters, each with its own "personality", memory, and
(optionally) image generation.

Stack: **Loco (Rust)** backend + **Next.js (React)** frontend. The AI layer uses
free open-source engines: **Ollama** for chat and **ComfyUI** for images.

> ⚠️ This is a starter scaffold (skeleton), not a production-ready product.
> Before launching, read the "Legal requirements" section below.

## Architecture

```
┌──────────────────────────────────────────────┐
│  Next.js (React) — frontend                    │
│   - character catalog                          │
│   - chat window (streamed responses)           │
│   - account / subscription                     │
└───────────────┬───────────────────────────────┘
                │ REST + SSE (streaming)
┌───────────────▼───────────────────────────────┐
│  Loco (Rust) — backend                          │
│   - auth (JWT)                                  │
│   - characters, conversations, messages        │
│   - prompt assembly (persona + memory)         │
│   - proxies the stream from Ollama             │
└───────┬────────────────────┬───────────────────┘
        │                    │
┌───────▼────────┐  ┌────────▼─────────┐  ┌──────────────┐
│ PostgreSQL     │  │ Ollama (LLM)     │  │ ComfyUI (img)│
│ users/chars/   │  │ chat model       │  │ image        │
│ conversations  │  │ (free,           │  │ generation   │
│ /messages      │  │  self-hosted)    │  │ (optional)   │
└────────────────┘  └──────────────────┘  └──────────────┘
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for details.

## Layout

```
ai-companion/
├── README.md
├── ARCHITECTURE.md
├── docker-compose.yml      # Postgres + Redis + Ollama (+ ComfyUI optional)
├── .env.example
├── backend/                # Loco (Rust)
│   ├── Cargo.toml
│   ├── config/
│   ├── migration/          # database schema
│   └── src/
│       ├── controllers/    # auth, characters, chat
│       ├── models/         # user, character, conversation, message
│       ├── services/       # llm.rs — Ollama client
│       └── ...
└── frontend/               # Next.js
    ├── package.json
    └── src/
        ├── app/            # pages (catalog, chat)
        └── lib/            # api client
```

## Quick start (dev)

```bash
# 1. Bring up infrastructure (Postgres, Redis, Ollama)
cp .env.example .env
docker compose up -d

# 2. Pull a model into Ollama (one time)
docker compose exec ollama ollama pull llama3.1:8b

# 3. Backend (Loco)
cd backend
cargo loco db migrate     # apply migrations
cargo loco start          # http://localhost:5150

# 4. Frontend (Next.js)
cd ../frontend
npm install
npm run dev                # http://localhost:3000
```

## Create a demo character and try the chat

```bash
# create a character
curl -X POST http://localhost:5150/api/characters \
  -H 'Content-Type: application/json' \
  -d '{"name":"Luna","persona":"a friendly, curious companion who loves astronomy","greeting":"Hi! I am Luna ✨","style":"warm, with emojis"}'

# open the catalog in the frontend
open http://localhost:3000
```

Then click a character in the catalog — the chat opens with streamed responses
from Ollama.

## Legal requirements (mandatory before launch)

An 18+ AI-character platform must have:

1. **Age verification** for users (Yoti / Incode, etc.) — in many countries this
   is a legal requirement, not an option.
2. **AI-content labeling** — generated content must be marked as AI.
3. **Ban on deepfakes of real people** without consent — a criminal offense in
   several jurisdictions.
4. **Moderation** of generated content (text and images).
5. **Adult payment processing** — Stripe/PayPal forbid 18+; use CCBill / Segpay /
   Verotel.

Stubs/placeholders for these requirements are marked in the code with
`// TODO(legal)` comments.

## What the scaffold already includes

- ✅ DB schema: users, characters, conversations, messages
- ✅ JWT authentication (register/login)
- ✅ Character CRUD + public catalog
- ✅ Chat: builds prompt from persona + history, streams the Ollama response (SSE)
- ✅ Next.js: character catalog and chat window with streaming
- ✅ docker-compose with Postgres / Redis / Ollama

## What still needs doing (out of scope for the scaffold)

- Age verification and moderation (see `// TODO(legal)`)
- Subscriptions / tokens + adult payment processor
- Image generation via ComfyUI
- Long-term character memory (vector store)
- Voice (TTS), rate-limiting, anti-fraud

## Note on UI language

Backend code and comments are in English. The frontend UI strings are currently
in Russian (product content). For an international audience, move these strings
into an i18n layer (e.g. `next-intl`) rather than hardcoding them.

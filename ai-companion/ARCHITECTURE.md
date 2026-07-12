# AI Companion architecture

🌐 **English** · [Русский](./ARCHITECTURE.ru.md)

This document describes how the AI-companion platform is structured and why these
technologies were chosen.

## 1. Principle

An AI companion = **persona** (character + style) + **engine** (LLM, image
generation) + **memory** (conversation history). The platform gives users a
catalog of such characters and a chat interface with monetization.

The backend (Loco) is the "orchestrator": it doesn't run the neural networks
itself, it assembles the prompt and proxies the request to the LLM engine. Heavy
computation is offloaded to separate services (Ollama, ComfyUI) that need a GPU.

## 2. Layers

| Layer | Technology | Why |
|---|---|---|
| Frontend | Next.js + React + Tailwind | SSR catalog, streamed chat |
| Backend | Loco (Rust, on Axum) | API, auth, prompt assembly, proxying |
| LLM chat | Ollama | Free self-hosted model serving |
| Images | ComfyUI (optional) | Character image generation |
| DB | PostgreSQL (SeaORM) | Users, characters, conversations |
| Cache/queues | Redis | Sessions, rate-limit, background jobs |

## 3. Data model

```
users ──< conversations >── characters
                │
                └──< messages   (role: user|assistant|system, content)
```

- **users** — accounts (email, password_hash, role, age_verified)
- **characters** — characters (name, persona, greeting, avatar, is_public, owner)
- **conversations** — a user's conversation with a character
- **messages** — conversation messages (role + content + created_at)

The schema is created by migrations in `backend/migration/`.

## 4. "Send message" flow

```
1. Frontend POST /api/chat/:conversation_id  { content }
2. Loco:
   a. validates the JWT
   b. // TODO(legal): check age_verified
   c. saves the user message to the DB
   d. assembles the prompt: system(persona) + last N messages
   e. // TODO(legal): moderate the input
   f. sends the request to Ollama (stream=true)
3. Loco streams tokens to the client via SSE
4. On completion — saves the assistant message to the DB
```

Streaming uses **Server-Sent Events (SSE)** — simpler than WebSocket and
sufficient for a one-way stream of tokens.

## 5. Prompt assembly (persona)

The system prompt is assembled from the character's fields:

```
You are {name}. {persona}
Conversation style: {style}.
Always stay in character. Do not mention that you are an AI.
```

The conversation history (last N messages from the DB) is then appended. For
long-term memory, a vector store is added later (summarization + embeddings).

## 6. Why Loco (Rust)

- Low memory footprint with many long-lived SSE connections
- Built-in: auth, migrations (SeaORM), background workers, per-environment config
- Single binary to deploy
- Downside: younger ecosystem — Ollama/ComfyUI clients are written via `reqwest`

## 7. Scaling

- **Loco** — stateless, scales horizontally behind a load balancer
- **Ollama** — the bottleneck (GPU). Scales with a pool of GPU workers + a request
  queue in Redis
- **PostgreSQL** — read replicas for the catalog
- **CDN** — for avatars and generated images (S3/R2 + CDN)

## 8. Development stages

1. **MVP (this scaffold)** — auth, characters, streamed chat
2. **Monetization** — subscriptions/tokens + adult payment processor (CCBill/Segpay)
3. **Compliance** — age verification, moderation, AI labeling
4. **Images** — ComfyUI integration (generation on demand in chat)
5. **Memory** — vector store for long-term character memory
6. **Voice** — TTS, optionally voice cloning

## 9. Security and compliance (critical)

Spots in the code are marked with `// TODO(legal)`:
- age verification before access to 18+ content
- moderation of input and output (text + images)
- labeling of generated content
- ban on generating likenesses of real people without consent
- consent and audit logs

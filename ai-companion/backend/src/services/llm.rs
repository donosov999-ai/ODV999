//! Клиент к LLM-движку Ollama.
//!
//! Ollama — бесплатный self-hosted сервер для запуска моделей. Мы используем
//! его `/api/chat` эндпоинт со стримингом: он отдаёт ответ построчно (NDJSON),
//! а мы пробрасываем токены клиенту через SSE.

use futures_util::{Stream, StreamExt};
use serde::{Deserialize, Serialize};

/// Одно сообщение в формате, который понимает Ollama.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessage {
    pub role: String, // "system" | "user" | "assistant"
    pub content: String,
}

#[derive(Debug, Serialize)]
struct ChatRequest {
    model: String,
    messages: Vec<ChatMessage>,
    stream: bool,
}

/// Кусок ответа из стрима Ollama.
#[derive(Debug, Deserialize)]
struct ChatChunk {
    #[serde(default)]
    message: Option<ChunkMessage>,
    #[serde(default)]
    done: bool,
}

#[derive(Debug, Deserialize)]
struct ChunkMessage {
    #[serde(default)]
    content: String,
}

#[derive(Clone)]
pub struct LlmClient {
    http: reqwest::Client,
    base_url: String,
    model: String,
}

impl LlmClient {
    pub fn new(base_url: impl Into<String>, model: impl Into<String>) -> Self {
        Self {
            http: reqwest::Client::new(),
            base_url: base_url.into(),
            model: model.into(),
        }
    }

    /// Стримит ответ модели токен за токеном.
    ///
    /// Возвращает поток строк — каждая строка это очередной кусок текста ответа.
    /// Вызывающий код (контроллер) оборачивает их в SSE-события.
    pub async fn chat_stream(
        &self,
        messages: Vec<ChatMessage>,
    ) -> Result<impl Stream<Item = Result<String, String>>, String> {
        let req = ChatRequest {
            model: self.model.clone(),
            messages,
            stream: true,
        };

        let resp = self
            .http
            .post(format!("{}/api/chat", self.base_url))
            .json(&req)
            .send()
            .await
            .map_err(|e| format!("ollama request failed: {e}"))?;

        if !resp.status().is_success() {
            return Err(format!("ollama returned status {}", resp.status()));
        }

        // Ollama стримит NDJSON: одна JSON-строка на чанк.
        // bytes_stream() даёт сырые байты, которые мы разбираем по строкам.
        let stream = resp.bytes_stream().flat_map(|chunk| {
            let lines: Vec<Result<String, String>> = match chunk {
                Ok(bytes) => String::from_utf8_lossy(&bytes)
                    .lines()
                    .filter(|l| !l.trim().is_empty())
                    .filter_map(|line| match serde_json::from_str::<ChatChunk>(line) {
                        Ok(c) if c.done => None,
                        Ok(c) => c.message.map(|m| Ok(m.content)),
                        Err(e) => Some(Err(format!("parse error: {e}"))),
                    })
                    .collect(),
                Err(e) => vec![Err(format!("stream error: {e}"))],
            };
            futures_util::stream::iter(lines)
        });

        Ok(stream)
    }
}
</content>

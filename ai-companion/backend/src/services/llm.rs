//! Client for the Ollama LLM engine.
//!
//! Ollama is a free self-hosted server for running models. We use its
//! `/api/chat` streaming endpoint: it returns the response line by line
//! (NDJSON), and we forward the tokens to the client via SSE.

use futures_util::{Stream, StreamExt};
use serde::{Deserialize, Serialize};

/// A single message in the format Ollama understands.
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

/// A chunk of the response from the Ollama stream.
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

    /// Streams the model response token by token.
    ///
    /// Returns a stream of strings — each string is the next chunk of response
    /// text. The caller (controller) wraps them into SSE events.
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

        // Ollama streams NDJSON: one JSON line per chunk.
        // bytes_stream() yields raw bytes, which we split into lines.
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

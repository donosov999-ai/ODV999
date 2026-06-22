//! Chat with an AI character.
//!
//! Flow:
//!   1. save the user message
//!   2. assemble the prompt: system(persona) + last N messages from the DB
//!   3. stream the Ollama response to the client via SSE
//!   4. on completion, save the assistant response
//!
//! TODO(legal): check user.age_verified before allowing access to an 18+ character
//! TODO(legal): moderate input and output (text) before saving/sending

use axum::{
    extract::Path,
    response::sse::{Event, Sse},
};
use futures_util::{Stream, StreamExt};
use loco_rs::prelude::*;
use sea_orm::{ColumnTrait, EntityTrait, QueryFilter, QueryOrder, Set};
use serde::Deserialize;
use std::convert::Infallible;
use std::sync::{Arc, Mutex};

use crate::models::{characters, conversations, messages};
use crate::services::llm::{ChatMessage, LlmClient};

#[derive(Debug, Deserialize)]
pub struct SendMessage {
    pub content: String,
}

/// Builds the system prompt from the character's persona.
fn build_system_prompt(character: &characters::Model) -> String {
    let mut p = format!("You are {}. {}", character.name, character.persona);
    if let Some(style) = &character.style {
        p.push_str(&format!("\nConversation style: {style}."));
    }
    p.push_str("\nAlways stay in character. Do not mention that you are an AI.");
    p
}

/// POST /api/chat/:conversation_id — send a message and get a streamed response.
#[debug_handler]
async fn send(
    State(ctx): State<AppContext>,
    Path(conversation_id): Path<i32>,
    Json(params): Json<SendMessage>,
) -> Result<Sse<impl Stream<Item = std::result::Result<Event, Infallible>>>> {
    // 1. Find the conversation and character
    let conversation = conversations::Entity::find_by_id(conversation_id)
        .one(&ctx.db)
        .await?
        .ok_or_else(|| Error::NotFound)?;

    let character = characters::Entity::find_by_id(conversation.character_id)
        .one(&ctx.db)
        .await?
        .ok_or_else(|| Error::NotFound)?;

    // TODO(legal): if character.nsfw && !user.age_verified { return Err(...) }
    // TODO(legal): moderate(&params.content)?

    // 2. Save the user message
    messages::ActiveModel {
        conversation_id: Set(conversation_id),
        role: Set("user".to_string()),
        content: Set(params.content.clone()),
        ..Default::default()
    }
    .insert(&ctx.db)
    .await?;

    // 3. Gather history (last N messages)
    let history_window: u64 = ctx
        .config
        .settings
        .as_ref()
        .and_then(|s| s.get("history_window"))
        .and_then(serde_json::Value::as_u64)
        .unwrap_or(20);

    let mut recent = messages::Entity::find()
        .filter(messages::Column::ConversationId.eq(conversation_id))
        .order_by_desc(messages::Column::CreatedAt)
        .limit(history_window)
        .all(&ctx.db)
        .await?;
    recent.reverse(); // back to chronological order

    // 4. Build the request to the model
    let mut llm_messages = vec![ChatMessage {
        role: "system".to_string(),
        content: build_system_prompt(&character),
    }];
    llm_messages.extend(recent.into_iter().map(|m| ChatMessage {
        role: m.role,
        content: m.content,
    }));

    // 5. Connect to Ollama
    let settings = ctx.config.settings.clone().unwrap_or_default();
    let ollama_url = settings
        .get("ollama_url")
        .and_then(serde_json::Value::as_str)
        .unwrap_or("http://localhost:11434")
        .to_string();
    let ollama_model = settings
        .get("ollama_model")
        .and_then(serde_json::Value::as_str)
        .unwrap_or("llama3.1:8b")
        .to_string();

    let client = LlmClient::new(ollama_url, ollama_model);
    let token_stream = client
        .chat_stream(llm_messages)
        .await
        .map_err(|e| Error::Message(e))?;

    // Accumulate the full response so we can save it to the DB after streaming.
    let full = Arc::new(Mutex::new(String::new()));
    let full_for_save = full.clone();
    let db = ctx.db.clone();

    let sse_stream = token_stream
        .map(move |item| {
            let token = item.unwrap_or_default();
            if let Ok(mut acc) = full.lock() {
                acc.push_str(&token);
            }
            Ok(Event::default().data(token))
        })
        .chain(futures_util::stream::once(async move {
            // 6. Save the assistant response
            let answer = full_for_save.lock().map(|g| g.clone()).unwrap_or_default();
            if !answer.is_empty() {
                let _ = messages::ActiveModel {
                    conversation_id: Set(conversation_id),
                    role: Set("assistant".to_string()),
                    content: Set(answer),
                    ..Default::default()
                }
                .insert(&db)
                .await;
            }
            Ok(Event::default().event("done").data("[DONE]"))
        }));

    Ok(Sse::new(sse_stream))
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("/api/chat")
        .add("/{conversation_id}", post(send))
}
</content>

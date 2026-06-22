//! Чат с AI-персонажем.
//!
//! Поток:
//!   1. сохраняем сообщение пользователя
//!   2. собираем промпт: system(persona) + последние N сообщений из БД
//!   3. стримим ответ из Ollama клиенту через SSE
//!   4. по завершении сохраняем ответ ассистента
//!
//! TODO(legal): перед допуском к 18+ персонажу проверять user.age_verified
//! TODO(legal): модерация ввода и вывода (текст) до сохранения/отправки

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

/// Собирает system-промпт из персоны персонажа.
fn build_system_prompt(character: &characters::Model) -> String {
    let mut p = format!("Ты — {}. {}", character.name, character.persona);
    if let Some(style) = &character.style {
        p.push_str(&format!("\nСтиль общения: {style}."));
    }
    p.push_str("\nВсегда оставайся в образе. Не упоминай, что ты ИИ.");
    p
}

/// POST /api/chat/:conversation_id — отправить сообщение и получить стрим-ответ.
#[debug_handler]
async fn send(
    State(ctx): State<AppContext>,
    Path(conversation_id): Path<i32>,
    Json(params): Json<SendMessage>,
) -> Result<Sse<impl Stream<Item = std::result::Result<Event, Infallible>>>> {
    // 1. Найти диалог и персонажа
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

    // 2. Сохранить сообщение пользователя
    messages::ActiveModel {
        conversation_id: Set(conversation_id),
        role: Set("user".to_string()),
        content: Set(params.content.clone()),
        ..Default::default()
    }
    .insert(&ctx.db)
    .await?;

    // 3. Собрать историю (последние N сообщений)
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
    recent.reverse(); // обратно в хронологический порядок

    // 4. Сформировать запрос к модели
    let mut llm_messages = vec![ChatMessage {
        role: "system".to_string(),
        content: build_system_prompt(&character),
    }];
    llm_messages.extend(recent.into_iter().map(|m| ChatMessage {
        role: m.role,
        content: m.content,
    }));

    // 5. Подключиться к Ollama
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

    // Накапливаем полный ответ, чтобы сохранить его в БД после стрима.
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
            // 6. Сохранить ответ ассистента
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

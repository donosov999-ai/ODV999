//! Персонажи: публичный каталог, создание, старт диалога.

use loco_rs::prelude::*;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, QueryFilter, QueryOrder, Set};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::models::{characters, conversations};

#[derive(Debug, Deserialize)]
pub struct CreateCharacter {
    pub name: String,
    pub persona: String,
    pub greeting: Option<String>,
    pub style: Option<String>,
    pub avatar_url: Option<String>,
    #[serde(default)]
    pub nsfw: bool,
}

#[derive(Debug, Serialize)]
pub struct ConversationStarted {
    pub conversation_id: i32,
    pub greeting: Option<String>,
}

/// GET /api/characters — публичный каталог.
#[debug_handler]
async fn list(State(ctx): State<AppContext>) -> Result<Response> {
    let items = characters::Entity::find()
        .filter(characters::Column::IsPublic.eq(true))
        .order_by_desc(characters::Column::CreatedAt)
        .all(&ctx.db)
        .await?;
    format::json(items)
}

/// GET /api/characters/:id — один персонаж.
#[debug_handler]
async fn show(State(ctx): State<AppContext>, Path(id): Path<i32>) -> Result<Response> {
    let character = characters::Entity::find_by_id(id)
        .one(&ctx.db)
        .await?
        .ok_or_else(|| Error::NotFound)?;
    format::json(character)
}

/// POST /api/characters — создать персонажа.
/// TODO(auth): привязывать owner_id к текущему пользователю из JWT.
#[debug_handler]
async fn create(
    State(ctx): State<AppContext>,
    Json(params): Json<CreateCharacter>,
) -> Result<Response> {
    let character = characters::ActiveModel {
        pid: Set(Uuid::new_v4()),
        name: Set(params.name),
        persona: Set(params.persona),
        greeting: Set(params.greeting),
        style: Set(params.style),
        avatar_url: Set(params.avatar_url),
        is_public: Set(true),
        is_ai_generated: Set(true), // TODO(legal): маркировка AI-контента
        nsfw: Set(params.nsfw),
        ..Default::default()
    }
    .insert(&ctx.db)
    .await?;
    format::json(character)
}

/// POST /api/characters/:id/conversations — начать диалог с персонажем.
/// TODO(auth): брать user_id из JWT вместо заглушки.
#[debug_handler]
async fn start_conversation(
    State(ctx): State<AppContext>,
    Path(id): Path<i32>,
) -> Result<Response> {
    let character = characters::Entity::find_by_id(id)
        .one(&ctx.db)
        .await?
        .ok_or_else(|| Error::NotFound)?;

    // TODO(auth): user_id из текущего пользователя
    let user_id = 1;

    let conversation = conversations::ActiveModel {
        pid: Set(Uuid::new_v4()),
        user_id: Set(user_id),
        character_id: Set(character.id),
        ..Default::default()
    }
    .insert(&ctx.db)
    .await?;

    format::json(ConversationStarted {
        conversation_id: conversation.id,
        greeting: character.greeting,
    })
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("/api/characters")
        .add("/", get(list))
        .add("/", post(create))
        .add("/{id}", get(show))
        .add("/{id}/conversations", post(start_conversation))
}
</content>

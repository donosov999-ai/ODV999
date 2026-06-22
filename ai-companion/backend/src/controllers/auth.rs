//! Authentication: registration and login, issuing a JWT.
//!
//! This is a basic implementation for the scaffold. In production add:
//!  - email confirmation
//!  - rate-limiting on login (via Redis)
//!  - TODO(legal): an age-verification step after registration

use chrono::{Duration, Utc};
use jsonwebtoken::{encode, EncodingKey, Header};
use loco_rs::prelude::*;
use sea_orm::{ActiveModelTrait, ColumnTrait, EntityTrait, QueryFilter, Set};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

use crate::models::users;

#[derive(Debug, Deserialize, Validate)]
pub struct RegisterParams {
    #[validate(email)]
    pub email: String,
    #[validate(length(min = 8))]
    pub password: String,
    #[validate(length(min = 1))]
    pub display_name: String,
}

#[derive(Debug, Deserialize)]
pub struct LoginParams {
    pub email: String,
    pub password: String,
}

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    pub token: String,
    pub pid: String,
    pub display_name: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: String, // user pid
    pub exp: usize,
}

fn jwt_secret(ctx: &AppContext) -> String {
    ctx.config
        .settings
        .as_ref()
        .and_then(|s| s.get("jwt_secret"))
        .and_then(serde_json::Value::as_str)
        .unwrap_or("change-me")
        .to_string()
}

fn issue_token(secret: &str, pid: &str) -> Result<String> {
    let claims = Claims {
        sub: pid.to_string(),
        exp: (Utc::now() + Duration::days(7)).timestamp() as usize,
    };
    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(secret.as_bytes()),
    )
    .map_err(|e| Error::Message(format!("jwt encode failed: {e}")))
}

/// POST /api/auth/register
#[debug_handler]
async fn register(
    State(ctx): State<AppContext>,
    Json(params): Json<RegisterParams>,
) -> Result<Response> {
    params
        .validate()
        .map_err(|e| Error::BadRequest(e.to_string()))?;

    let hash = bcrypt::hash(&params.password, bcrypt::DEFAULT_COST)
        .map_err(|e| Error::Message(format!("hash failed: {e}")))?;

    let pid = Uuid::new_v4();
    users::ActiveModel {
        pid: Set(pid),
        email: Set(params.email),
        password_hash: Set(hash),
        display_name: Set(params.display_name.clone()),
        role: Set("user".to_string()),
        age_verified: Set(false), // TODO(legal): age verification
        ..Default::default()
    }
    .insert(&ctx.db)
    .await?;

    let token = issue_token(&jwt_secret(&ctx), &pid.to_string())?;
    format::json(AuthResponse {
        token,
        pid: pid.to_string(),
        display_name: params.display_name,
    })
}

/// POST /api/auth/login
#[debug_handler]
async fn login(
    State(ctx): State<AppContext>,
    Json(params): Json<LoginParams>,
) -> Result<Response> {
    let user = users::Entity::find()
        .filter(users::Column::Email.eq(&params.email))
        .one(&ctx.db)
        .await?
        .ok_or_else(|| Error::Unauthorized("invalid credentials".to_string()))?;

    let ok = bcrypt::verify(&params.password, &user.password_hash).unwrap_or(false);
    if !ok {
        return Err(Error::Unauthorized("invalid credentials".to_string()));
    }

    let token = issue_token(&jwt_secret(&ctx), &user.pid.to_string())?;
    format::json(AuthResponse {
        token,
        pid: user.pid.to_string(),
        display_name: user.display_name,
    })
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("/api/auth")
        .add("/register", post(register))
        .add("/login", post(login))
}

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "characters")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub pid: Uuid,
    pub owner_id: Option<i32>,
    pub name: String,
    /// Character description — the basis of the system prompt.
    pub persona: String,
    pub greeting: Option<String>,
    pub style: Option<String>,
    pub avatar_url: Option<String>,
    pub is_public: bool,
    /// TODO(legal): labeling is mandatory — the character is AI-generated.
    pub is_ai_generated: bool,
    pub nsfw: bool,
    pub created_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::conversations::Entity")]
    Conversations,
}

impl Related<super::conversations::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Conversations.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}

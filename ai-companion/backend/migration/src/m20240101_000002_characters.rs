use sea_orm_migration::prelude::*;

use crate::m20240101_000001_users::Users;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Characters::Table)
                    .if_not_exists()
                    .col(pk_auto(Characters::Id))
                    .col(uuid(Characters::Pid))
                    .col(integer_null(Characters::OwnerId))
                    .col(string(Characters::Name))
                    // persona — character description; the system prompt is built from it
                    .col(text(Characters::Persona))
                    .col(text_null(Characters::Greeting))
                    .col(string_null(Characters::Style))
                    .col(string_null(Characters::AvatarUrl))
                    .col(boolean(Characters::IsPublic).default(true))
                    // TODO(legal): AI-content labeling is mandatory
                    .col(boolean(Characters::IsAiGenerated).default(true))
                    .col(boolean(Characters::Nsfw).default(false))
                    .col(
                        timestamp_with_time_zone(Characters::CreatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        timestamp_with_time_zone(Characters::UpdatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_characters_owner")
                            .from(Characters::Table, Characters::OwnerId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::SetNull),
                    )
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Characters::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Characters {
    Table,
    Id,
    Pid,
    OwnerId,
    Name,
    Persona,
    Greeting,
    Style,
    AvatarUrl,
    IsPublic,
    IsAiGenerated,
    Nsfw,
    CreatedAt,
    UpdatedAt,
}
</content>

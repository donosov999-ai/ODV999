use sea_orm_migration::prelude::*;

use crate::m20240101_000001_users::Users;
use crate::m20240101_000002_characters::Characters;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Conversations::Table)
                    .if_not_exists()
                    .col(pk_auto(Conversations::Id))
                    .col(uuid(Conversations::Pid))
                    .col(integer(Conversations::UserId))
                    .col(integer(Conversations::CharacterId))
                    .col(
                        timestamp_with_time_zone(Conversations::CreatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        timestamp_with_time_zone(Conversations::UpdatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_conversations_user")
                            .from(Conversations::Table, Conversations::UserId)
                            .to(Users::Table, Users::Id)
                            .on_delete(ForeignKeyAction::Cascade),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_conversations_character")
                            .from(Conversations::Table, Conversations::CharacterId)
                            .to(Characters::Table, Characters::Id)
                            .on_delete(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Conversations::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Conversations {
    Table,
    Id,
    Pid,
    UserId,
    CharacterId,
    CreatedAt,
    UpdatedAt,
}
</content>

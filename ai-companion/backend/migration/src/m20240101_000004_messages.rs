use sea_orm_migration::prelude::*;

use crate::m20240101_000003_conversations::Conversations;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Messages::Table)
                    .if_not_exists()
                    .col(pk_auto(Messages::Id))
                    .col(integer(Messages::ConversationId))
                    // role: "user" | "assistant" | "system"
                    .col(string_len(Messages::Role, 16))
                    .col(text(Messages::Content))
                    .col(
                        timestamp_with_time_zone(Messages::CreatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .foreign_key(
                        ForeignKey::create()
                            .name("fk_messages_conversation")
                            .from(Messages::Table, Messages::ConversationId)
                            .to(Conversations::Table, Conversations::Id)
                            .on_delete(ForeignKeyAction::Cascade),
                    )
                    .to_owned(),
            )
            .await?;

        manager
            .create_index(
                Index::create()
                    .name("idx_messages_conversation")
                    .table(Messages::Table)
                    .col(Messages::ConversationId)
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Messages::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Messages {
    Table,
    Id,
    ConversationId,
    Role,
    Content,
    CreatedAt,
}
</content>

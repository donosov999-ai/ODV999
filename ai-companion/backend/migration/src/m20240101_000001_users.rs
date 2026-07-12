use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Users::Table)
                    .if_not_exists()
                    .col(pk_auto(Users::Id))
                    .col(uuid(Users::Pid))
                    .col(string_uniq(Users::Email))
                    .col(string(Users::PasswordHash))
                    .col(string(Users::DisplayName))
                    .col(string_len(Users::Role, 32).default("user"))
                    // TODO(legal): age verification before access to 18+ content
                    .col(boolean(Users::AgeVerified).default(false))
                    .col(
                        timestamp_with_time_zone(Users::CreatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .col(
                        timestamp_with_time_zone(Users::UpdatedAt)
                            .default(Expr::current_timestamp()),
                    )
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Users::Table).to_owned())
            .await
    }
}

#[derive(DeriveIden)]
pub enum Users {
    Table,
    Id,
    Pid,
    Email,
    PasswordHash,
    DisplayName,
    Role,
    AgeVerified,
    CreatedAt,
    UpdatedAt,
}

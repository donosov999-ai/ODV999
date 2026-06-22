#![allow(elided_lifetimes_in_paths)]
#![allow(clippy::wildcard_imports)]
pub use sea_orm_migration::prelude::*;

mod m20240101_000001_users;
mod m20240101_000002_characters;
mod m20240101_000003_conversations;
mod m20240101_000004_messages;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20240101_000001_users::Migration),
            Box::new(m20240101_000002_characters::Migration),
            Box::new(m20240101_000003_conversations::Migration),
            Box::new(m20240101_000004_messages::Migration),
        ]
    }
}
</content>

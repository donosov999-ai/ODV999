use async_trait::async_trait;
use loco_rs::{
    app::{AppContext, Hooks},
    boot::{create_app, BootResult, StartMode},
    controller::AppRoutes,
    db::truncate_table,
    environment::Environment,
    task::Tasks,
    Result,
};
use migration::Migrator;

use crate::{controllers, models};

pub struct App;

#[async_trait]
impl Hooks for App {
    fn app_name() -> &'static str {
        env!("CARGO_CRATE_NAME")
    }

    fn app_version() -> String {
        format!(
            "{} ({})",
            env!("CARGO_PKG_VERSION"),
            option_env!("BUILD_SHA").unwrap_or("dev")
        )
    }

    async fn boot(mode: StartMode, environment: &Environment) -> Result<BootResult> {
        create_app::<Self, Migrator>(mode, environment).await
    }

    fn routes(_ctx: &AppContext) -> AppRoutes {
        AppRoutes::with_default_routes()
            .add_route(controllers::auth::routes())
            .add_route(controllers::characters::routes())
            .add_route(controllers::chat::routes())
    }

    fn register_tasks(_tasks: &mut Tasks) {
        // Здесь регистрируются CLI-таски (например, сидинг персонажей).
    }

    async fn truncate(ctx: &AppContext) -> Result<()> {
        truncate_table(&ctx.db, models::messages::Entity).await?;
        truncate_table(&ctx.db, models::conversations::Entity).await?;
        truncate_table(&ctx.db, models::characters::Entity).await?;
        truncate_table(&ctx.db, models::users::Entity).await?;
        Ok(())
    }

    async fn seed(_ctx: &AppContext, _base: &std::path::Path) -> Result<()> {
        // TODO: засеять несколько демо-персонажей.
        Ok(())
    }
}
</content>

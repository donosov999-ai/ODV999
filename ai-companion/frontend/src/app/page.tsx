import Link from "next/link";
import { listCharacters, type Character } from "@/lib/api";

export default async function CatalogPage() {
  let characters: Character[] = [];
  let error: string | null = null;

  try {
    characters = await listCharacters();
  } catch {
    error = "Не удалось загрузить персонажей. Запущен ли бэкенд на :5150?";
  }

  return (
    <main className="container">
      <h1>AI-компаньоны</h1>
      <p className="muted" style={{ marginBottom: 24 }}>
        Выберите персонажа, чтобы начать диалог.
      </p>

      {error && <p className="muted">{error}</p>}

      <div className="grid">
        {characters.map((c) => (
          <Link key={c.id} href={`/chat/${c.id}`} className="card">
            <h3>{c.name}</h3>
            <p className="muted">{c.persona.slice(0, 90)}…</p>
            <span className="badge">🤖 AI{c.nsfw ? " · 18+" : ""}</span>
          </Link>
        ))}
      </div>

      {!error && characters.length === 0 && (
        <p className="muted">
          Персонажей пока нет. Создайте через{" "}
          <code>POST /api/characters</code>.
        </p>
      )}
    </main>
  );
}

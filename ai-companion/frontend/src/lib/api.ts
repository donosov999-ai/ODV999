// Тонкий клиент к бэкенду Loco.

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5150";

export interface Character {
  id: number;
  pid: string;
  name: string;
  persona: string;
  greeting: string | null;
  style: string | null;
  avatar_url: string | null;
  nsfw: boolean;
  is_ai_generated: boolean;
}

export async function listCharacters(): Promise<Character[]> {
  const res = await fetch(`${API_URL}/api/characters/`, { cache: "no-store" });
  if (!res.ok) throw new Error("failed to load characters");
  return res.json();
}

export async function getCharacter(id: number): Promise<Character> {
  const res = await fetch(`${API_URL}/api/characters/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("character not found");
  return res.json();
}

export async function startConversation(
  characterId: number
): Promise<{ conversation_id: number; greeting: string | null }> {
  const res = await fetch(
    `${API_URL}/api/characters/${characterId}/conversations`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error("failed to start conversation");
  return res.json();
}

/**
 * Отправляет сообщение и стримит ответ модели через SSE.
 * onToken вызывается на каждый кусок текста; onDone — по завершении.
 */
export async function sendMessageStream(
  conversationId: number,
  content: string,
  onToken: (token: string) => void,
  onDone: () => void
): Promise<void> {
  const res = await fetch(`${API_URL}/api/chat/${conversationId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  if (!res.ok || !res.body) {
    throw new Error("chat request failed");
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // SSE-кадры разделены пустой строкой
    const frames = buffer.split("\n\n");
    buffer = frames.pop() ?? "";

    for (const frame of frames) {
      const lines = frame.split("\n");
      const isDone = lines.some((l) => l.startsWith("event: done"));
      if (isDone) {
        onDone();
        return;
      }
      for (const line of lines) {
        if (line.startsWith("data:")) {
          onToken(line.slice(5).replace(/^ /, ""));
        }
      }
    }
  }
  onDone();
}
</content>

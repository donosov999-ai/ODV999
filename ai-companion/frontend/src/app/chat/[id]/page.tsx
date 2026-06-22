"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import {
  getCharacter,
  startConversation,
  sendMessageStream,
  type Character,
} from "@/lib/api";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const params = useParams();
  const characterId = Number(params.id);

  const [character, setCharacter] = useState<Character | null>(null);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Старт: грузим персонажа и открываем диалог
  useEffect(() => {
    (async () => {
      const ch = await getCharacter(characterId);
      setCharacter(ch);
      const conv = await startConversation(characterId);
      setConversationId(conv.conversation_id);
      if (conv.greeting) {
        setMessages([{ role: "assistant", content: conv.greeting }]);
      }
    })().catch(() => {});
  }, [characterId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim() || !conversationId || busy) return;
    const text = input.trim();
    setInput("");
    setBusy(true);

    setMessages((m) => [
      ...m,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);

    try {
      await sendMessageStream(
        conversationId,
        text,
        (token) => {
          setMessages((m) => {
            const copy = [...m];
            copy[copy.length - 1] = {
              role: "assistant",
              content: copy[copy.length - 1].content + token,
            };
            return copy;
          });
        },
        () => setBusy(false)
      );
    } catch {
      setBusy(false);
    }
  }

  return (
    <main className="container chat">
      <h2>{character?.name ?? "…"}</h2>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            {m.content || "…"}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="composer">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Напишите сообщение…"
          disabled={!conversationId}
        />
        <button onClick={send} disabled={busy || !conversationId}>
          {busy ? "…" : "Отправить"}
        </button>
      </div>
    </main>
  );
}
</content>

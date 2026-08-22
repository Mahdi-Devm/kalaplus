"use client";
import { Message } from "@/assets/@types/Message";
import { useState } from "react";
import RequestUser from "./req/blook/RequestUser";
import ResponseUser from "./res/blook/ResponseUser";

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(prompt: string) {
    if (!prompt.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        message: prompt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || "Request failed");
    }

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.message,
      },
    ]);

    setLoading(false);
  }

  return (
    <>
      <ResponseUser messages={messages} loading={loading} />
      <RequestUser SendMes={sendMessage} />
    </>
  );
}

export default Chat;

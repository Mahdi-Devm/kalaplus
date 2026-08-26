import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch(`https://api.tokengo.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer WbQLndPegNfIZajdB1mQsBmKcTLJBEzUiGaQocbZwrWBBQ1T`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-v4-pro",
      messages: [
        {
          role: "system",
          content: "You are a senior software engineer.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();

  return NextResponse.json({
    message: data.choices[0].message.content,
  });
}

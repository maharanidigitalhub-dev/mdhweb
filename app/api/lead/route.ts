import { NextResponse } from "next/server";

const submissions: Array<Record<string, string>> = [];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, string>;
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please provide a valid name and email address."
      },
      { status: 400 }
    );
  }

  const entry = {
    ...payload,
    name,
    email,
    receivedAt: new Date().toISOString()
  };

  submissions.push(entry);
  console.log("Lead submission", entry);

  const webhookUrl = process.env.MDH_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry)
      });
    } catch (error) {
      console.error("Lead webhook failed", error);
    }
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ count: submissions.length });
}

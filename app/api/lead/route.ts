import { NextResponse } from "next/server";

const submissions: Array<Record<string, string>> = [];

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, string>;
  const entry = {
    ...payload,
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

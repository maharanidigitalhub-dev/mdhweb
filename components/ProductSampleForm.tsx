"use client";

import { useState } from "react";

export function ProductSampleForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          source: "Product Sample"
        })
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("sent");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      />
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Get free sample"}
      </button>
      <p className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Sample sent. Check your inbox."
          : status === "error"
            ? "Something went wrong. Try again."
            : "We send one sample and one follow-up email."}
      </p>
    </form>
  );
}

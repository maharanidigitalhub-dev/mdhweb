"use client";

import { useState } from "react";

export function LeadCapture() {
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
          source: "Lead Magnet"
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
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 rounded-3xl border border-line bg-white/70 p-6 shadow-soft md:flex-row md:items-end"
    >
      <div className="flex-1">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Name
        </label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>
      <div className="flex-1">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Get the Guide"}
      </button>
      <p className="text-xs text-charcoal/60 md:max-w-[160px]">
        {status === "sent"
          ? "Guide sent. Check your inbox."
          : status === "error"
            ? "Something went wrong. Try again."
            : "We respect your inbox. One concise email per week."}
      </p>
    </form>
  );
}

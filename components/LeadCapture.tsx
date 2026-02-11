"use client";

import { useState } from "react";

export function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
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

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 rounded-3xl border border-line bg-white/70 p-6 shadow-soft md:flex-row md:items-end"
    >
      <div className="flex-1">
        <label htmlFor="lead-name" className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Name
        </label>
        <input
          id="lead-name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="lead-email" className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Get the Guide"}
      </button>
      <p aria-live="polite" className="text-xs text-charcoal/60 md:max-w-[200px]">
        {status === "sent"
          ? "Guide sent. Check your inbox."
          : status === "error"
            ? errorMessage || "Something went wrong. Try again."
            : "We respect your inbox. One concise email per week."}
      </p>
    </form>
  );
}

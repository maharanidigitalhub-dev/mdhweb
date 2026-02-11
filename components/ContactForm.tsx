"use client";

import { useState } from "react";

export function ContactForm() {
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
          message: String(formData.get("message") || ""),
          source: "Contact"
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
      className="grid gap-4 rounded-3xl border border-line bg-white/80 p-6 shadow-soft"
    >
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Name
        </label>
        <input
          name="name"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Book a Call"}
      </button>
      <p className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Thank you. We will reply within two business days."
          : status === "error"
            ? "Something went wrong. Try again."
            : "We reply within two business days."}
      </p>
    </form>
  );
}

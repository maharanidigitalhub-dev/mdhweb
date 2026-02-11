"use client";

import { useState } from "react";

export function ContactForm() {
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
          message: String(formData.get("message") || ""),
          source: "Contact"
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
      className="grid gap-4 rounded-3xl border border-line bg-white/80 p-6 shadow-soft"
    >
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Book a Call"}
      </button>
      <p aria-live="polite" className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Thank you. We will reply within two business days."
          : status === "error"
            ? errorMessage || "Something went wrong. Try again."
            : "We reply within two business days."}
      </p>
    </form>
  );
}

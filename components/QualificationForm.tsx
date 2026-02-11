"use client";

import { useState } from "react";

export function QualificationForm({
  service
}: {
  service: string;
}) {
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
          businessType: String(formData.get("businessType") || ""),
          goal: String(formData.get("goal") || ""),
          service,
          source: "Service Qualification"
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
      className="grid gap-4 rounded-2xl border border-line bg-white/80 p-6 shadow-subtle"
    >
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Name
        </label>
        <input
          name="name"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
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
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Business type
        </label>
        <input
          name="businessType"
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
          Primary goal
        </label>
        <textarea
          name="goal"
          rows={3}
          required
          className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending" : "Request a Call"}
      </button>
      <p className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Thank you. We will reach out within two business days."
          : status === "error"
            ? "Something went wrong. Try again."
            : "We will reply within two business days."}
      </p>
    </form>
  );
}

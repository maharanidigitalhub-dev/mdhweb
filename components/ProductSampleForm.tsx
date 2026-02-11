"use client";

import { useState } from "react";

export function ProductSampleForm() {
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
          source: "Product Sample"
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
    <form noValidate onSubmit={handleSubmit} className="grid gap-3">
      <label htmlFor="sample-name" className="sr-only">
        Name
      </label>
      <input
        id="sample-name"
        name="name"
        placeholder="Name"
        required
        className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      />
      <label htmlFor="sample-email" className="sr-only">
        Email
      </label>
      <input
        id="sample-email"
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
      <p aria-live="polite" className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Sample sent. Check your inbox."
          : status === "error"
            ? errorMessage || "Something went wrong. Try again."
            : "We send one sample and one follow-up email."}
      </p>
    </form>
  );
}

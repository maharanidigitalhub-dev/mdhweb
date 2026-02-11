"use client";

import { useState } from "react";

export function ProductSupportForm() {
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
          product: String(formData.get("product") || ""),
          issue: String(formData.get("issue") || ""),
          source: "Product Support"
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
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-line bg-white/80 p-6 shadow-soft">
      <h2 className="font-serif text-2xl text-charcoal">Product support</h2>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">Name</label>
        <input name="name" required className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none" />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">Email</label>
        <input type="email" name="email" required className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none" />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">Product</label>
        <input name="product" required className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none" />
      </div>
      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">Issue</label>
        <textarea name="issue" rows={4} required className="rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none" />
      </div>
      <button type="submit" disabled={status === "sending"} className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream">
        {status === "sending" ? "Sending" : "Get support"}
      </button>
      <p className="text-xs text-charcoal/60">
        {status === "sent"
          ? "Support request received. We will respond soon."
          : status === "error"
            ? "Something went wrong. Try again."
            : "Typical response time is within one business day."}
      </p>
    </form>
  );
}

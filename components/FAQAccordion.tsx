"use client";

import { useState } from "react";
import { Divider } from "@/components/Divider";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl border border-line bg-white/80">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
            >
              <span className="font-serif text-lg text-charcoal">
                {item.question}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60 transition ${
                  isOpen ? "text-charcoal" : "text-charcoal/60"
                }`}
              >
                {isOpen ? "Close" : "Open"}
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              hidden={!isOpen}
              className="px-6 pb-5 text-sm text-charcoal/70"
            >
              {item.answer}
            </div>
            {index < items.length - 1 ? <Divider /> : null}
          </div>
        );
      })}
    </div>
  );
}

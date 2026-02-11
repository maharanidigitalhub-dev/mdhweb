import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import type { ReactNode } from "react";

export function ServiceDetail({
  title,
  summary,
  description,
  outcomes,
  timeline,
  investment,
  children
}: {
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  timeline: string;
  investment: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Service detail
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {title}
              </h1>
              <p className="text-lg text-charcoal/70">{summary}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Engagement snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm text-charcoal/70">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>Timeline</span>
                  <span className="font-semibold text-charcoal">{timeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Investment</span>
                  <span className="font-semibold text-charcoal">{investment}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">
                What we deliver
              </h2>
              <p className="text-sm text-charcoal/70">{description}</p>
              {children}
            </div>
            <div className="rounded-3xl border border-line bg-smoke p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Outcomes
              </p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="border-b border-line pb-3 last:border-none">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

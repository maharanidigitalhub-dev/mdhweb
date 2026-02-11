import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  children
}: SectionProps) {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="grid gap-6 py-section-y md:py-section-y-lg">
          <div className="space-y-3">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="max-w-2xl text-sm text-charcoal/70 md:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

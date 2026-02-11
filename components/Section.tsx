import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type SectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = ""
}: SectionProps) {
  return (
    <section className={`border-b border-line/90 ${className}`}>
      <Container>
        <div className="grid gap-8 py-16 md:gap-10 md:py-24">
          <div className="max-w-3xl space-y-4">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/70">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-base leading-7 text-charcoal/70 md:text-lg">{subtitle}</p>
            ) : null}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

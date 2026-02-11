import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-charcoal/70 md:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

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
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/65">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-charcoal/75 md:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  );
}

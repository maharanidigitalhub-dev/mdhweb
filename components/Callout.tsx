import type { ReactNode } from "react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";

export function Callout({
  eyebrow = "Lead Magnet",
  title,
  description,
  actionLabel,
  actionHref,
  children
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-smoke p-6 shadow-subtle md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <Badge>{eyebrow}</Badge>
          <h3 className="font-serif text-2xl text-charcoal md:text-3xl">
            {title}
          </h3>
          <p className="max-w-xl text-sm text-charcoal/70 md:text-base">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button href={actionHref}>{actionLabel}</Button>
          {children}
        </div>
      </div>
    </div>
  );
}

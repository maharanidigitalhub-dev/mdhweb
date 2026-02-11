import type { ReactNode } from "react";

export function Badge({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill border border-line/90 bg-smoke px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/75 ${className}`}
    >
      {children}
    </span>
  );
}

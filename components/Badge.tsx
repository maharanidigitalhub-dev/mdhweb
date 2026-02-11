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
      className={`inline-flex items-center rounded-pill border border-micro/35 bg-micro/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-micro ${className}`}
    >
      {children}
    </span>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] transition hover:-translate-y-0.5 hover:shadow-subtle";

const variants = {
  primary:
    "bg-charcoal text-cream hover:bg-charcoal/90",
  secondary:
    "bg-transparent text-charcoal hover:bg-charcoal/5",
  ghost:
    "bg-transparent text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5"
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = ""
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

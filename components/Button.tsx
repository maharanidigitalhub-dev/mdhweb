import Link from "next/link";
import type { ReactNode } from "react";

const baseClasses =
  "inline-flex h-11 items-center justify-center gap-2 rounded-pill border px-5 text-xs font-semibold uppercase tracking-[0.24em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variants = {
  primary: "border-charcoal bg-charcoal text-cream hover:bg-charcoal/90",
  secondary: "border-line bg-transparent text-charcoal hover:bg-smoke",
  ghost:
    "border-transparent bg-transparent text-charcoal/70 hover:border-line hover:bg-smoke hover:text-charcoal"
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

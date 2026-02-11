import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
};

const variants = {
  default: "border border-line bg-white/70",
  elevated: "border border-line bg-white/90 shadow-subtle"
};

export default function Card({
  children,
  variant = "default",
  className = ""
}: CardProps) {
  return (
    <div className={`rounded-2xl p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
};

const variants = {
  default: "border border-line/80 bg-mist",
  elevated: "border border-line/80 bg-white shadow-subtle"
};

export default function Card({
  children,
  variant = "default",
  className = ""
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

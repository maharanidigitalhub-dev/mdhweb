import { Card } from "@/components/Card";

export function TestimonialCard({
  quote,
  name,
  role
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <Card variant="elevated" className="space-y-4">
      <p className="text-base text-charcoal/80">“{quote}”</p>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
          {name}
        </p>
        <p className="text-xs text-charcoal/50">{role}</p>
      </div>
    </Card>
  );
}

import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="bg-cream">
      <Container>
        <div className="grid gap-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
            Page not found
          </p>
          <h1 className="font-serif text-4xl text-charcoal">We could not find that page.</h1>
          <p className="text-sm text-charcoal/70">
            Return to the main hub or explore services and products.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/">Go Home</Button>
            <Link
              href="/services"
              className="rounded-full border border-charcoal/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal"
            >
              View Services
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

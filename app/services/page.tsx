import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { Button } from "@/components/Button";

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <SectionHeading
              eyebrow="Services"
              title="Strategic services for premium growth"
              description="Select a focused engagement or combine services for a full launch ecosystem."
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-6 py-16 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle transition hover:-translate-y-1"
              >
                <h3 className="font-serif text-2xl text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  {service.summary}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Explore details
                </p>
              </Link>
            ))}
          </div>
          <div className="pb-16">
            <div className="rounded-3xl border border-line bg-smoke p-8 text-center shadow-subtle">
              <h2 className="font-serif text-2xl text-charcoal">
                Not sure where to begin?
              </h2>
              <p className="mt-2 text-sm text-charcoal/70">
                Book a call to map the right engagement for your goals.
              </p>
              <div className="mt-6 flex justify-center">
                <Button href="/contact">Book a Call</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

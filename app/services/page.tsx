import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { services } from "@/data/services";

const processSteps = [
  {
    title: "Discover",
    description: "Align on goals, audience, and success metrics."
  },
  {
    title: "Design",
    description: "Craft the narrative, wireframes, and editorial UI system."
  },
  {
    title: "Build",
    description: "Develop conversion-ready pages with performance in mind."
  },
  {
    title: "Refine",
    description: "Optimize based on analytics, feedback, and launch learnings."
  }
];

const costFactors = [
  "Scope of strategy and messaging",
  "Number of pages or funnel steps",
  "Integration complexity",
  "Timeline and launch priority"
];

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      <Section
        eyebrow="Services"
        title="Strategic services for premium growth"
        subtitle="Choose a focused engagement or combine services for a complete launch system."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              <Card className="space-y-4 transition group-hover:-translate-y-1 group-hover:shadow-subtle">
                <h3 className="font-serif text-2xl text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal/70">{service.summary}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Explore details
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="How we work"
        subtitle="A calm, structured process designed to deliver clarity and momentum."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step.title} className="space-y-3">
              <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
              <p className="text-sm text-charcoal/70">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Investment"
        title="Starting range and what shapes cost"
        subtitle="Most engagements begin between $4,800 and $9,500 depending on scope."
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <Card className="space-y-4">
            <p className="text-sm text-charcoal/70">
              We tailor each engagement to the scope of strategy, design, and
              automation required. We will map the best-fit range after a short
              discovery call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Book a Call</Button>
              <Button href="/products" variant="secondary">
                Shop Products
              </Button>
            </div>
          </Card>
          <Card className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
              What affects cost
            </p>
            <ul className="space-y-2 text-sm text-charcoal/70">
              {costFactors.map((factor) => (
                <li key={factor} className="border-b border-line pb-2 last:border-none">
                  {factor}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <section className="border-b border-line">
        <Container>
          <div className="py-section-y-lg text-center">
            <h2 className="font-serif text-3xl text-charcoal">
              Ready to map your launch?
            </h2>
            <p className="mt-3 text-sm text-charcoal/70">
              Book a call to discuss timelines, scope, and the right service mix.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact">Book a Call</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

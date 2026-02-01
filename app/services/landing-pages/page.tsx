import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QualificationForm } from "@/components/QualificationForm";
import { Section } from "@/components/Section";

const outcomes = [
  "Clear positioning and message hierarchy",
  "Conversion-ready layout and copy flow",
  "Performance-optimized, SEO-ready build"
];

const deliverables = [
  "Strategic narrative workshop",
  "Wireframes and editorial design system",
  "Responsive Next.js build",
  "Analytics and conversion tracking setup"
];

const processSteps = [
  "Discovery and positioning alignment",
  "Content architecture and wireframes",
  "Visual design and interaction system",
  "Build, QA, and launch support"
];

const faqs = [
  {
    question: "How long does a landing page project take?",
    answer:
      "Most landing page engagements take three to four weeks depending on scope and stakeholder feedback."
  },
  {
    question: "Will you work with our existing brand?",
    answer:
      "Yes. We can extend your current brand system or refresh it with a lightweight editorial layer."
  },
  {
    question: "Can you support ongoing optimization?",
    answer:
      "We offer optimization sprints and monthly support focused on conversion and performance."
  }
];

export default function LandingPageDevelopment() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Landing Page Development
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                Landing pages that balance clarity and conversion.
              </h1>
              <p className="text-lg text-charcoal/70">
                You need a landing page that feels premium and performs. We craft
                conversion journeys that align with your offer and build trust
                quickly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
            </div>
            <Card variant="elevated" className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Timeline
              </p>
              <p className="text-sm text-charcoal/70">3 to 4 weeks</p>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Ideal for
              </p>
              <p className="text-sm text-charcoal/70">
                Founders launching a flagship offer or refining a high-intent
                campaign page.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Problem framing"
        title="Premium offers fail when the story is unclear"
        subtitle="We replace scattered messaging with a structured narrative that guides visitors from curiosity to commitment."
      />

      <Section
        eyebrow="Outcomes"
        title="What you can expect"
        subtitle="Every engagement delivers measurable clarity and conversion readiness."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <Card key={outcome} className="text-sm text-charcoal/70">
              {outcome}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Deliverables"
        title="What we deliver"
        subtitle="A complete landing page system ready for launch."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {deliverables.map((item) => (
            <Card key={item} className="text-sm text-charcoal/70">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="How we build"
        subtitle="A focused sequence that keeps momentum steady."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step} className="text-sm text-charcoal/70">
              {step}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQs"
        title="Landing page questions"
        subtitle="Short answers to help you decide."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">
                Ready for a conversion-ready landing page?
              </h2>
              <p className="text-sm text-charcoal/70">
                Share a few details and we will confirm fit within two business
                days.
              </p>
            </div>
            <QualificationForm service="Landing Page Development" />
          </div>
        </Container>
      </section>
    </div>
  );
}

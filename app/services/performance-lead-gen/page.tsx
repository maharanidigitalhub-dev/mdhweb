import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QualificationForm } from "@/components/QualificationForm";
import Section from "@/components/Section";

const outcomes = [
  "Higher-intent lead capture",
  "Aligned offer and funnel narrative",
  "Analytics and lead quality insights"
];

const deliverables = [
  "Offer and funnel strategy workshop",
  "Conversion flow design",
  "Lead capture and scoring setup",
  "Performance reporting dashboard"
];

const processSteps = [
  "Funnel audit and offer alignment",
  "Message and creative mapping",
  "Build lead capture flow",
  "Optimize and iterate"
];

const faqs = [
  {
    question: "Do you manage paid media?",
    answer:
      "We focus on funnel strategy and conversion flow. We can collaborate with your media team or recommend partners."
  },
  {
    question: "How do you qualify leads?",
    answer:
      "We build lead capture questions and scoring rules to align with your sales criteria."
  },
  {
    question: "When do we see results?",
    answer:
      "You will see leading indicators within the first two weeks of launch, with optimization ongoing."
  }
];

export default function PerformanceLeadGenPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Performance Lead Gen
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                Lead generation built for quality, not noise.
              </h1>
              <p className="text-lg text-charcoal/70">
                We align your offer, funnel, and analytics to capture high-intent
                leads and keep sales teams focused on the right conversations.
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
              <p className="text-sm text-charcoal/70">4 to 6 weeks</p>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Ideal for
              </p>
              <p className="text-sm text-charcoal/70">
                Teams running campaigns who need stronger lead quality and
                measurable conversion insights.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Problem framing"
        title="High volume does not equal high value"
        subtitle="We rebuild your funnel to prioritize signal quality and sales readiness."
      />

      <Section
        eyebrow="Outcomes"
        title="What you can expect"
        subtitle="Aligned funnel messaging and measurable performance lift."
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
        subtitle="A full-funnel system that supports conversion and sales handoff."
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
        title="How we improve lead quality"
        subtitle="A structured sprint that keeps conversion insights visible."
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
        title="Lead generation questions"
        subtitle="Short answers to help you decide."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">
                Ready to raise lead quality?
              </h2>
              <p className="text-sm text-charcoal/70">
                Tell us about your funnel and we will recommend the right next
                step.
              </p>
            </div>
            <QualificationForm service="Performance Lead Gen" />
          </div>
        </Container>
      </section>
    </div>
  );
}

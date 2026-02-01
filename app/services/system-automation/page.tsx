import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QualificationForm } from "@/components/QualificationForm";
import { Section } from "@/components/Section";

const outcomes = [
  "Reduced manual handoffs",
  "Consistent client onboarding",
  "Clear documentation and workflows"
];

const deliverables = [
  "Workflow mapping and prioritization",
  "Automation build and testing",
  "Client experience scripts",
  "Team documentation and handoff"
];

const processSteps = [
  "Audit current workflow",
  "Design future-state system",
  "Build automation sequences",
  "Train and document team"
];

const faqs = [
  {
    question: "Which tools can you automate?",
    answer:
      "We work across modern CRMs, project management, and email tools. We will align with your existing stack."
  },
  {
    question: "How long does automation take?",
    answer:
      "Most system automation sprints take three to five weeks depending on the number of workflows."
  },
  {
    question: "Will our team be trained?",
    answer:
      "Yes. Documentation and training are included to keep the system easy to maintain."
  }
];

export default function SystemAutomationPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                System Automation
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                Operations that feel calm and connected.
              </h1>
              <p className="text-lg text-charcoal/70">
                We map your operations and build automation that removes manual
                tasks while keeping the client experience human and warm.
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
              <p className="text-sm text-charcoal/70">3 to 5 weeks</p>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Ideal for
              </p>
              <p className="text-sm text-charcoal/70">
                Teams scaling delivery who need calm, consistent operations.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Problem framing"
        title="Manual systems slow momentum"
        subtitle="We remove friction so your team can focus on clients and growth."
      />

      <Section
        eyebrow="Outcomes"
        title="What you can expect"
        subtitle="Automated workflows that keep teams aligned."
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
        subtitle="Systems that are documented and easy to run."
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
        title="How we automate"
        subtitle="A calm, documented approach that supports your team."
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
        title="Automation questions"
        subtitle="Short answers to help you decide."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">
                Ready to streamline operations?
              </h2>
              <p className="text-sm text-charcoal/70">
                Share your workflow goals and we will confirm fit within two
                business days.
              </p>
            </div>
            <QualificationForm service="System Automation" />
          </div>
        </Container>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import Card from "@/components/Card";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { FAQAccordion } from "@/components/FAQAccordion";
import Section from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";

const faqs = [
  {
    question: "How do we get started?",
    answer:
      "Book a call and we will map the right engagement and timeline for your goals."
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer optimization retainers for conversion, content, and system updates."
  }
];

export default function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <div className="bg-cream">
      <Section
        eyebrow="Playground"
        title="Component showcase"
        subtitle="This page surfaces UI building blocks to review the editorial system."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="space-y-4">
              <Badge>Badge</Badge>
              <h3 className="font-serif text-2xl text-charcoal">Card default</h3>
              <p className="text-sm text-charcoal/70">
                Calm surfaces with soft borders and spacious typography.
              </p>
              <Divider />
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </Card>
          <TestimonialCard
            quote="The MDH system brought clarity and elevated our conversion in a single sprint."
            name="Alya Morgan"
            role="Founder, Studio Vale"
          />
        </div>
      </Section>

      <Container>
        <div className="pb-section-y-lg">
          <Callout
            title="Get the premium launch guide"
            description="A concise weekly dispatch on conversion, narrative, and calm systems."
            actionLabel="Join the list"
            actionHref="/contact"
          />
        </div>
      </Container>

      <Container>
        <div className="pb-section-y-lg">
          <h2 className="font-serif text-3xl text-charcoal">FAQ accordion</h2>
          <div className="mt-6">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </Container>
    </div>
  );
}

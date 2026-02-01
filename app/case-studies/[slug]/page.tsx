import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudyDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: study.title,
    industry: study.industry,
    description: study.problem
  };

  return (
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {study.industry}
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {study.title}
              </h1>
              <p className="text-lg text-charcoal/70">{study.problem}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/services" variant="secondary">
                  View Services
                </Button>
              </div>
            </div>
            <Card variant="elevated" className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Timeline
              </p>
              <p className="text-sm text-charcoal/70">{study.timeline}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Context"
        title="The challenge"
        subtitle={study.problem}
      />

      <Section
        eyebrow="Strategy"
        title="Our approach"
        subtitle="We aligned narrative, conversion flow, and operations to build momentum."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {study.approach.map((item) => (
            <Card key={item} className="text-sm text-charcoal/70">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Execution"
        title="Deliverables"
        subtitle="What we built to support the engagement."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {study.deliverables.map((item) => (
            <Card key={item} className="text-sm text-charcoal/70">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Results"
        title="Outcomes"
        subtitle="Measured gains after launch."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {study.results.map((result) => (
            <Card key={result} className="text-sm text-charcoal/70">
              {result}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Lessons"
        title="What we learned"
        subtitle="Clear positioning and calm systems consistently create momentum for premium teams."
      />

      <section className="border-b border-line">
        <Container>
          <div className="py-section-y-lg text-center">
            <h2 className="font-serif text-3xl text-charcoal">
              Ready to apply these lessons?
            </h2>
            <p className="mt-3 text-sm text-charcoal/70">
              Book a call and we will map the right next step for your team.
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

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
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

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {study.client}
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {study.title}
              </h1>
              <p className="text-lg text-charcoal/70">{study.summary}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/services" variant="secondary">
                  View Services
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Services delivered
              </p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                {study.services.map((service) => (
                  <li key={service} className="border-b border-line pb-3 last:border-none">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">Approach</h2>
              <p className="text-sm text-charcoal/70">
                We refined the brand narrative, introduced a structured landing
                page journey, and aligned the lead flow with the sales team. The
                result was higher quality leads and a more confident launch
                rhythm.
              </p>
              <p className="text-sm text-charcoal/70">
                We also delivered automation workflows to keep onboarding
                seamless and consistent across each campaign sprint.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-smoke p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Results
              </p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                {study.results.map((result) => (
                  <li key={result} className="border-b border-line pb-3 last:border-none">
                    {result}
                  </li>
                ))}
              </ul>
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

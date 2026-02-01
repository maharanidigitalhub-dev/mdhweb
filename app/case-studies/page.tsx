import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <SectionHeading
              eyebrow="Case Studies"
              title="Proof of calm, premium growth"
              description="A closer look at how MDH partners with founders to deliver measurable outcomes."
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-6 py-16 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  {study.client}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  {study.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

import { Container } from "@/components/Container";
import Section from "@/components/Section";
import { CaseStudyFilter } from "@/components/CaseStudyFilter";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <div className="bg-cream">
      <Section
        eyebrow="Case Studies"
        title="Proof of calm, premium growth"
        subtitle="A closer look at how MDH partners with founders to deliver measurable outcomes."
      >
        <CaseStudyFilter studies={caseStudies} />
      </Section>

      <section className="border-b border-line">
        <Container>
          <div className="py-section-y-lg text-center">
            <h2 className="font-serif text-3xl text-charcoal">
              Ready to build your story?
            </h2>
            <p className="mt-3 text-sm text-charcoal/70">
              Book a call to map your launch, funnel, or system redesign.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/contact"
                className="rounded-full bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-cream"
              >
                Book a Call
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadCapture } from "@/components/LeadCapture";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { faqs, testimonials, trustStrip } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Premium marketing and product studio",
  description:
    "Maharani Digital Hub delivers calm, conversion-first landing pages, lead generation systems, and digital products for modern founders.",
  openGraph: {
    title: "Maharani Digital Hub",
    description:
      "Calm, conversion-first services and products for premium brands.",
    url: "https://maharanidigitalhub.com",
    type: "website"
  }
};

export default function HomePage() {

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maharani Digital Hub",
    url: "https://maharanidigitalhub.com"
  };

  return (
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-12 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <Badge>Premium marketing and product studio</Badge>
              <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                Calm systems for conversion-ready launches.
              </h1>
              <p className="text-lg text-charcoal/70">
                Maharani Digital Hub partners with founders who want quiet
                confidence across landing pages, lead generation, and digital
                products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
            </div>
            <Card variant="elevated" className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Outcomes
                </p>
                <p className="text-sm text-charcoal/70">
                  Strategic positioning, conversion architecture, and automation
                  that keeps your team focused on high-impact work.
                </p>
              </div>
              <div className="space-y-4 text-sm text-charcoal/70">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>Launch clarity</span>
                  <span className="font-semibold text-charcoal">Aligned</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>Lead quality</span>
                  <span className="font-semibold text-charcoal">Elevated</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Operations</span>
                  <span className="font-semibold text-charcoal">Streamlined</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="grid gap-6 py-8 md:grid-cols-5 md:gap-4">
            {trustStrip.map((item) => (
              <div
                key={item}
                className="rounded-full border border-line bg-cream px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section
        eyebrow="What we do"
        title="Services designed for calm growth"
        subtitle="Strategic engagements that bring clarity, conversion, and operational ease."
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
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/50">
                  View service
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured products"
        title="Digital products built for momentum"
        subtitle="Ready-to-use playbooks and templates that pair with our services."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Card variant="elevated" className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  {product.priceDisplay}
                </p>
                <h3 className="font-serif text-2xl text-charcoal">
                  {product.title}
                </h3>
                <p className="text-sm text-charcoal/70">
                  {product.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={`${product.slug}-${tag}`}
                      className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Case studies"
        title="Proof of calm, conversion-first growth"
        subtitle="Highlights from recent client engagements."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <Card key={study.slug} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {study.industry}
              </p>
              <h3 className="font-serif text-2xl text-charcoal">
                {study.title}
              </h3>
              <p className="text-sm text-charcoal/70">{study.problem}</p>
              <ul className="space-y-2 text-xs text-charcoal/60">
                {study.results.slice(0, 2).map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <Link
                href={`/case-studies/${study.slug}`}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60"
              >
                View case study
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Lead magnet"
        title="Get the premium launch guide"
        subtitle="A short weekly insight on conversion, narrative, and systems."
      >
        <LeadCapture />
      </Section>

      <Section
        eyebrow="FAQs"
        title="Answers to keep you moving"
        subtitle="Clear expectations before we build."
      >
        <FAQAccordion items={faqs} />
      </Section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="grid gap-10 py-section-y-lg">
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container>
          <div className="py-section-y-lg">
            <Callout
              eyebrow="Next step"
              title="Ready for calm, conversion-first growth?"
              description="Book a call to map your launch, or explore our premium product library."
              actionLabel="Book a Call"
              actionHref="/contact"
            >
              <Button href="/products" variant="secondary">
                Shop Products
              </Button>
            </Callout>
          </div>
        </Container>
      </section>
    </div>
  );
}

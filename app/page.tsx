import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LeadCapture } from "@/components/LeadCapture";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { faqs, testimonials, trustBlocks } from "@/data/marketing";

export default function HomePage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-20 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Premium marketing and product studio
              </p>
              <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                A calm digital hub for conversion-ready launches and premium
                systems.
              </h1>
              <p className="text-lg text-charcoal/70">
                Maharani Digital Hub partners with modern founders to deliver
                high-performing landing experiences, lead generation systems, and
                digital products that scale with clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.32em] text-charcoal/50">
                <span>Launch Strategy</span>
                <span>Conversion Design</span>
                <span>System Automation</span>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-white/80 p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Trusted outcomes
              </p>
              <div className="mt-6 space-y-6">
                {trustBlocks.map((block) => (
                  <div key={block.title} className="space-y-2">
                    <h3 className="font-serif text-xl text-charcoal">
                      {block.title}
                    </h3>
                    <p className="text-sm text-charcoal/70">
                      {block.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="grid gap-8 py-16 md:grid-cols-[1fr,1.2fr] md:items-center">
            <SectionHeading
              eyebrow="Services"
              title="End-to-end growth support for premium brands"
              description="Each engagement is designed to clarify your narrative, increase qualified leads, and build systems that keep your team focused."
            />
            <div className="grid gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-3xl border border-line bg-cream p-6 shadow-subtle transition hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {service.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                      View
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-charcoal/70">
                    {service.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16">
            <SectionHeading
              eyebrow="Products"
              title="Digital products designed for fast momentum"
              description="Shop premium templates, playbooks, and systems built by MDH."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                    {product.format}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-charcoal">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                    {product.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
            <SectionHeading
              eyebrow="Case Study"
              title={caseStudies[0].title}
              description={caseStudies[0].summary}
            >
              <Button href={`/case-studies/${caseStudies[0].slug}`}>
                Read the Story
              </Button>
            </SectionHeading>
            <div className="rounded-3xl border border-line bg-cream p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Results
              </p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                {caseStudies[0].results.map((result) => (
                  <li key={result} className="border-b border-line pb-3 last:border-none">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by founders who want steady, premium growth"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-line bg-white/70 p-6 shadow-subtle"
                >
                  <p className="text-base text-charcoal/80">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal/50">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="grid gap-8 py-16 md:grid-cols-[1fr,1.2fr]">
            <SectionHeading
              eyebrow="Lead Magnet"
              title="Get the premium launch guide"
              description="A short weekly insight on conversion, narrative, and systems."
            />
            <LeadCapture />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-10 py-16">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to common questions"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle"
                >
                  <h3 className="font-serif text-xl text-charcoal">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

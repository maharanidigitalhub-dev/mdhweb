import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";
import { Button } from "@/components/Button";

export default function ProductsPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <SectionHeading
              eyebrow="Products"
              title="Premium digital products for focused growth"
              description="Curated playbooks and templates built for modern founders who want clarity and speed."
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-6 py-16 md:grid-cols-3">
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
        </Container>
      </section>
      <section className="border-t border-line bg-smoke">
        <Container>
          <div className="py-12 text-center">
            <h2 className="font-serif text-2xl text-charcoal">
              Need a tailored engagement?
            </h2>
            <p className="mt-2 text-sm text-charcoal/70">
              We blend products with bespoke services for launch support.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { products } from "@/data/products";

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Digital product
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {product.name}
              </h1>
              <p className="text-lg text-charcoal/70">{product.tagline}</p>
              <p className="text-sm text-charcoal/70">{product.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Product details
              </p>
              <div className="mt-4 space-y-3 text-sm text-charcoal/70">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>Price</span>
                  <span className="font-semibold text-charcoal">{product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span className="font-semibold text-charcoal">{product.format}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-charcoal">
                What is included
              </h2>
              <ul className="space-y-3 text-sm text-charcoal/70">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="border-b border-line pb-3 last:border-none">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-smoke p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Recommended for
              </p>
              <p className="mt-4 text-sm text-charcoal/70">
                Founders who want a structured playbook and premium design system
                without waiting on a full bespoke engagement.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

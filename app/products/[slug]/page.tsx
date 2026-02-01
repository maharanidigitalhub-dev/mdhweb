import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";
import { checkoutUrl } from "@/lib/config";
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

  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {product.tags.join(" ")}
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {product.title}
              </h1>
              <p className="text-lg text-charcoal/70">
                {product.shortDescription}
              </p>
              <p className="text-sm text-charcoal/70">{product.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button href={checkoutUrl}>Buy</Button>
                <Button href="/products" variant="secondary">
                  Back to Products
                </Button>
              </div>
            </div>
            <Card variant="elevated" className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                Price
              </p>
              <p className="text-2xl font-serif text-charcoal">
                {product.priceDisplay}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="What is inside"
        title="Included with this product"
        subtitle="Templates and guidance to speed up execution."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {product.includes.map((item) => (
            <Card key={item} className="text-sm text-charcoal/70">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Who it is for"
        title="Ideal fit"
        subtitle="Built for teams who want clear, premium systems."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-3">
            <h3 className="font-serif text-xl text-charcoal">For</h3>
            <ul className="space-y-2 text-sm text-charcoal/70">
              {product.whoItsFor.map((item) => (
                <li key={item} className="border-b border-line pb-2 last:border-none">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-3">
            <h3 className="font-serif text-xl text-charcoal">Not for</h3>
            <ul className="space-y-2 text-sm text-charcoal/70">
              {product.whoItsNotFor.map((item) => (
                <li key={item} className="border-b border-line pb-2 last:border-none">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Product questions"
        subtitle="Short answers to help you decide."
      >
        <FAQAccordion items={product.faq} />
      </Section>

      <Section
        eyebrow="Related"
        title="Pair it with"
        subtitle="Complementary products for your system."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <Card key={item.slug} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {item.priceDisplay}
              </p>
              <h3 className="font-serif text-2xl text-charcoal">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal/70">{item.shortDescription}</p>
              <Link
                href={`/products/${item.slug}`}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60"
              >
                View product
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

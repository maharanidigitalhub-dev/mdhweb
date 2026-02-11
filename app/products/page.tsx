import { Callout } from "@/components/Callout";
import { Container } from "@/components/Container";
import { ProductFilter } from "@/components/ProductFilter";
import { ProductSampleForm } from "@/components/ProductSampleForm";
import { Section } from "@/components/Section";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="bg-cream">
      <Section
        eyebrow="Products"
        title="Premium digital products for focused growth"
        subtitle="Curated playbooks and templates built for modern founders who want clarity and speed."
      >
        <ProductFilter products={products} />
      </Section>

      <section className="border-b border-line bg-smoke">
        <Container>
          <div className="py-section-y-lg">
            <Callout
              eyebrow="Free sample"
              title="Get a free conversion checklist"
              description="A concise checklist for high-trust landing pages."
              actionLabel="Browse all products"
              actionHref="/products"
            >
              <div className="w-full max-w-sm">
                <ProductSampleForm />
              </div>
            </Callout>
          </div>
        </Container>
      </section>
    </div>
  );
}

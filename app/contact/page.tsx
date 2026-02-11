import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ProductSupportForm } from "@/components/ProductSupportForm";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1fr,1fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Choose the route that fits your request"
              description="Use Services inquiry for project work and Product support for purchased resources."
            />
            <div className="space-y-4 text-sm text-charcoal/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">Email</p>
                <p>{site.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">Phone</p>
                <p>{site.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">Location</p>
                <p>
                  {site.address.city}, {site.address.region}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container>
          <div className="grid gap-8 py-section-y-lg md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-charcoal">Services inquiry</h2>
              <p className="text-sm text-charcoal/70">
                Tell us about your launch, funnel, or automation goals.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-4">
              <p className="text-sm text-charcoal/70">
                Need help with a purchased product? Use the support form so we can route your request quickly.
              </p>
              <ProductSupportForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

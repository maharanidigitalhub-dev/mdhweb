import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[1fr,1fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Book a calm, strategic growth call"
              description="Tell us about your goals. We respond within two business days."
            />
            <div className="space-y-4 text-sm text-charcoal/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Email
                </p>
                <p>{site.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Phone
                </p>
                <p>{site.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  Location
                </p>
                <p>
                  {site.address.city}, {site.address.region}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="py-16">
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}

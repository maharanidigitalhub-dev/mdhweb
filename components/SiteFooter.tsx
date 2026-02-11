import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-policy", label: "Refund Policy" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[2fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream">
              Maharani Digital Hub
            </p>
            <p className="max-w-sm text-sm leading-7 text-cream/78">
              Premium digital systems, landing experiences, and product studios for
              founders who value clarity and calm growth.
            </p>
            <div className="space-y-1 text-sm text-cream/70">
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-cream/75">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/95">
              Explore
            </p>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3 text-sm text-cream/75">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/95">
              Legal
            </p>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block transition hover:text-secondary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-cream/20 py-6 text-xs text-cream/60">
          © {new Date().getFullYear()} Maharani Digital Hub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

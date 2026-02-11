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
    <footer className="border-t border-line/70 bg-mist">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[2fr,1fr,1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal">
              Maharani Digital Hub
            </p>
            <p className="max-w-sm text-sm leading-7 text-charcoal/75">
              Premium digital systems, landing experiences, and product studios for
              founders who value clarity and calm growth.
            </p>
            <div className="space-y-1 text-sm text-charcoal/70">
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-charcoal/75">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">
              Explore
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3 text-sm text-charcoal/75">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">
              Legal
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-line/70 py-6 text-xs text-charcoal/60">
          © {new Date().getFullYear()} Maharani Digital Hub. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

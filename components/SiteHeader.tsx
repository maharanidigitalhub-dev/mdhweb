import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-cream/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em]">
            Maharani Digital Hub
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-charcoal/70 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button href="/products" variant="secondary">
              Shop Products
            </Button>
            <Button href="/contact">Book a Call</Button>
          </div>
          <div className="md:hidden">
            <Button href="/contact" variant="secondary">
              Book a Call
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

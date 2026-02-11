import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
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
              <Link key={link.href} href={link.href} className="transition hover:text-charcoal">
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

          <details className="relative md:hidden">
            <summary className="list-none rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60">
              Menu
            </summary>
            <div className="absolute right-0 z-20 mt-3 w-64 rounded-2xl border border-line bg-cream p-4 shadow-subtle">
              <nav className="grid gap-3 text-sm text-charcoal/80">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-xl px-2 py-1 hover:bg-smoke">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid gap-2">
                <Button href="/contact">Book a Call</Button>
                <Button href="/products" variant="secondary">
                  Shop Products
                </Button>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

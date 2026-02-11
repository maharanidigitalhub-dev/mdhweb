import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Maharani Digital Hub",
    template: "%s | Maharani Digital Hub"
  },
  description: site.description,
  keywords: [
    "marketing studio",
    "landing pages",
    "lead generation",
    "system automation",
    "digital products"
  ],
  openGraph: {
    title: "Maharani Digital Hub",
    description: site.description,
    url: site.url,
    siteName: "Maharani Digital Hub",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharani Digital Hub",
    description: site.description
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country
    }
  };

  return (
    <html lang="en">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

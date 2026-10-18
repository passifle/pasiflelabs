import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const siteUrl = "https://passiflelabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Passifle Labs — strategy, systems & experience",
    template: "%s — Passifle Labs",
  },
  description:
    "Passifle Labs is an independent consultancy helping ambitious companies turn complex ideas into clear strategy, intelligent systems, and memorable experiences.",
  applicationName: "Passifle Labs",
  authors: [{ name: "Passifle Labs" }],
  creator: "Passifle Labs",
  publisher: "Passifle Labs",
  alternates: { canonical: siteUrl },
  keywords: [
    "business consultancy",
    "strategy consultancy",
    "AI transformation",
    "digital product strategy",
    "brand strategy",
    "Passifle Labs",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Passifle Labs",
    title: "Passifle Labs — make the complex move",
    description:
      "Strategy, intelligent systems, and memorable experiences for companies ready to move with intention.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Passifle Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passifle Labs — make the complex move",
    description:
      "Strategy, intelligent systems, and memorable experiences for companies ready to move with intention.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/passifle-labs-logo-mark.png" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0c0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Passifle Labs",
            url: siteUrl,
            description: metadata.description,
            areaServed: "Worldwide",
            serviceType: ["Business strategy", "AI transformation", "Digital experience"],
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

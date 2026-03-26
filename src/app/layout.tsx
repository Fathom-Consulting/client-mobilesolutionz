import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { getLocalBusinessSchema, getFAQSchema } from "@/lib/schema";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://mobilesolutionz.com";
const OG_IMAGE =
  "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE2uxySWUdiRU0fAyw9EBIPc6XOYxzWJ3utmSV";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mobile Solutionz | Premium Mobile Detailing — Medford, Oregon",
    template: "%s | Mobile Solutionz",
  },
  description:
    "Certified System X installer and premium mobile auto detailing serving the Rogue Valley. Paint correction, ceramic coating, and full detailing packages brought to your door in Medford, Oregon.",
  keywords: [
    "mobile detailing Medford Oregon",
    "ceramic coating Medford OR",
    "paint correction Rogue Valley",
    "System X certified installer Oregon",
    "mobile car detailing Ashland",
    "car detailing Jacksonville Oregon",
    "mobile detailing near me Medford",
  ],
  authors: [{ name: "Mobile Solutionz" }],
  creator: "Mobile Solutionz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mobile Solutionz",
    title: "Mobile Solutionz | Premium Mobile Detailing — Medford, Oregon",
    description:
      "Certified System X installer. Paint correction, ceramic coating, interior and exterior detailing brought to your door in the Rogue Valley.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mobile Solutionz — Premium Mobile Car Detailing in Medford, Oregon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Solutionz | Premium Mobile Detailing",
    description:
      "Certified System X installer serving Medford, Ashland, and the Rogue Valley. We bring the studio to your driveway.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} ${cormorant.variable}`}
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema()),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-[var(--olive)] focus:text-[var(--cream)] focus:px-4 focus:py-2 focus:font-[var(--font-barlow-condensed)] focus:tracking-widest focus:uppercase focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

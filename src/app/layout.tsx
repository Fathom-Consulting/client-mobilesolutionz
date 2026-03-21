import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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

export const metadata: Metadata = {
  title: "Mobile Solutionz | Premium Mobile Detailing — Medford, Oregon",
  description:
    "Certified System X installer and premium mobile car detailing studio serving the Rogue Valley. Paint correction, ceramic coating, and protection packages brought to your door.",
  keywords: [
    "mobile detailing",
    "ceramic coating",
    "paint correction",
    "System X",
    "Medford Oregon",
    "car detailing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import images from "./images.json";

const inter = Inter({ subsets: ["latin"] });

// Define the metadata object
export const metadata = {
  title: "Mobile Solutionz - Premium Mobile Car Detailing in Medford, Oregon",
  description:
    "Experience professional mobile car detailing services in Medford and Southern Oregon. We bring excellence to your doorstep with our premium auto detailing solutions.",
  keywords:
    "car detailing, mobile detailing, Medford, Southern Oregon, auto detailing, vehicle cleaning, ceramic coating",
  openGraph: {
    title: "Mobile Solutionz - Premium Mobile Car Detailing",
    description:
      "Professional mobile car detailing services in Medford, Oregon",
    url: "https://mobile-solutionz.com",
    siteName: "Mobile Solutionz",
    images: [
      {
        url: images["mobile-solutionz-logo.webp"],
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Solutionz - Premium Mobile Car Detailing",
    description:
      "Professional mobile car detailing services in Medford, Oregon",
    images: [images["mobile-solutionz-logo.webp"]],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${inter.className} bg-black overflow-x-hidden max-w-[100vw]`}
        style={{ minHeight: "100vh" }}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}

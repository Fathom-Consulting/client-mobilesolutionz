import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[var(--ink)] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <CheckCircle
          size={48}
          strokeWidth={1.5}
          className="text-[var(--olive)] mx-auto mb-6"
          aria-hidden="true"
        />
        <h1 className="font-[var(--font-bebas)] text-5xl tracking-widest text-[var(--cream)] mb-4">
          Request Received
        </h1>
        <p className="font-[var(--font-barlow)] text-[var(--ash)] leading-relaxed mb-10">
          We&apos;ve received your request. Chano will reach out within 24 hours
          to discuss your vehicle and schedule your detail.
        </p>
        <Link
          href="/"
          className="clip-btn inline-flex items-center justify-center bg-[var(--olive)] hover:bg-[var(--olive-lt)] text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-8 py-3.5 text-sm transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

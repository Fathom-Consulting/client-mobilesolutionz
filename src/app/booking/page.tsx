import { Suspense } from "react";
import Nav from "@/components/Nav";
import BookingForm from "@/components/sections/BookingForm";
import Footer from "@/components/sections/Footer";

export default function BookingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[var(--ink)] pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
              Ready to Book
            </p>
            <h1 className="font-[var(--font-bebas)] text-[clamp(3rem,7vw,6rem)] tracking-widest text-[var(--cream)] leading-none mb-4">
              Schedule Your Detail
            </h1>
            <p className="font-[var(--font-barlow)] text-[var(--ash)] leading-relaxed">
              Tell us about your vehicle and what you are looking to achieve. We
              will confirm within 24 hours.
            </p>
          </div>

          <div className="bg-[var(--charcoal)] border border-white/5 p-8 md:p-12">
            <Suspense>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

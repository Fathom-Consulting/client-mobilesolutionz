"use client";

import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-[var(--ink)]"
      aria-label="Book a detail"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-4">
            Ready When You Are
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] tracking-widest text-[var(--cream)] leading-none mb-6">
            Book Your Detail
          </h2>
          <div className="olive-divider w-24 mx-auto mb-8" />
          <p className="font-[var(--font-barlow)] text-[var(--ash)] text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Fill out the form and we will confirm your appointment within 24
            hours. Every detail starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/booking"
              className="clip-btn inline-flex items-center justify-center gap-3 bg-[var(--olive)] hover:bg-[var(--olive-lt)] text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-12 py-4 text-base transition-colors duration-200"
            >
              Schedule Online
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-[var(--olive)]/60 text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-12 py-4 text-base transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={1.5} />
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

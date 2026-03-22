"use client";

import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
  const items = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="py-24 bg-[var(--charcoal)] overflow-hidden"
      aria-label="Google reviews"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
            What Clients Say
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
            Google Reviews
          </h2>
          <div className="olive-divider w-24 mt-4" />
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--charcoal)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--charcoal)] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 animate-ticker"
          style={{ width: "max-content", animationDuration: "50s" }}
        >
          {items.map((review, i) => (
            <div
              key={i}
              className="w-[min(80vw,20rem)] shrink-0 bg-[var(--steel)] border border-white/5 p-6 flex flex-col gap-4"
            >
              <div
                className="flex gap-1"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    strokeWidth={0}
                    fill={j < review.rating ? "var(--olive)" : "var(--muted)"}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[var(--font-barlow-condensed)] font-semibold text-[var(--cream)] text-sm tracking-wide">
                    {review.name}
                  </p>
                  <p className="font-[var(--font-barlow)] text-[10px] text-[var(--muted)] mt-0.5">
                    {review.date}
                  </p>
                </div>
                <span className="font-[var(--font-barlow-condensed)] text-[10px] tracking-wider uppercase text-[var(--muted)] border border-white/10 px-2 py-1">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <motion.a
          href="https://g.page/r/mobilesolutionz/review"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 font-[var(--font-barlow-condensed)] text-xs tracking-[0.2em] uppercase text-[var(--olive)] hover:text-[var(--olive-lt)] transition-colors duration-200"
        >
          See All Reviews on Google
          <ExternalLink size={12} strokeWidth={1.5} />
        </motion.a>
      </div>
    </section>
  );
}

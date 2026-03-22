"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PACKAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[var(--charcoal)]" aria-label="Pricing">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
            Investment
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
            Service Packages
          </h2>
          <div className="olive-divider w-24 mt-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-barlow)] text-[var(--ash)] text-sm mb-16 max-w-xl"
        >
          Pricing varies by vehicle size, condition, and current schedule. All
          packages are quoted after a brief vehicle assessment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={cn(
                "relative flex flex-col bg-[var(--steel)] p-6 sm:p-8 hover:bg-[var(--panel)] transition-colors duration-300",
                pkg.popular && "ring-1 ring-[var(--olive)]"
              )}
            >
              {pkg.badge && (
                <span className="absolute top-0 right-0 bg-[var(--olive)] text-[var(--ink)] text-[10px] font-[var(--font-barlow-condensed)] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
                  {pkg.badge}
                </span>
              )}
              {pkg.popular && !pkg.badge && (
                <span className="absolute top-0 right-0 bg-[var(--olive)]/20 border border-[var(--olive)]/40 text-[var(--olive)] text-[10px] font-[var(--font-barlow-condensed)] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
                  Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-[var(--font-bebas)] text-3xl tracking-widest text-[var(--cream)] mb-1">
                  {pkg.name}
                </h3>
                <p className="font-[var(--font-barlow-condensed)] text-xs tracking-wider uppercase text-[var(--ash)] mb-4">
                  {pkg.tagline}
                </p>
                <div className="font-[var(--font-bebas)] text-4xl sm:text-5xl tracking-wider text-[var(--olive)]">
                  {pkg.priceRange}
                </div>
                <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)] mt-1">
                  Starting range. Varies by vehicle size and condition.
                </p>
              </div>

              <div className="olive-divider mb-6" />

              {pkg.interior.length > 0 && (
                <div className="mb-4">
                  <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
                    Interior
                  </p>
                  <ul className="space-y-2">
                    {pkg.interior.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={14}
                          strokeWidth={1.5}
                          className="text-[var(--olive)] mt-0.5 shrink-0"
                        />
                        <span className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.exterior.length > 0 && (
                <div className="mb-6">
                  <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
                    Exterior
                  </p>
                  <ul className="space-y-2">
                    {pkg.exterior.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={14}
                          strokeWidth={1.5}
                          className="text-[var(--olive)] mt-0.5 shrink-0"
                        />
                        <span className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto">
                <a
                  href={`/booking?package=${encodeURIComponent(pkg.name)}`}
                  className="clip-btn flex items-center justify-center gap-2 bg-[var(--olive)]/20 hover:bg-[var(--olive)] border border-[var(--olive)]/40 hover:border-[var(--olive)] text-[var(--olive)] hover:text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase text-sm py-3.5 transition-all duration-200"
                >
                  Book {pkg.name} <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-px bg-[var(--panel)] border border-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-widest text-[var(--cream)] mb-1">
              Not Sure Which Package Fits?
            </h3>
            <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)]">
              Tell us about your vehicle and goals. We will recommend the right
              service for your budget.
            </p>
          </div>
          <a
            href="/booking"
            className="clip-btn shrink-0 flex items-center gap-2 bg-[var(--olive)] hover:bg-[var(--olive-lt)] text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase text-sm px-8 py-3.5 transition-colors duration-200"
          >
            Get a Custom Quote <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

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
          {PACKAGES.map((pkg, i) => {
            const parentPkg =
              "inheritsFrom" in pkg && pkg.inheritsFrom
                ? PACKAGES.find((p) => p.id === pkg.inheritsFrom)
                : null;

            return (
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
                  <p className="font-[var(--font-barlow-condensed)] text-xs tracking-wider uppercase text-[var(--ash)] mb-2">
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

                {/* Inherited features from parent */}
                {parentPkg && (
                  <div className="mb-5">
                    <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
                      Everything in {parentPkg.name}
                    </p>
                    <ul className="space-y-2">
                      {[...parentPkg.interior, ...parentPkg.exterior].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            size={14}
                            strokeWidth={1.5}
                            className="text-[var(--olive)]/40 mt-0.5 shrink-0"
                          />
                          <span className="font-[var(--font-barlow)] text-sm text-[var(--muted)] leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 border-t border-white/[0.06]" />
                  </div>
                )}

                {/* New features in this tier */}
                {(pkg.interior.length > 0 || pkg.exterior.length > 0) && (
                  <div className="mb-6">
                    {parentPkg && (
                      <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--olive)] mb-3 mt-4">
                        {pkg.name} Adds
                      </p>
                    )}

                    {pkg.interior.length > 0 && (
                      <div className={cn(parentPkg ? "" : "mb-4")}>
                        {!parentPkg && (
                          <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
                            Interior
                          </p>
                        )}
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
                      <div className={cn(pkg.interior.length > 0 && "mt-4")}>
                        {!parentPkg && (
                          <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-3 mt-4">
                            Exterior
                          </p>
                        )}
                        {!parentPkg && pkg.interior.length > 0 && (
                          <div className="mb-3" />
                        )}
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
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-px bg-[var(--panel)] border border-white/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
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

        {/* Maintenance Plans */}
        <section className="mt-20 relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(149,166,70,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_32%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--olive)]/60 to-transparent" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-10 border-b border-white/8 pb-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
            >
              <div className="max-w-2xl">
                <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.35em] uppercase text-[var(--olive)] mb-4">
                  Keep It Perfect
                </p>
                <h2 className="font-[var(--font-bebas)] text-[clamp(2.8rem,7vw,6rem)] tracking-[0.08em] text-[var(--cream)] leading-[0.92]">
                  Maintenance
                  <br />
                  Plans
                </h2>
                <div className="olive-divider w-24 mt-5 mb-5" />
                <p className="font-[var(--font-barlow)] text-[15px] sm:text-lg text-[var(--ash)] leading-relaxed max-w-xl">
                  Available with Protection+ or CeramicPro. Weekly, biweekly,
                  and monthly visits keep the finish sharp and the interior
                  reset between full details.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="relative overflow-hidden border border-[var(--olive)]/20 bg-black/20 p-6 sm:p-7 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(149,166,70,0.14),transparent_45%)]" />
                <div className="relative">
                  <p className="font-[var(--font-barlow-condensed)] text-[11px] tracking-[0.32em] uppercase text-[var(--olive)] mb-3">
                    Plans Start At
                  </p>
                  <div className="font-[var(--font-bebas)] text-[clamp(4rem,10vw,7rem)] leading-[0.88] tracking-[0.06em] text-[var(--cream)]">
                    $100
                    <span className="block font-[var(--font-barlow-condensed)] text-base sm:text-lg tracking-[0.34em] uppercase text-[var(--ash)] mt-3">
                      per month
                    </span>
                  </div>
                  <p className="mt-4 font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed max-w-sm">
                    Final pricing shifts with the amount of service needed
                    across the month.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {MAINTENANCE_SCHEDULES.map((schedule) => (
                      <span
                        key={schedule}
                        className="border border-white/10 bg-white/[0.03] px-3 py-2 font-[var(--font-barlow-condensed)] text-[11px] tracking-[0.26em] uppercase text-[var(--cream)]"
                      >
                        {schedule}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/8">
              {MAINTENANCE_PLANS.map((plan, i) => (
                <motion.article
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={cn(
                    "group relative flex flex-col",
                    i === 0 && "md:pr-8",
                    i === 1 && "md:px-8",
                    i === 2 && "md:pl-8"
                  )}
                >
                  <div className="mb-8">
                    <p className="font-[var(--font-barlow-condensed)] text-[11px] tracking-[0.34em] uppercase text-[var(--olive)] mb-3">
                      {plan.label}
                    </p>
                    <h3 className="font-[var(--font-bebas)] text-[clamp(2rem,4vw,3.1rem)] tracking-[0.08em] text-[var(--cream)] leading-none mb-3">
                      {plan.name}
                    </h3>
                    <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed max-w-sm">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-[var(--olive)]/70 via-[var(--olive)]/18 to-transparent mb-8 transition-all duration-300 group-hover:via-[var(--olive)]/50" />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={14}
                          strokeWidth={1.6}
                          className="text-[var(--olive)] mt-0.5 shrink-0"
                        />
                        <span className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/booking?maintenance=${plan.id}`}
                    className="inline-flex items-center gap-2 font-[var(--font-barlow-condensed)] text-sm tracking-[0.2em] uppercase text-[var(--olive)] transition-all duration-200 group-hover:text-[var(--cream)]"
                  >
                    Choose {plan.name} <ArrowRight size={14} strokeWidth={1.5} />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

const MAINTENANCE_PLANS = [
  {
    id: "interior",
    label: "Cabin Reset",
    name: "Interior",
    tagline: "For drivers who want the cabin to stay fresh, clean, and ready every week.",
    features: [
      "Interior touch-up and wipe-down",
      "Spot extraction as needed",
      "Priority scheduling",
    ],
  },
  {
    id: "exterior",
    label: "Finish Upkeep",
    name: "Exterior",
    tagline: "For maintaining gloss, protection, and that just-detailed finish between washes.",
    features: [
      "Hand wash and dry",
      "Tire shine and trim refresh",
      "Priority scheduling",
    ],
  },
  {
    id: "both",
    label: "Full-Cycle Care",
    name: "Interior + Exterior",
    tagline: "For owners who want the complete reset every visit with no compromise.",
    features: [
      "Full interior and exterior detail",
      "Spot extraction and paint protection top-up",
      "Priority scheduling",
    ],
  },
];

const MAINTENANCE_SCHEDULES = ["Weekly", "Biweekly", "Monthly"];

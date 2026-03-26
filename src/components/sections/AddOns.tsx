"use client";

import { motion } from "motion/react";
import {
  Wind,
  Eye,
  Layers,
  Droplets,
  Wrench,
  Shield,
  Circle,
  RefreshCw,
  Scissors,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { ADDONS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Wind,
  Eye,
  Layers,
  Droplets,
  Wrench,
  Shield,
  Circle,
  RefreshCw,
  Scissors,
};

export default function AddOns() {
  return (
    <section id="addons" className="py-24 bg-[var(--ink)]" aria-label="Add-on services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
            Enhance Your Service
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
            Add-Ons
          </h2>
          <div className="olive-divider w-24 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {ADDONS.map((addon, i) => {
            const Icon = ICON_MAP[addon.icon];
            return (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-[var(--charcoal)] hover:bg-[var(--steel)] p-8 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 border border-[var(--olive)]/30 group-hover:border-[var(--olive)] flex items-center justify-center transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--olive)]"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase text-[var(--cream)] text-sm leading-snug">
                  {addon.name}
                </h3>
                <p className="font-[var(--font-barlow)] text-xs text-[var(--ash)] leading-relaxed flex-1">
                  {addon.description}
                </p>
                {addon.id === "pet-hair" && (
                  <p className="text-[10px] font-[var(--font-barlow-condensed)] tracking-[0.2em] uppercase text-[var(--olive)] border-l-2 border-[var(--olive)]/40 pl-2.5">
                    Auto-applied if significant pet hair is present
                  </p>
                )}
                <a
                  href={`/booking?addon=${addon.id}`}
                  className="inline-flex items-center gap-1.5 text-[var(--olive)] text-xs font-[var(--font-barlow-condensed)] tracking-wider uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200"
                >
                  Add to booking <ArrowRight size={12} strokeWidth={1.5} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

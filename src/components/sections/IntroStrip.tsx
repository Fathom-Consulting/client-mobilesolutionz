"use client";

import { motion } from "motion/react";
import { Car, ShieldCheck, MapPin, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Car,
    title: "Mobile Service",
    description:
      "We come to your driveway, office, or parking structure.",
  },
  {
    icon: ShieldCheck,
    title: "System X Certified",
    description:
      "Authorized installer for professional-grade ceramic protection.",
  },
  {
    icon: Sparkles,
    title: "Premium Products Only",
    description:
      "Koch Chemie, CarPro, Gyeon, and System X. Nothing less.",
  },
  {
    icon: MapPin,
    title: "Rogue Valley Based",
    description:
      "Serving Medford, Ashland, Jacksonville, and surrounding areas.",
  },
];

export default function IntroStrip() {
  return (
    <section className="py-20 bg-[var(--charcoal)]" aria-label="Key features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--charcoal)] p-6 sm:p-8 flex flex-col gap-4 hover:bg-[var(--steel)] transition-colors duration-300"
            >
              <feature.icon
                size={24}
                strokeWidth={1.5}
                className="text-[var(--olive)]"
                aria-hidden="true"
              />
              <h3 className="font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase text-[var(--cream)] text-base">
                {feature.title}
              </h3>
              <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

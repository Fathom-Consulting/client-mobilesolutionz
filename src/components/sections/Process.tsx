"use client";

import { motion } from "motion/react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[var(--olive-dk)]/20" aria-label="Our process">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
            How It Works
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
            The Process
          </h2>
          <div className="olive-divider w-24 mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col"
            >
              <div className="font-[var(--font-bebas)] text-5xl sm:text-7xl tracking-wider text-[var(--olive)]/20 leading-none mb-4 select-none">
                {step.step}
              </div>
              <div className="w-12 h-0.5 bg-[var(--olive)] mb-6" />
              <h3 className="font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase text-[var(--cream)] text-sm mb-3">
                {step.title}
              </h3>
              <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

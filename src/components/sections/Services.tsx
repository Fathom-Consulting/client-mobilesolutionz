"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-[var(--ink)]" aria-label="Services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
            What We Do
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
            Our Services
          </h2>
          <div className="olive-divider w-24 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden bg-[var(--charcoal)] cursor-default"
              style={{ aspectRatio: "4/3" }}
              onMouseEnter={() => setFocused(service.id)}
              onMouseLeave={() => setFocused(null)}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                loading="lazy"
                className={`object-cover transition-all duration-700 ${
                  focused && focused !== service.id
                    ? "scale-100 brightness-[0.3]"
                    : "scale-100 brightness-50 group-hover:scale-105 group-hover:brightness-[0.3]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent z-10" />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.tagline}
                </span>
                <h3 className="font-[var(--font-bebas)] text-4xl tracking-widest text-[var(--cream)] leading-none mb-3">
                  {service.title}
                </h3>
                <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[var(--olive)] text-sm font-[var(--font-barlow-condensed)] tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
                >
                  Book This Service <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

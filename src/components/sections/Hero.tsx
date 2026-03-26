"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { HERO_IMAGE } from "@/lib/constants";

const STATS = [
  { value: "500+", label: "Vehicles Detailed" },
  { value: "5 Star", label: "Google Rating" },
  { value: "System X", label: "Certified Installer" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-end pt-24 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src={HERO_IMAGE}
          alt="Luxury vehicle in dramatic moody lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
          style={{ filter: "brightness(0.3) contrast(1.15) saturate(0.7)" }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] rounded-full z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,108,56,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:inline-flex items-center gap-2 bg-[var(--ink)] border-l-2 border-l-[var(--olive)] border-y border-r border-y-[var(--olive)]/20 border-r-[var(--olive)]/20 px-4 py-2.5 mb-8"
        >
          <ShieldCheck
            size={14}
            strokeWidth={1.5}
            className="text-[var(--olive)] shrink-0"
          />
          <span className="font-[var(--font-barlow-condensed)] text-sm tracking-[0.2em] uppercase text-[var(--cream)]">
            Proud Authorized Installer of System X
          </span>
        </motion.div>

        <h1>
          <div className="mb-2">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block font-[var(--font-cormorant)] font-light text-[clamp(2.5rem,7vw,7rem)] leading-[1.05] tracking-[0.06em] text-[var(--cream)]"
            >
              Premium Mobile
            </motion.span>
          </div>
          <div className="mb-8">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block font-[var(--font-cormorant)] font-light italic text-[clamp(2.5rem,7vw,7rem)] leading-[1.05] tracking-[0.06em] text-[var(--olive)]"
            >
              Auto Detailing
            </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="font-[var(--font-barlow)] text-lg text-[var(--ash)] max-w-xl mb-6 sm:mb-4 leading-relaxed"
        >
          Serving the Rogue Valley from Medford, Oregon. We bring the studio to
          your driveway.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center gap-2 text-[var(--muted)] text-sm mb-12"
        >
          <MapPin size={14} strokeWidth={1.5} />
          <span className="font-[var(--font-barlow-condensed)] tracking-wider uppercase text-xs">
            Medford, Ashland, Jacksonville and Surrounding Areas
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16"
        >
          <a
            href="/booking"
            className="clip-btn inline-flex items-center justify-center gap-3 bg-[var(--olive)] hover:bg-[var(--olive-lt)] text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-10 py-4 text-base transition-colors duration-200"
          >
            Book a Detail
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
          <a
            href="#services"
            className="hidden sm:inline-flex items-center justify-center gap-3 border border-white/20 hover:border-[var(--olive)]/60 text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-10 py-4 text-base transition-colors duration-200"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-0 sm:gap-12"
        >
          {STATS.map((stat, i) => (
            <div key={stat.value} className={`flex flex-col gap-1 flex-1 sm:flex-none ${i > 0 ? "pl-4 sm:pl-12 border-l border-white/10" : ""}`}>
              <span className="font-[var(--font-bebas)] text-2xl sm:text-4xl tracking-wider text-[var(--cream)] whitespace-nowrap">
                {stat.value}
              </span>
              <span className="font-[var(--font-barlow-condensed)] text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[var(--muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

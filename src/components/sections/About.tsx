"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--charcoal)]" aria-label="About Mobile Solutionz">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE2uxySWUdiRU0fAyw9EBIPc6XOYxzWJ3utmSV"
                alt="Chano, founder of Mobile Solutionz, detailing a vehicle"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--olive)]/20 -z-10" />
            <div className="absolute bottom-6 left-6 bg-[var(--ink)]/90 backdrop-blur-sm border border-[var(--olive)]/30 p-4 flex items-center gap-3">
              <ShieldCheck
                size={20}
                strokeWidth={1.5}
                className="text-[var(--olive)]"
              />
              <div>
                <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.15em] uppercase text-[var(--olive)] leading-none">
                  Certified Installer
                </p>
                <p className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--cream)]">
                  System X
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
              The Detail Studio
            </p>
            <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,5vw,4rem)] tracking-widest text-[var(--cream)] leading-none mb-6">
              About Mobile Solutionz
            </h2>
            <div className="olive-divider w-24 mb-8" />

            <div className="space-y-5 font-[var(--font-barlow)] text-[var(--ash)] leading-relaxed text-base">
              <p>
                Mobile Solutionz is a one-person detail studio run by Chano out
                of Medford, Oregon. Every vehicle is treated like it belongs to
                someone who cares. Because it does.
              </p>
              <p>
                Chano is a certified System X installer, trained to apply
                professional-grade ceramic coatings that protect your paint for
                years. The same meticulous approach goes into every package,
                from a basic wash to a full ceramic correction.
              </p>
              <p>
                The advantage of mobile service is that your car never leaves
                your property. No waiting rooms, no strangers driving your car.
                Just focused, careful work done where it is most convenient for
                you.
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <MapPin
                  size={14}
                  strokeWidth={1.5}
                  className="text-[var(--olive)]"
                />
                <span className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--muted)]">
                  Service Areas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="font-[var(--font-barlow-condensed)] text-xs tracking-wider uppercase text-[var(--ash)] border border-white/10 px-3 py-1.5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Script from "next/script";
import { motion } from "motion/react";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="py-24 bg-[var(--charcoal)]"
      aria-label="Instagram feed"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-3">
              Follow the Work
            </p>
            <h2 className="font-[var(--font-bebas)] text-[clamp(3rem,6vw,5rem)] tracking-widest text-[var(--cream)] leading-none">
              Instagram
            </h2>
            <div className="olive-divider w-24 mt-4" />
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[var(--font-barlow-condensed)] text-sm tracking-[0.2em] uppercase text-[var(--olive)] hover:text-[var(--olive-lt)] border border-[var(--olive)]/30 hover:border-[var(--olive)]/60 px-5 py-3 transition-all duration-200 self-start"
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
            @mobilesolutionzz
            <ExternalLink size={12} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* Instagram profile embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex justify-center"
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/mobilesolutionzz/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "280px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          />
        </motion.div>
      </div>

      {/* Instagram embed script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (
            typeof window !== "undefined" &&
            (window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm
          ) {
            (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
          }
        }}
      />
    </section>
  );
}

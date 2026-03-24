"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/constants";

function ProductLogo({ name, logo, filter, lightBg }: { name: string; logo: string; filter?: string; lightBg?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.2em] uppercase text-white">
        {name}
      </span>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  const img = (
    <img
      src={logo}
      alt={name}
      onError={() => setFailed(true)}
      style={{
        height: lightBg ? "36px" : "52px",
        width: "auto",
        maxWidth: "140px",
        objectFit: "contain",
        filter: filter ?? "brightness(0) invert(1)",
      }}
    />
  );

  if (lightBg) {
    return (
      <div style={{ background: "rgba(255,255,255,0.9)", padding: "6px 10px", borderRadius: "3px", display: "inline-flex", alignItems: "center" }}>
        {img}
      </div>
    );
  }

  return img;
}

export default function Products() {
  return (
    <section
      className="py-20 bg-[var(--ink)] border-y border-white/5"
      aria-label="Trusted products"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--muted)] text-center mb-10"
        >
          Products We Trust
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 items-center justify-items-center">
          {PRODUCTS.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center h-14"
              aria-label={product.name}
            >
              <ProductLogo name={product.name} logo={product.logo} filter={product.filter} lightBg={product.lightBg} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

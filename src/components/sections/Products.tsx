"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
  const items = [...PRODUCTS, ...PRODUCTS];

  return (
    <section
      className="py-20 bg-[var(--ink)] border-y border-white/5"
      aria-label="Trusted products"
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--muted)] text-center"
        >
          Products We Trust
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex animate-ticker"
          style={{ width: "max-content" }}
        >
          {items.map((product, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300"
              style={{ width: "120px", height: "48px" }}
            >
              <Image
                src={product.logo}
                alt={product.name}
                width={120}
                height={48}
                className="object-contain filter brightness-0 invert"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

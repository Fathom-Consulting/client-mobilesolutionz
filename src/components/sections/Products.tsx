"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PRODUCTS } from "@/lib/constants";

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
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
              className="opacity-30 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center"
              aria-label={product.name}
              style={{ height: "40px" }}
            >
              <Image
                src={product.logo}
                alt={product.name}
                width={100}
                height={40}
                style={{ width: "auto", height: "40px", objectFit: "contain" }}
                className="filter brightness-0 invert"
                unoptimized
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

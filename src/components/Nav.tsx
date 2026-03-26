"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Add-Ons", href: "#addons" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Instagram", href: "#instagram" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--charcoal)]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        )}
        aria-label="Primary navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href={isHome ? "#home" : "/#home"} className="group flex flex-col leading-none">
            <span className="font-[var(--font-bebas)] text-2xl tracking-widest text-[var(--cream)]">
              Mobile Solutionz
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[var(--olive)] uppercase font-[var(--font-barlow-condensed)]">
              Auto Detailing
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {isHome ? (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[var(--ash)] hover:text-[var(--cream)] text-sm tracking-wider uppercase font-[var(--font-barlow-condensed)] font-medium transition-colors duration-200",
                      activeSection === link.href.replace("#", "") && "text-[var(--cream)]"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={`/${link.href}`}
                    className="text-[var(--ash)] hover:text-[var(--cream)] text-sm tracking-wider uppercase font-[var(--font-barlow-condensed)] font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--olive)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CONTACT.phoneTel}
              className="flex items-center gap-2 text-[var(--ash)] hover:text-[var(--cream)] text-sm transition-colors duration-200"
            >
              <Phone size={14} strokeWidth={1.5} />
              <span className="font-[var(--font-barlow-condensed)] tracking-wider">
                {CONTACT.phone}
              </span>
            </a>
            <a
              href="/booking"
              className="clip-btn bg-[var(--olive)] hover:bg-[var(--olive-lt)] text-[var(--cream)] text-sm font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase px-6 py-3 transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden text-[var(--cream)] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--ink)]/95 backdrop-blur-lg flex flex-col"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <span className="font-[var(--font-bebas)] text-2xl tracking-widest text-[var(--cream)]">
                Mobile Solutionz
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[var(--cream)] p-2"
                aria-label="Close navigation menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className="block font-[var(--font-bebas)] text-5xl tracking-widest text-[var(--cream)] hover:text-[var(--olive)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <a
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="clip-btn block bg-[var(--olive)] text-center text-[var(--cream)] font-[var(--font-barlow-condensed)] font-semibold tracking-widest uppercase py-4 text-lg"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

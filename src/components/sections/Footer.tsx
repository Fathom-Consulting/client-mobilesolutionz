import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Add-Ons", href: "#addons" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[var(--charcoal)] border-t border-white/5 py-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12">
          <div>
            <p className="font-[var(--font-bebas)] text-2xl tracking-widest text-[var(--cream)] mb-1">
              Mobile Solutionz
            </p>
            <p className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-4">
              Auto Detailing
            </p>
            <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)] leading-relaxed">
              Premium mobile detailing serving the Rogue Valley from Medford,
              Oregon.
            </p>
          </div>

          <div>
            <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[var(--font-barlow)] text-sm text-[var(--ash)] hover:text-[var(--cream)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-[var(--font-barlow-condensed)] text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
              Contact
            </p>
            <a
              href={CONTACT.phoneTel}
              className="font-[var(--font-barlow)] text-sm text-[var(--ash)] hover:text-[var(--cream)] transition-colors duration-200 block mb-2"
            >
              {CONTACT.phone}
            </a>
            <a
              href="https://www.instagram.com/mobilesolutionzz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[var(--font-barlow)] text-sm text-[var(--ash)] hover:text-[var(--cream)] transition-colors duration-200 block mb-2"
            >
              @mobilesolutionzz
            </a>
            <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)]">
              Medford, Oregon
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)]">
            &copy; 2026 Mobile Solutionz. All rights reserved.
          </p>
          <p className="font-[var(--font-barlow)] text-xs text-[var(--muted)]">
            Site by{" "}
            <a
              href="https://fathom.services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ash)] hover:text-[var(--cream)] transition-colors duration-200"
            >
              Fathom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

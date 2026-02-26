"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in on load
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );

      // Background appears on scroll
      ScrollTrigger.create({
        start: "top -80px",
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(13, 77, 81, 0.96)",
            backdropFilter: "blur(12px)",
            borderBottomColor: "rgba(201, 169, 110, 0.15)",
            duration: 0.4,
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            borderBottomColor: "transparent",
            duration: 0.4,
          });
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      style={{ opacity: 0, borderBottom: "1px solid transparent" }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex flex-col items-start gap-0.5"
          aria-label="The Tailor"
        >
          <span
            className="text-[#F5F0E8] font-display text-xl tracking-[0.25em] uppercase leading-none"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Tailor
          </span>
          <span
            className="font-sans text-[0.6rem] tracking-[0.35em] uppercase text-[#C9A96E] group-hover:opacity-80 transition-opacity"
          >
            Athens · Greece
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-xs tracking-[0.25em] uppercase text-[#EDE8DE] hover:text-[#C9A96E] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase px-6 py-3 border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0908] transition-all duration-400"
        >
          Book a Fitting
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#C9A96E] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-6 border-t border-[#C9A96E]/20 -mx-8 px-8 bg-[#0d4d51]">
          <ul className="flex flex-col gap-6 pt-6 px-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm tracking-[0.25em] uppercase text-[#EDE8DE] hover:text-[#C9A96E] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex font-sans text-xs tracking-[0.25em] uppercase px-6 py-3 border border-[#C9A96E] text-[#C9A96E]"
              >
                Book a Fitting
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

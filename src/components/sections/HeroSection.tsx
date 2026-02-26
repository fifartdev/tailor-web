"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Split title text into individual character spans
function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`split-parent ${className || ""}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── Character animation for "THE TAILOR" ──────────
      const tl = gsap.timeline({ delay: 0.3 });

      // Background glow pulses in
      tl.fromTo(
        bgGlowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" },
        0
      );

      // Each word's characters cascade in from below
      const theChars = sectionRef.current!.querySelectorAll(".word-the .char");
      const tailorChars = sectionRef.current!.querySelectorAll(".word-tailor .char");

      tl.fromTo(
        theChars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.06,
          ease: "power4.out",
        },
        0.2
      );

      tl.fromTo(
        tailorChars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.05,
          ease: "power4.out",
        },
        0.45
      );

      // Gold rule line expands
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: "power3.inOut" },
        1.0
      );

      // Subtitle fades up
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        1.1
      );

      // Tagline fades up
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        1.4
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        1.9
      );

      // ── Parallax on scroll ───────────────────────────
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (bgGlowRef.current) {
            gsap.set(bgGlowRef.current, {
              y: self.progress * 120,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d4d51]"
    >
      {/* Background radial glow */}
      <div
        ref={bgGlowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.10) 0%, rgba(13,77,81,0.5) 50%, transparent 70%)",
          opacity: 0,
        }}
      />

      {/* Vertical pinstripe accents */}
      <div className="absolute inset-0 pinstripe pointer-events-none opacity-40" />

      {/* Decorative corner marks */}
      <div className="absolute top-32 left-12 md:left-20 w-8 h-8 border-l border-t border-[#C9A96E]/20" />
      <div className="absolute top-32 right-12 md:right-20 w-8 h-8 border-r border-t border-[#C9A96E]/20" />
      <div className="absolute bottom-24 left-12 md:left-20 w-8 h-8 border-l border-b border-[#C9A96E]/20" />
      <div className="absolute bottom-24 right-12 md:right-20 w-8 h-8 border-r border-b border-[#C9A96E]/20" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Pre-title label */}
        <p
          className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-[#C9A96E] mb-12 opacity-80"
          style={{ letterSpacing: "0.5em" }}
        >
          Athens · Greece · Est. 2024
        </p>

        {/* Title */}
        <h1
          className="font-display leading-none mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {/* "THE" */}
          <div className="block text-[clamp(3rem,10vw,8rem)] text-[#F5F0E8]/30 tracking-[0.45em] font-light italic mb-2">
            <SplitChars text="THE" className="word-the" />
          </div>

          {/* "TAILOR" */}
          <div className="block text-[clamp(2rem,18vw,16rem)] text-[#F5F0E8] tracking-[0.05em] font-black leading-none whitespace-nowrap">
            <SplitChars text="TAILOR" className="word-tailor" />
          </div>
        </h1>

        {/* Gold rule */}
        <div
          ref={lineRef}
          className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-8 text-[clamp(1.1rem,2.5vw,1.6rem)] italic text-[#EDE8DE]/80 leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            opacity: 0,
          }}
        >
          Bespoke Digital Experiences, Crafted in Athens
        </p>

        {/* Services tagline */}
        <p
          ref={taglineRef}
          className="mt-4 font-sans text-xs tracking-[0.3em] uppercase text-[#C9A96E]/60"
          style={{ opacity: 0 }}
        >
          Web Design · Development · Digital Marketing · Paid Ads
        </p>

        {/* CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row gap-5 items-center"
          style={{ opacity: 0 }}
          ref={scrollRef}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-3 px-10 py-4 font-sans text-xs tracking-[0.25em] uppercase border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0d4d51] transition-all duration-500"
          >
            View Our Work
            <span className="text-lg leading-none">→</span>
          </a>
          <a
            href="#contact"
            className="font-sans text-xs tracking-[0.25em] uppercase text-[#EDE8DE]/50 hover:text-[#C9A96E] transition-colors duration-300 flex items-center gap-2"
          >
            Book a Fitting
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-[#C9A96E]/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E]/40 to-transparent" />
      </div>

      {/* Decorative number */}
      <div
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 font-display text-[12rem] font-black text-[#F5F0E8]/[0.02] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        aria-hidden="true"
      >
        01
      </div>
    </section>
  );
}

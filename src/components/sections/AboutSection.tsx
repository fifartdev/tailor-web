"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Quote slides in from left
      gsap.fromTo(
        ".about-quote",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-quote",
            start: "top 85%",
          },
        }
      );

      // Content fades in from right
      gsap.fromTo(
        ".about-content",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 85%",
          },
        }
      );

      // Stat numbers count up
      const stats = sectionRef.current!.querySelectorAll("[data-count]");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count") || "0");
        gsap.fromTo(
          stat,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#0d4d51] py-32 md:py-40 px-8 md:px-16 overflow-hidden"
    >
      {/* Background number decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[16rem] font-black text-[#F5F0E8]/[0.015] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Quote side */}
          <div className="about-quote space-y-8" style={{ opacity: 0 }}>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E]">
              Our Philosophy
            </p>

            <blockquote>
              <p
                className="text-[clamp(2rem,4vw,3.5rem)] italic leading-[1.2] text-[#F5F0E8]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                &ldquo;Every great brand begins with a single, perfect stitch.&rdquo;
              </p>
            </blockquote>

            <div className="gold-rule w-24" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4">
              {[
                { value: 120, suffix: "+", label: "Projects Delivered" },
                { value: 5, suffix: " yrs", label: "Crafting Excellence" },
                { value: 98, suffix: "%", label: "Client Satisfaction" },
              ].map(({ value, suffix, label }) => (
                <div key={label} className="space-y-1">
                  <p
                    className="font-display text-4xl font-bold text-[#C9A96E]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    <span data-count={value}>0</span>
                    {suffix}
                  </p>
                  <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#EDE8DE]/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div className="about-content space-y-8" style={{ opacity: 0 }}>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E]">
              The Atelier
            </p>

            <h2
              className="text-[clamp(2rem,3.5vw,3rem)] font-semibold text-[#F5F0E8] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Not an agency.{" "}
              <span className="italic text-[#C9A96E]">An atelier.</span>
            </h2>

            <div
              className="space-y-6 text-[#EDE8DE]/80 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              <p>
                Just as a master tailor measures twice and cuts once, we begin
                every project with deep consultation — understanding your
                business, your audience, and the impression you wish to leave.
              </p>
              <p>
                Based in Athens, we bring the precision of Greek craftsmanship
                to the digital world. From bespoke websites to performance-driven
                advertising campaigns, every element is cut to fit.
              </p>
              <p>
                No templates. No shortcuts. Only work that wears well over time.
              </p>
            </div>

            {/* Decorative needle & thread icon */}
            <div className="flex items-center gap-3 pt-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="flex-shrink-0"
              >
                <circle cx="20" cy="20" r="19.5" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
                {/* Needle */}
                <line x1="10" y1="30" x2="30" y2="10" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" />
                <ellipse cx="29" cy="11" rx="2.5" ry="1.5" transform="rotate(-45 29 11)" stroke="#C9A96E" strokeWidth="1" fill="none" />
                {/* Thread loop */}
                <path d="M10 30 Q8 35 13 34 Q18 33 15 28" stroke="#C9A96E" strokeWidth="0.8" fill="none" strokeLinecap="round" />
              </svg>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C9A96E]/70">
                Handcrafted in Athens, Greece
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

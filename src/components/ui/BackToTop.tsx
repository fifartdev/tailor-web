"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Hide initially
    gsap.set(btnRef.current, { opacity: 0, y: 16, pointerEvents: "none" });

    // Show after scrolling 400px
    ScrollTrigger.create({
      start: "400px top",
      onEnter: () =>
        gsap.to(btnRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "auto",
        }),
      onLeaveBack: () =>
        gsap.to(btnRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.4,
          ease: "power3.in",
          pointerEvents: "none",
        }),
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 group w-12 h-12 border border-[#C9A96E]/40 bg-[#0d4d51]/80 backdrop-blur-sm flex items-center justify-center hover:border-[#C9A96E] hover:bg-[#C9A96E] transition-all duration-400"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-4 h-4 text-[#C9A96E] group-hover:text-[#0d4d51] transition-colors duration-400"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

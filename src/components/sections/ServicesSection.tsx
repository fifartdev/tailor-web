"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    number: "I",
    title: "Web Design",
    subtitle: "Aesthetic Excellence",
    description:
      "Interfaces that command attention. Each design is hand-tailored to your brand identity — unique, purposeful, and built to convert.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "UI / UX",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect
          x="4"
          y="8"
          width="40"
          height="28"
          rx="2"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <line
          x1="4"
          y1="42"
          x2="44"
          y2="42"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="36"
          x2="16"
          y2="42"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <line
          x1="32"
          y1="36"
          x2="32"
          y2="42"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <rect
          x="10"
          y="15"
          width="12"
          height="8"
          rx="1"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="26"
          y1="17"
          x2="38"
          y2="17"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="26"
          y1="21"
          x2="38"
          y2="21"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="26"
          y1="25"
          x2="34"
          y2="25"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
  {
    number: "II",
    title: "Web Development",
    subtitle: "Engineering Precision",
    description:
      "Clean code, flawless performance. We build fast, scalable web solutions engineered for longevity — not just the launch day.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "React / Next.js",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <polyline
          points="16,18 8,24 16,30"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="32,18 40,24 32,30"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="28"
          y1="12"
          x2="20"
          y2="36"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "III",
    title: "Custom Web Apps",
    subtitle: "Bespoke Solutions",
    description:
      "When off-the-shelf isn't enough. We architect and build custom web applications precisely fitted to your workflow and ambitions.",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "SaaS / Dashboards",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="3"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <circle cx="24" cy="24" r="8" stroke="#C9A96E" strokeWidth="1" />
        <circle cx="24" cy="24" r="3" fill="#C9A96E" opacity="0.5" />
        <line
          x1="24"
          y1="6"
          x2="24"
          y2="16"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="24"
          y1="32"
          x2="24"
          y2="42"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="6"
          y1="24"
          x2="16"
          y2="24"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="32"
          y1="24"
          x2="42"
          y2="24"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
  {
    number: "IV",
    title: "Mobile Apps",
    subtitle: "Always Within Reach",
    description:
      "Native-feel iOS and Android experiences. We craft mobile applications that your customers return to — intuitive, swift, refined.",
    image:
      "https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "iOS / Android",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect
          x="14"
          y="4"
          width="20"
          height="40"
          rx="3"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <line
          x1="20"
          y1="9"
          x2="28"
          y2="9"
          stroke="#C9A96E"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="24" cy="39" r="2" stroke="#C9A96E" strokeWidth="0.8" />
        <rect
          x="18"
          y="14"
          width="12"
          height="8"
          rx="1"
          stroke="#C9A96E"
          strokeWidth="0.7"
        />
        <line
          x1="18"
          y1="26"
          x2="30"
          y2="26"
          stroke="#C9A96E"
          strokeWidth="0.7"
        />
        <line
          x1="18"
          y1="29"
          x2="27"
          y2="29"
          stroke="#C9A96E"
          strokeWidth="0.7"
        />
      </svg>
    ),
  },
  {
    number: "V",
    title: "Digital Marketing",
    subtitle: "Strategic Reach",
    description:
      "Data-driven strategy with a human touch. We craft campaigns that speak with precision to your audience and compound results over time.",
    image:
      "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Strategy / SEO",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <polyline
          points="6,36 16,24 24,30 34,16 42,20"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="42" cy="20" r="3" stroke="#C9A96E" strokeWidth="1" />
        <line
          x1="6"
          y1="42"
          x2="42"
          y2="42"
          stroke="#C9A96E"
          strokeWidth="0.7"
        />
        <line x1="6" y1="6" x2="6" y2="42" stroke="#C9A96E" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    number: "VI",
    title: "META Ads",
    subtitle: "Social Precision",
    description:
      "Facebook & Instagram campaigns engineered for maximum ROAS. Audience targeting so precise, every euro earned earns more.",
    image:
      "https://images.unsplash.com/photo-1689439518196-f48a24b49fb5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Facebook / Instagram",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path
          d="M24 8 C16 8 10 14 10 24 C10 32 15 38 22 39.5 L22 29 L19 29 L19 24 L22 24 L22 20 C22 16.5 24 14 27.5 14 L31 14 L31 19 L28.5 19 C27 19 26.5 19.8 26.5 21 L26.5 24 L31 24 L30 29 L26.5 29 L26.5 39.5 C33.5 38 38 32 38 24 C38 14 32 8 24 8Z"
          stroke="#C9A96E"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    number: "VII",
    title: "TikTok Ads",
    subtitle: "Viral by Design",
    description:
      "Short-form video advertising that stops the scroll. We blend creative storytelling with algorithmic targeting for explosive brand growth.",
    image:
      "https://images.unsplash.com/photo-1746608943012-966fe85ecf47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Short-form Video",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path
          d="M32 10 C32 10 34 18 40 20 L40 26 C40 26 35 25 32 22 L32 32 C32 38 27 43 21 43 C15 43 10 38 10 32 C10 26 15 21 21 21 C22 21 23 21.2 24 21.5 L24 27.5 C23.2 27.2 22.1 27 21 27 C18.2 27 16 29.2 16 32 C16 34.8 18.2 37 21 37 C23.8 37 26 34.8 26 32 L26 5 L32 5 L32 10Z"
          stroke="#C9A96E"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    number: "VIII",
    title: "Google Ads",
    subtitle: "Intent Captured",
    description:
      "Search, Display, Shopping — we place your offer at the exact moment of intent. Campaigns that convert the qualified, not just the curious.",
    image:
      "https://images.unsplash.com/photo-1654277041042-8927699fcfd2?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Search / Display",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <circle cx="24" cy="24" r="16" stroke="#C9A96E" strokeWidth="1" />
        <path
          d="M32 24 C32 24 32 20 26 20 C20 20 18 24 18 24 C18 24 20 28 26 28"
          stroke="#C9A96E"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="24"
          x2="36"
          y2="24"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <line
          x1="28"
          y1="20"
          x2="36"
          y2="20"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
        <line
          x1="28"
          y1="28"
          x2="34"
          y2="28"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !wrapperRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const wrapper = wrapperRef.current!;

      const getScrollDistance = () => track.scrollWidth - wrapper.offsetWidth;

      // Heading animation
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
          },
        },
      );

      // Pinned horizontal scroll
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });

      // Reveal all cards with stagger as soon as section pins
      const cards = track.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#0d4d51] overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 pinstripe pointer-events-none opacity-20" />

      {/* Background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[16rem] font-black text-[#F5F0E8]/[0.04] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        aria-hidden="true"
      >
        03
      </div>

      <div
        ref={wrapperRef}
        className="relative z-10 h-full flex flex-col justify-center overflow-hidden px-8 md:px-16"
      >
        {/* Section heading */}
        <div
          className="services-heading mb-10 flex-shrink-0"
          style={{ opacity: 0 }}
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E] mb-3">
            Our Craft
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Collection
          </h2>
          <div className="mt-3 flex items-center gap-4">
            <div className="gold-rule flex-1 max-w-xs" />
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/30">
              Scroll to Explore →
            </p>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="services-track overflow-visible" ref={trackRef}>
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card flex-shrink-0 w-80 md:w-[26rem] mr-6 bg-[#1a7a7e] border border-[#C9A96E]/12 relative group cursor-default transition-all duration-500 service-card-hover overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* Project demo image */}
              <div className="relative overflow-hidden h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={`${service.title} demo project`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Teal-tinted overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a7a7e]/20 to-[#1a7a7e]/80" />
                {/* Top-right roman numeral */}
                <span
                  className="absolute top-3 right-4 font-display text-xl text-[#C9A96E]/50 font-light"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.number}
                </span>
                {/* Bottom tag pill */}
                <span className="absolute bottom-3 left-4 font-sans text-[0.55rem] tracking-[0.25em] uppercase text-[#C9A96E] border border-[#C9A96E]/40 px-2.5 py-1 bg-[#0d4d51]/60 backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-4">
                {/* Icon + title row */}
                <div className="flex items-center gap-3">
                  <div className="text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <p className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-0.5">
                      {service.subtitle}
                    </p>
                    <h3
                      className="text-xl text-[#F5F0E8] font-semibold leading-tight"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm text-[#F5F0E8]/65 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1rem",
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom gold border on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

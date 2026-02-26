"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Consult",
    subtitle: "The First Fitting",
    description:
      "Every relationship begins with listening. We take detailed measurements of your brand, your goals, and your audience — before a single pixel is placed.",
    detail: "Discovery · Brief · Strategy · Audit",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "The Pattern",
    description:
      "With your vision mapped, our craftsmen draft the pattern. Wireframes become compositions. Concepts become experiences. Style meets substance.",
    detail: "Wireframes · Visual Design · Prototyping · Brand Alignment",
  },
  {
    number: "03",
    title: "Craft",
    subtitle: "The Stitching",
    description:
      "This is where patience meets precision. We build every feature with care — each interaction, each animation, each campaign element, hand-sewn.",
    detail: "Development · Campaign Build · Testing · Refinement",
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "The Perfect Fit",
    description:
      "The final garment is presented. We launch, optimise, and remain by your side — because the finest tailors stay in relationship with their clients.",
    detail: "Launch · Optimisation · Reporting · Ongoing Support",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        ".process-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-heading",
            start: "top 85%",
          },
        }
      );

      // Vertical gold line draws down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2.5,
          ease: "power2.inOut",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // Steps staggered reveal
      const stepElements = sectionRef.current!.querySelectorAll(".process-step");
      stepElements.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
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
      id="process"
      className="relative bg-[#0d4d51] py-32 md:py-40 px-8 md:px-16 overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[16rem] font-black text-[#F5F0E8]/[0.015] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="process-heading text-center mb-24 space-y-4" style={{ opacity: 0 }}>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E]">
            How We Work
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            The Tailoring Process
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto" />
          <p
            className="text-xl text-[#EDE8DE]/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            From first consultation to final delivery, each step is executed with the patience and precision of a master craftsman.
          </p>
        </div>

        {/* Steps with center timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{
              background: "linear-gradient(to bottom, transparent, #C9A96E 10%, #C9A96E 90%, transparent)",
              transform: "scaleY(0)",
            }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-0 items-center"
                  style={{ opacity: 0, minHeight: "200px" }}
                >
                  {/* Left content or spacer — desktop only */}
                  <div
                    className={`hidden md:block py-12 ${isLeft ? "md:pr-20 text-right" : "md:order-last md:pl-20 text-left"}`}
                  >
                    {isLeft ? <StepContent step={step} /> : <div />}
                  </div>

                  {/* Center node — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#C9A96E] shadow-[0_0_16px_rgba(201,169,110,0.5)]" />
                  </div>

                  {/* Right content or spacer — desktop only */}
                  <div className={`hidden md:block py-12 ${!isLeft ? "md:pl-20 text-left" : ""}`}>
                    {!isLeft ? <StepContent step={step} /> : <div />}
                  </div>

                  {/* Mobile: full width with left border timeline */}
                  <div className="md:hidden col-span-1 pb-12 pl-8 border-l border-[#C9A96E]/20 relative">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#C9A96E]" />
                    <StepContent step={step} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepContent({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="space-y-4 max-w-xs md:max-w-sm mx-auto md:mx-0">
      <div className="flex items-center gap-3">
        <span
          className="font-display text-5xl font-black text-[#C9A96E]/20"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {step.number}
        </span>
        <div>
          <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A96E]">
            {step.subtitle}
          </p>
          <h3
            className="text-2xl font-semibold text-[#F5F0E8]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {step.title}
          </h3>
        </div>
      </div>
      <p
        className="text-base text-[#EDE8DE]/70 leading-relaxed"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {step.description}
      </p>
      <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A96E]/40">
        {step.detail}
      </p>
    </div>
  );
}

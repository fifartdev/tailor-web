"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Main content reveal
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 80%",
          },
        }
      );

      // Form fields stagger in
      gsap.fromTo(
        ".contact-field",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
          },
        }
      );

      // Background glow
      gsap.fromTo(
        ".contact-glow",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (opt: string) => {
    setServices((prev) =>
      prev.includes(opt) ? prev.filter((s) => s !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, services, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setServices([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#0d4d51] py-32 md:py-40 px-8 md:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="contact-glow absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 70%)",
          opacity: 0,
        }}
      />

      {/* Pinstripes */}
      <div className="absolute inset-0 pinstripe pointer-events-none opacity-40" />

      {/* Background number */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[16rem] font-black text-[#F5F0E8]/[0.015] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        aria-hidden="true"
      >
        05
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className="contact-content text-center mb-20 space-y-6"
          style={{ opacity: 0 }}
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E]">
            Get In Touch
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,6rem)] text-[#F5F0E8] leading-none"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready for a{" "}
            <span className="italic text-[#C9A96E]">Fitting?</span>
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto" />
          <p
            className="text-xl text-[#EDE8DE]/70 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Every great collaboration begins with a conversation. Tell us about
            your project and we&apos;ll schedule your first consultation.
          </p>
        </div>

        {/* Contact form */}
        <form className="contact-form space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="contact-field space-y-2" style={{ opacity: 0 }}>
              <label className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A96E]/70">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Papadopoulos"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#1a7a7e] border border-[#C9A96E]/15 text-[#F5F0E8] px-5 py-4 font-sans text-sm placeholder:text-[#EDE8DE]/25 focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem" }}
              />
            </div>
            <div className="contact-field space-y-2" style={{ opacity: 0 }}>
              <label className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A96E]/70">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@yourbrand.gr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#1a7a7e] border border-[#C9A96E]/15 text-[#F5F0E8] px-5 py-4 placeholder:text-[#EDE8DE]/25 focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem" }}
              />
            </div>
          </div>

          <div className="contact-field space-y-2" style={{ opacity: 0 }}>
            <label className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A96E]/70">
              What Can We Tailor For You?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Web Design", "Development", "Mobile App", "Paid Ads"].map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="hidden peer"
                    checked={services.includes(opt)}
                    onChange={() => toggleService(opt)}
                  />
                  <div className="w-4 h-4 border border-[#C9A96E]/30 peer-checked:bg-[#C9A96E] peer-checked:border-[#C9A96E] transition-all duration-200 flex-shrink-0 group-hover:border-[#C9A96E]/60" />
                  <span className="font-sans text-xs tracking-wide text-[#EDE8DE]/60 group-hover:text-[#EDE8DE] transition-colors">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="contact-field space-y-2" style={{ opacity: 0 }}>
            <label className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A96E]/70">
              Tell Us About Your Project
            </label>
            <textarea
              rows={5}
              placeholder="Describe your vision, your brand, and the experience you wish to create..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#1a7a7e] border border-[#C9A96E]/15 text-[#F5F0E8] px-5 py-4 placeholder:text-[#EDE8DE]/25 focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-300 resize-none"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem" }}
            />
          </div>

          <div className="contact-field flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4" style={{ opacity: 0 }}>
            {status === "success" ? (
              <div className="flex items-center gap-4 px-8 py-5 border border-[#C9A96E]/30 bg-[#C9A96E]/5">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 10 8 14 16 6" />
                </svg>
                <p
                  className="text-[#C9A96E] text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}
                >
                  Your message has been received. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-3 px-12 py-5 font-sans text-xs tracking-[0.25em] uppercase bg-[#C9A96E] text-[#0A0908] hover:bg-[#DFC08A] transition-all duration-400 hover:shadow-[0_0_40px_rgba(201,169,110,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Book a Consultation"}
                  {status !== "loading" && <span className="text-lg leading-none">→</span>}
                </button>
                {status === "error" && (
                  <p className="font-sans text-xs text-[#EDE8DE]/60">
                    Something went wrong. Please email{" "}
                    <a href="mailto:hello@thetailor.gr" className="text-[#C9A96E] hover:text-[#DFC08A] transition-colors">
                      hello@thetailor.gr
                    </a>{" "}
                    directly.
                  </p>
                )}
              </div>
            )}
            {status !== "success" && (
              <div className="space-y-1">
                <p className="font-sans text-xs tracking-wide text-[#EDE8DE]/40">
                  Or reach us directly
                </p>
                <a
                  href="mailto:hello@thetailor.gr"
                  className="font-sans text-xs text-[#C9A96E] hover:text-[#DFC08A] transition-colors"
                >
                  hello@thetailor.gr
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

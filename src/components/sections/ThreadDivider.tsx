"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ThreadDividerProps {
  className?: string;
}

export default function ThreadDivider({ className = "" }: ThreadDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const path = svgRef.current.querySelector(".thread-path");
    if (!path) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        path,
        { strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: svgRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* Needle at start */}
        <circle cx="12" cy="30" r="3" fill="#C9A96E" opacity="0.6" />
        <circle cx="12" cy="30" r="6" stroke="#C9A96E" strokeWidth="0.5" opacity="0.3" />

        {/* Thread path — elegant curve */}
        <path
          d="M 20 30 Q 180 10 360 30 Q 540 50 720 30 Q 900 10 1080 30 Q 1260 50 1440 30"
          stroke="#C9A96E"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="thread-path"
          style={{ strokeDasharray: 2000 }}
        />

        {/* Small eye of needle at end */}
        <ellipse cx="1432" cy="30" rx="5" ry="3" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
      </svg>
    </div>
  );
}

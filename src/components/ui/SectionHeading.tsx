import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-6",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <p
          className="font-sans text-xs tracking-[0.35em] uppercase text-[#C9A96E]"
          style={{ letterSpacing: "0.35em" }}
        >
          {label}
        </p>
      )}
      <h2
        className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#F5F0E8]"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-px w-16 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent",
          align === "center" ? "mx-auto" : ""
        )}
      />
      {subtitle && (
        <p
          className="text-xl text-[#EDE8DE] max-w-2xl leading-relaxed"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

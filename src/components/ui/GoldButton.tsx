import { cn } from "@/lib/utils/cn";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "filled";
  className?: string;
}

export default function GoldButton({
  children,
  href,
  onClick,
  variant = "outline",
  className,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center gap-3 px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer";

  const styles = {
    outline:
      "border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0d4d51] hover:shadow-[0_0_40px_rgba(201,169,110,0.2)]",
    filled:
      "bg-[#C9A96E] text-[#0d4d51] hover:bg-[#DFC08A] hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]",
  };

  const classes = cn(base, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

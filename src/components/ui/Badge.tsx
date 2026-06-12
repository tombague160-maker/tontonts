import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "navy",
  className = ""
}: {
  children: ReactNode;
  tone?: "navy" | "gold" | "white" | "coral" | "mint";
  className?: string;
}) {
  const tones = {
    navy: "bg-ink/8 text-ink",
    gold: "bg-gold/18 text-ink",
    white: "bg-white/12 text-white",
    coral: "bg-coral/12 text-coral",
    mint: "bg-mint/12 text-mint"
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-black uppercase ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

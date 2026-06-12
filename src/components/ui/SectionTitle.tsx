import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionTitle({ eyebrow, title, children, align = "left", tone = "dark" }: SectionTitleProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-xs font-black uppercase tracking-[0.18em] ${isLight ? "text-gold" : "text-coral"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-4xl font-bold leading-tight md:text-5xl ${isLight ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {children ? (
        <div className={`mt-5 text-lg leading-8 ${isLight ? "text-white/72" : "text-ink/68"}`}>{children}</div>
      ) : null}
    </div>
  );
}

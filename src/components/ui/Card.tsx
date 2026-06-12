import type { ReactNode } from "react";

export function Card({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-ink/10 bg-white shadow-soft ${className}`}>
      {children}
    </div>
  );
}

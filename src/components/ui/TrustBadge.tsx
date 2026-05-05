import type { ReactNode } from "react";

export interface TrustBadgeProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export function TrustBadge({ children, dark = false, className }: TrustBadgeProps) {
  const styles = dark
    ? "bg-white/12 border border-white/25 text-white"
    : "bg-white border border-ink-900/15 text-ink-900";
  return (
    <div
      className={`inline-block ${styles} text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

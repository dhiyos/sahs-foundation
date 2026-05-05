import type { ReactNode } from "react";

export type EyebrowColor = "coral" | "teal" | "white";

export interface EyebrowProps {
  children: ReactNode;
  color?: EyebrowColor;
  className?: string;
}

const tokens: Record<EyebrowColor, { text: string; rule: string }> = {
  coral: { text: "text-coral-600", rule: "bg-coral-600" },
  teal:  { text: "text-teal-600",  rule: "bg-teal-600" },
  white: { text: "text-white",     rule: "bg-white/60" },
};

export function Eyebrow({ children, color = "coral", className }: EyebrowProps) {
  const { text, rule } = tokens[color];
  return (
    <div className={`flex items-center gap-2 mb-3 ${className ?? ""}`}>
      <div className={`h-px w-6 ${rule}`} />
      <span
        className={`text-[11px] font-medium ${text} tracking-[0.25em] uppercase`}
      >
        {children}
      </span>
    </div>
  );
}

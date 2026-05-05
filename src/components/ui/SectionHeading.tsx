import type { ReactNode } from "react";
import { Eyebrow, type EyebrowColor } from "./Eyebrow";

export type SectionHeadingTone = "dark" | "light";
export type SectionHeadingAlign = "left" | "center";

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  eyebrowColor?: EyebrowColor;
  tone?: SectionHeadingTone;
  align?: SectionHeadingAlign;
  className?: string;
}

const headingTone: Record<SectionHeadingTone, string> = {
  dark: "text-ink-900",
  light: "text-white",
};

const subTone: Record<SectionHeadingTone, string> = {
  dark: "text-ink-600",
  light: "text-white/75",
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  eyebrowColor,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  const resolvedEyebrowColor: EyebrowColor =
    eyebrowColor ?? (tone === "light" ? "white" : "coral");
  const alignment = align === "center" ? "text-center items-center" : "";

  return (
    <div className={`flex flex-col ${alignment} ${className ?? ""}`}>
      {eyebrow && <Eyebrow color={resolvedEyebrowColor}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-serif font-medium leading-tight tracking-tight text-[26px] md:text-[32px] ${headingTone[tone]}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-3 text-base md:text-lg leading-relaxed ${subTone[tone]}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}

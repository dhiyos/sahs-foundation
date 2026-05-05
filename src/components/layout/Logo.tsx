type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({ tone = "dark", className }: LogoProps) {
  const sahsColor = tone === "light" ? "text-white" : "text-teal-600";
  return (
    <span
      className={`inline-flex items-baseline gap-2 leading-none ${className ?? ""}`}
      aria-label="SAHS Foundation"
    >
      <span
        className={`font-sans font-medium text-[22px] tracking-tight ${sahsColor}`}
      >
        sahs
      </span>
      <span
        className="font-sans font-medium text-[10px] tracking-[0.2em] uppercase text-coral-600"
      >
        Foundation
      </span>
    </span>
  );
}

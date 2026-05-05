import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { TrustBadge } from "../ui/TrustBadge";

type Variant = "dark" | "cream";

type Cta = {
  label: string;
  to: string;
  variant?: "primary" | "secondary" | "ghost" | "heroGhost";
};

type HeroProps = {
  variant?: Variant;
  eyebrow: string;
  headline: string;
  sub?: string;
  trustBadge?: string;
  ctas?: Cta[];
  decoration?: boolean;
  size?: "lg" | "md";
};

export function Hero({
  variant = "dark",
  eyebrow,
  headline,
  sub,
  trustBadge,
  ctas,
  decoration = false,
  size = "lg",
}: HeroProps) {
  const dark = variant === "dark";

  const bg = dark ? "bg-teal-700" : "bg-cream-50";
  const headlineColor = dark ? "text-white" : "text-ink-900";
  const subColor = dark ? "text-white/82" : "text-ink-600";
  const eyebrowTone = dark ? "white" : "coral";

  const padDesktop =
    size === "lg" ? "md:py-24" : "md:py-20";
  const padMobile = size === "lg" ? "py-16" : "py-14";

  return (
    <section
      id="hero"
      className={`relative overflow-hidden ${bg} ${padMobile} ${padDesktop}`}
    >
      {decoration && dark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 md:-top-24 md:-right-16 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-coral-600 opacity-95"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 right-6 w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/35"
          />
        </>
      )}

      <Container className="relative">
        <div className="max-w-full md:max-w-[70%]">
          {trustBadge && (
            <div className="mb-6">
              <TrustBadge dark={dark}>{trustBadge}</TrustBadge>
            </div>
          )}
          <Eyebrow color={eyebrowTone === "white" ? "white" : "coral"}>
            {eyebrow}
          </Eyebrow>
          <h1
            className={`font-serif font-medium leading-[1.1] tracking-tight ${headlineColor} text-[36px] md:text-[56px]`}
          >
            {headline}
          </h1>
          {sub && (
            <p
              className={`font-serif italic text-base md:text-lg leading-relaxed mt-5 max-w-2xl ${subColor}`}
            >
              {sub}
            </p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.to}
                  variant={cta.variant ?? (dark ? "heroGhost" : "ghost")}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

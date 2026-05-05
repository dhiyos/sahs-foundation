import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { home } from "../../lib/content";

export function GuidingPrinciple() {
  return (
    <section id="guiding-principle" className="bg-cream-50 py-16 md:py-24">
      <Container className="text-center">
        <div className="max-w-[700px] mx-auto">
          <div
            aria-hidden
            className="text-coral-600 text-2xl mb-6 leading-none"
          >
            ❖
          </div>
          <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
            {home.guidingPrinciple.heading}
          </h2>
          <p className="mt-6 font-serif italic text-ink-600 text-[14px] md:text-[15px] leading-[1.7]">
            &ldquo;{home.guidingPrinciple.body}&rdquo;
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {home.finalCta.buttons.map((b) => (
            <Button key={b.label} href={b.to} variant={b.variant}>
              {b.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}

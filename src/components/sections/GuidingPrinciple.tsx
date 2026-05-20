import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { home } from "../../lib/content";

export function GuidingPrinciple() {
  return (
    <section id="guiding-principle" className="bg-cream-50 py-16 md:py-24">
      <Container className="text-center">
        <div className="max-w-[720px] mx-auto">
          <Eyebrow className="justify-center">{home.guidingPrinciple.eyebrow}</Eyebrow>
          <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
            {home.guidingPrinciple.heading}
          </h2>
          <p className="mt-6 text-ink-600 text-[15px] md:text-base leading-[1.7]">
            {home.guidingPrinciple.body}
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

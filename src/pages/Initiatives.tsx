import { Seo } from "../components/Seo";
import { Hero } from "../components/sections/Hero";
import { StickyPillarNav } from "../components/sections/StickyPillarNav";
import { InitiativesPillarSection } from "../components/sections/InitiativesPillarSection";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { pillars } from "../lib/pillars";
import { initiatives } from "../lib/content";

export default function Initiatives() {
  return (
    <>
      <Seo
        title="Our Initiatives"
        description="Eight pillars, one purpose — programmes in women empowerment, medical aid, disability support, care institutions, water, animal welfare, environment, and elder care."
        path="/initiatives"
      />
      <Hero
        variant="dark"
        size="md"
        eyebrow={initiatives.hero.eyebrow}
        headline={initiatives.hero.headline}
        sub={initiatives.hero.sub}
      />

      <StickyPillarNav />

      {pillars.map((p, i) => (
        <InitiativesPillarSection key={p.slug} pillar={p} alt={i % 2 === 1} />
      ))}

      <section className="bg-cream-50 py-16 md:py-20">
        <Container className="text-center">
          <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight max-w-2xl mx-auto">
            {initiatives.cta.heading}
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={initiatives.cta.to} variant="secondary">
              {initiatives.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

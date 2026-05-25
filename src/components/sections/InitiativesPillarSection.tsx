import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import type { Pillar } from "../../lib/pillars";
import type { PillarKey } from "../ui/PillarCard";

const palette: Record<PillarKey, { border: string }> = {
  women:       { border: "#D4537E" },
  medical:     { border: "#1D9E75" },
  disability:  { border: "#7F77DD" },
  care:        { border: "#BA7517" },
  water:       { border: "#378ADD" },
  animal:      { border: "#639922" },
  environment: { border: "#5F5E5A" },
  elder:       { border: "#D85A30" },
};

export interface InitiativesPillarSectionProps {
  pillar: Pillar;
  alt: boolean;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-ink-900 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="w-1 h-1 rounded-full bg-ink-400 mt-[10px] shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const columnHeading =
  "text-[11px] font-medium tracking-[0.25em] uppercase text-coral-600 mb-4";

export function InitiativesPillarSection({ pillar, alt }: InitiativesPillarSectionProps) {
  const Icon = pillar.icon;
  const tokens = palette[pillar.pillar];
  const eyebrowLabel = (pillar.tabLabel ?? pillar.title).toUpperCase();
  const heading = pillar.sectionHeading ?? pillar.title;

  return (
    <section
      id={pillar.slug}
      className={`scroll-mt-32 md:scroll-mt-40 py-16 md:py-20 ${alt ? "bg-cream-50" : "bg-white"}`}
    >
      <Container>
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start ${alt ? "md:[&>div:first-child]:order-2" : ""}`}>
          <div className="md:col-span-7">
            <div
              className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: tokens.border }}
            >
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <Eyebrow>{eyebrowLabel}</Eyebrow>
            <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-ink-900 leading-tight mb-5">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-ink-600 leading-[1.7]">
              {pillar.intro}
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-md">
              <img
                src={pillar.image.src}
                alt={pillar.image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
          <div>
            <h3 className={columnHeading}>What we do</h3>
            <BulletList items={pillar.whatWeDo} />
          </div>
          <div>
            <h3 className={columnHeading}>Who we serve</h3>
            <p className="text-sm text-ink-900 leading-relaxed">{pillar.whoWeServe}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

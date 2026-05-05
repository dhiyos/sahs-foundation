import { pillars } from "../../lib/pillars";
import { PillarCard } from "../ui/PillarCard";

export function PillarsGrid() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <PillarCard
            key={p.slug}
            pillar={p.pillar}
            title={p.title}
            description={p.short}
            icon={p.icon}
            href={`/initiatives#${p.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

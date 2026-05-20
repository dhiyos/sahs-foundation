import { ShieldCheck, MapPin, Building2, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { home } from "../../lib/content";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  map: MapPin,
  building: Building2,
  heart: HeartHandshake,
};

export function TrustStrip() {
  return (
    <section id="trust" className="bg-teal-700 py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {home.trust.cells.map((cell) => {
            const Icon = iconMap[cell.icon] ?? ShieldCheck;
            return (
              <div key={cell.label} className="text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-coral-400" aria-hidden />
                </div>
                <div className="font-serif text-white text-lg md:text-xl font-medium leading-snug">
                  {cell.label}
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-[18rem]">
                  {cell.sub}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

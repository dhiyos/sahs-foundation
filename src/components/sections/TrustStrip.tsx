import { Container } from "../ui/Container";
import { home } from "../../lib/content";

export function TrustStrip() {
  return (
    <section id="trust" className="bg-teal-700 py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {home.trust.cells.map((cell) => (
            <div key={cell.label} className="text-center">
              <div className="font-serif text-coral-400 text-[36px] md:text-[44px] font-medium leading-none">
                {cell.value}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-white/70">
                {cell.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

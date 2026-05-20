import { Container } from "../ui/Container";
import { home } from "../../lib/content";

export function PillarsHeader() {
  return (
    <section id="pillars" className="bg-navy-900 py-14">
      <Container className="text-center">
        <h2 className="font-serif text-white text-[26px] md:text-[32px] font-medium leading-tight">
          {home.pillarsHeader.heading}
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          {home.pillarsHeader.sub}
        </p>
      </Container>
    </section>
  );
}

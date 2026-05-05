import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { home } from "../../lib/content";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-cream-50 py-12 md:py-20">
      <Container>
        <div className="max-w-[800px]">
          <Eyebrow>{home.whoWeAre.eyebrow}</Eyebrow>
          <p className="text-base md:text-lg text-ink-900 leading-[1.7]">
            {home.whoWeAre.body}
          </p>

          <div className="mt-10 bg-white border-l-[3px] border-teal-700 px-6 py-5">
            <ul className="flex flex-col md:flex-row md:items-center md:gap-12 gap-4">
              {home.whoWeAre.info.map((item) => (
                <li key={item.label} className="flex flex-col">
                  <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-coral-600">
                    {item.label}
                  </span>
                  <span className="text-sm text-ink-900 mt-1">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

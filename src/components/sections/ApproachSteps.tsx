import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { home } from "../../lib/content";

export function ApproachSteps() {
  return (
    <section id="approach" className="bg-cream-50 py-12 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{home.approach.eyebrow}</Eyebrow>
          <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
            {home.approach.heading}
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {home.approach.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col">
              <div
                className="w-[26px] h-[26px] rounded-full bg-teal-700 text-white text-xs font-medium flex items-center justify-center mb-4"
                aria-hidden
              >
                {i + 1}
              </div>
              <h3 className="text-base font-medium text-ink-900 mb-2">{step.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

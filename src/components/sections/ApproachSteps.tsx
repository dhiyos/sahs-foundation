import { Search, ClipboardCheck, HandHeart, RotateCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { home } from "../../lib/content";

const icons: LucideIcon[] = [Search, ClipboardCheck, HandHeart, RotateCw];

export function ApproachSteps() {
  return (
    <section id="approach" className="bg-cream-50 py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <Eyebrow className="justify-center">{home.approach.eyebrow}</Eyebrow>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-ink-900 leading-tight">
            {home.approach.heading}
          </h2>
          {home.approach.sub && (
            <p className="mt-4 text-base text-ink-600 leading-relaxed">
              {home.approach.sub}
            </p>
          )}
        </div>

        <ol className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {home.approach.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                className="relative bg-white rounded-lg p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-ink-600 font-medium">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-teal-700/10 text-teal-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-ink-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

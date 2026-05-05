import {
  Heart,
  ShieldCheck,
  Award,
  Leaf,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Hero } from "../components/sections/Hero";
import { about } from "../lib/content";

const valueIcons: Record<string, LucideIcon> = {
  Compassion: Heart,
  Integrity: ShieldCheck,
  Dignity: Award,
  Sustainability: Leaf,
  Service: HeartHandshake,
};

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="The humanitarian arm of the SAHS Group — channelling corporate success into measurable, transparent social impact across India and beyond."
        path="/about"
      />
      <Hero
        variant="cream"
        size="md"
        eyebrow={about.hero.eyebrow}
        headline={about.hero.headline}
        sub={about.hero.sub}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-3">
              <Eyebrow>WHO WE ARE</Eyebrow>
              <div className="space-y-5 text-base md:text-lg text-ink-900 leading-[1.7]">
                {about.whoWeAre.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-cream-50">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                  alt="Hands meeting in collaboration — placeholder, to be replaced with original beneficiary photography."
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border-l-4 border-teal-700 p-8">
              <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-coral-600 mb-3">
                Vision
              </h2>
              <p className="font-serif text-[20px] md:text-[22px] leading-snug text-ink-900">
                {about.vision}
              </p>
            </article>
            <article className="bg-white border-l-4 border-teal-700 p-8">
              <h2 className="text-[11px] font-medium tracking-[0.25em] uppercase text-coral-600 mb-3">
                Mission
              </h2>
              <p className="font-serif text-[20px] md:text-[22px] leading-snug text-ink-900">
                {about.mission}
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>OUR VALUES</Eyebrow>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
              What we stand on
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {about.values.map((v) => {
              const Icon = valueIcons[v.label] ?? Heart;
              return (
                <div key={v.label}>
                  <div className="w-9 h-9 rounded-full bg-teal-700/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-teal-700" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-medium text-ink-900 mb-1">{v.label}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-[11px] font-medium tracking-[0.25em] uppercase text-coral-400 mb-3">
              SAHS Group Connection
            </div>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-white leading-tight mb-6">
              Backed by a multi-national parent.
            </h2>
            <div className="border border-dashed border-white/30 rounded-md p-8 bg-white/5">
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-coral-400">
                Coming soon
              </span>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {about.groupConnection}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>LEADERSHIP</Eyebrow>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
              The people behind the work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-dashed border-ink-400/60 rounded-md overflow-hidden"
              >
                <div className="aspect-[4/5] bg-cream-50 flex items-center justify-center">
                  <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-coral-600">
                    Coming soon
                  </span>
                </div>
                <div className="p-5">
                  <div className="h-3 bg-ink-400/15 rounded w-2/3 mb-2" />
                  <div className="h-2 bg-ink-400/15 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>TRANSPARENCY & COMPLIANCE</Eyebrow>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight mb-8">
              Built on accountability
            </h2>
            <ul className="space-y-3 text-base text-ink-900 leading-relaxed">
              {about.compliance.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full bg-teal-700 mt-[10px] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}


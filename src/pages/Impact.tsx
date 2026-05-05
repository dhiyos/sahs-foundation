import { Download } from "lucide-react";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Hero } from "../components/sections/Hero";
import { impact } from "../lib/content";

type StoryPlaceholder = {
  name: string;
  location: string;
  pillar: string;
  pillarColor: string;
  photo: string;
  body: string[];
  quote: string;
};

const placeholderStories: StoryPlaceholder[] = [
  {
    name: "Sunita",
    location: "Lucknow, Uttar Pradesh",
    pillar: "Women Empowerment",
    pillarColor: "#D4537E",
    photo: "https://source.unsplash.com/featured/?portrait,india&sig=1",
    body: [
      "After her husband passed away, Sunita carried the weight of three children and a kitchen that often went cold by evening. A neighbour told her about a tailoring batch starting at the community centre — six weeks, no fee, materials provided.",
      "Today she runs a small alterations stall outside the local market and trains two younger women on her old machine. Her eldest daughter is in Class 9, on a foundation scholarship, and wants to become a chartered accountant.",
    ],
    quote:
      "I didn't want pity. I wanted a chance to feed my children with my own hands.",
  },
  {
    name: "Ramesh",
    location: "Greater Noida, Uttar Pradesh",
    pillar: "Medical Assistance",
    pillarColor: "#1D9E75",
    photo: "https://source.unsplash.com/featured/?portrait,india&sig=2",
    body: [
      "A factory line worker for nineteen years, Ramesh was diagnosed with a heart condition that needed surgery his savings couldn't cover. The foundation's hospital tie-up programme picked up the gap his employer's insurance left behind.",
      "Three months on, he's back at the line — on lighter duty for now — and his wife has joined a local self-help group running tiffin services to neighbouring offices.",
    ],
    quote: "I asked for help once. The dignity of it stayed with me.",
  },
  {
    name: "Kavita",
    location: "Meerut, Uttar Pradesh",
    pillar: "Disability Support",
    pillarColor: "#7F77DD",
    photo: "https://source.unsplash.com/featured/?portrait,india&sig=3",
    body: [
      "Kavita had always wanted to study but the nearest school was three kilometres of broken pavement away. After a fall in childhood, walking that distance daily wasn't possible.",
      "An assistive trike from the foundation changed her route. She finished Class 10 last year and now teaches basic English to younger children at the same community centre that helped her enrol.",
    ],
    quote: "It isn't a wheelchair. It's the road to school.",
  },
  {
    name: "Mohan",
    location: "Kanpur, Uttar Pradesh",
    pillar: "Elder Care",
    pillarColor: "#D85A30",
    photo: "https://source.unsplash.com/featured/?portrait,india&sig=4",
    body: [
      "Mohan, 74, lost his wife of fifty years two winters ago. His son works in another city; the days grew quiet in a way he hadn't known they could.",
      "A weekly home-visit volunteer reads to him from the morning paper. He's started writing again — short verses, mostly — and last month read one aloud at the community centre's monthly gathering.",
    ],
    quote: "Company is its own kind of medicine.",
  },
];

export default function Impact() {
  return (
    <>
      <Seo
        title="Impact & Stories"
        description="Real lives changed through SAHS Foundation's eight ground-level programmes. Beneficiary stories, press coverage, and annual reports."
        path="/impact"
      />
      <Hero
        variant="cream"
        size="md"
        eyebrow={impact.hero.eyebrow}
        headline={impact.hero.headline}
        sub={impact.hero.sub}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {placeholderStories.map((s) => (
              <article key={s.name} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream-50">
                  <img
                    src={s.photo}
                    alt={`${s.name} — ${s.pillar} programme beneficiary (placeholder photograph).`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: s.pillarColor }}
                  >
                    {s.pillar}
                  </span>
                  <span className="text-sm text-ink-600">
                    {s.name} · {s.location}
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-base text-ink-900 leading-[1.7]">
                  {s.body.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <blockquote className="mt-5 border-l-2 border-coral-600 pl-4">
                  <p className="font-serif italic text-[17px] md:text-[18px] text-ink-600 leading-relaxed">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                </blockquote>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-16 md:py-20">
        <Container>
          <div className="text-center mb-10">
            <Eyebrow className="justify-center">PRESS &amp; RECOGNITION</Eyebrow>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
              Where our work has been seen
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/2] border border-dashed border-ink-400/60 rounded-md bg-white flex items-center justify-center"
              >
                <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-coral-600">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>ANNUAL REPORTS</Eyebrow>
            <h2 className="font-serif text-[26px] md:text-[32px] font-medium text-ink-900 leading-tight">
              Read our progress
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[2024, 2023, 2022].map((year) => (
              <div
                key={year}
                className="border border-dashed border-ink-400/60 rounded-md p-6 bg-cream-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-serif text-[28px] font-medium text-ink-900 leading-none">
                      {year}
                    </div>
                    <div className="text-sm text-ink-600 mt-2">Annual Report</div>
                  </div>
                  <Download className="w-5 h-5 text-ink-400" strokeWidth={2} />
                </div>
                <div className="mt-6 text-[10px] font-medium tracking-[0.25em] uppercase text-coral-600">
                  Coming soon
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

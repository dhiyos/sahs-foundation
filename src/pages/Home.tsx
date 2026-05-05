import { Seo } from "../components/Seo";
import { Hero } from "../components/sections/Hero";
import { WhoWeAre } from "../components/sections/WhoWeAre";
import { PillarsHeader } from "../components/sections/PillarsHeader";
import { PillarsGrid } from "../components/sections/PillarsGrid";
import { ApproachSteps } from "../components/sections/ApproachSteps";
import { TrustStrip } from "../components/sections/TrustStrip";
import { GuidingPrinciple } from "../components/sections/GuidingPrinciple";
import { home } from "../lib/content";

export default function Home() {
  return (
    <>
      <Seo
        fullTitle
        title="SAHS Foundation — Transforming lives across borders"
        description="SAHS Foundation channels SAHS Group's profits into eight ground-level missions across India and beyond — women, medical, disability, water, animal welfare, environment, elder, and care institutions."
        path="/"
      />
      <Hero
        variant="dark"
        decoration
        size="lg"
        eyebrow={home.hero.eyebrow}
        headline={home.hero.headline}
        sub={home.hero.sub}
        trustBadge={home.hero.trustBadge}
        ctas={[
          { ...home.hero.primaryCta, variant: "primary" },
          { ...home.hero.secondaryCta, variant: "heroGhost" },
        ]}
      />
      <WhoWeAre />
      <PillarsHeader />
      <PillarsGrid />
      <ApproachSteps />
      <TrustStrip />
      <GuidingPrinciple />
    </>
  );
}

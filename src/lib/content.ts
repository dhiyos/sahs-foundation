export const home = {
  hero: {
    eyebrow: "A GLOBAL INITIATIVE",
    headline: "Transforming lives across borders",
    sub: "Empowering the deserving. Nurturing the vulnerable. Building communities of dignity & hope.",
    trustBadge: "REGISTERED NON-PROFIT TRUST · UP/2022/0307306",
    primaryCta: { label: "Support a Cause", to: "/get-involved#donate" },
    secondaryCta: { label: "Our Initiatives", to: "/initiatives" },
  },
  whoWeAre: {
    eyebrow: "WHO WE ARE",
    body:
      "SAHS Foundation is the humanitarian arm of the SAHS Group of Companies — a multi-national conglomerate dedicated to giving back to society. A major portion of the Group's profits is channelled directly into this foundation, fuelling impactful programs that uplift the most vulnerable members of our communities across India and beyond.",
    info: [
      { label: "Office", value: "SAHS Tower, Sector 49, Noida" },
      { label: "Reach", value: "International" },
      { label: "Reg", value: "UP/2022/0307306" },
    ],
  },
  pillarsHeader: {
    heading: "Our pillars of change",
    sub: "Eight core missions · Countless lives transformed",
  },
  approach: {
    eyebrow: "OUR APPROACH",
    heading: "How we create impact",
    steps: [
      {
        title: "Identify & reach",
        description:
          "We start at the ground — finding individuals and communities whose needs are real, urgent, and often unseen.",
      },
      {
        title: "Assess & plan",
        description:
          "Each case is assessed on its own merits. Programs are designed around outcomes, not optics.",
      },
      {
        title: "Deliver & support",
        description:
          "We deploy resources directly, with field partners and the SAHS Group's operational backing behind every program.",
      },
      {
        title: "Sustain & scale",
        description:
          "Successful models are scaled into self-sustaining ecosystems that outlast the original intervention.",
      },
    ],
  },
  trust: {
    cells: [
      { value: "100%", label: "TRANSPARENT OPERATIONS" },
      { value: "Pan India", label: "PROGRAM REACH" },
      { value: "Intl.", label: "CORPORATE BACKING" },
      { value: "Zero", label: "PROFIT MOTIVE" },
    ],
  },
  guidingPrinciple: {
    heading: "Our guiding principle",
    body:
      "Every human being deserves a life of dignity. SAHS Foundation stands as a bridge between abundance and need — transforming corporate success into real, lasting social impact, one life at a time.",
  },
  finalCta: {
    heading: "Be part of the change",
    body:
      "Whether you contribute resources, partner with us as an organisation, or give your time — every effort creates impact.",
    buttons: [
      { label: "Donate Now", to: "/get-involved#donate", variant: "primary" as const },
      { label: "Partner With Us", to: "/get-involved#partner", variant: "secondary" as const },
      { label: "Volunteer", to: "/get-involved#volunteer", variant: "ghost" as const },
    ],
  },
};

export const about = {
  hero: {
    eyebrow: "ABOUT US",
    headline: "Dignity, by design.",
    sub: "Born from corporate success. Built for human impact.",
  },
  whoWeAre: [
    "SAHS Foundation is the humanitarian arm of the SAHS Group of Companies — a multi-national conglomerate dedicated to giving back to society. Founded in 2022 and registered as a non-profit trust (UP/2022/0307306), the foundation channels a major portion of the Group's profits directly into impactful programs that uplift the most vulnerable members of our communities across India and beyond.",
    "We believe philanthropy works best when it is structural, not optional. That is why our funding does not depend on external donations to operate — every rupee we receive from public donors goes directly to programs, while operating costs are covered by the Group.",
  ],
  vision:
    "A world where every human being — regardless of circumstance, gender, age, or ability — lives with dignity, agency, and hope.",
  mission:
    "To channel corporate success into measurable social impact across eight core missions, reaching the most vulnerable members of our communities through transparent, ground-level programs.",
  values: [
    { label: "Compassion", description: "Every program begins with empathy." },
    { label: "Integrity", description: "100% transparent operations, zero profit motive." },
    { label: "Dignity", description: "Beneficiaries are partners, never recipients of pity." },
    { label: "Sustainability", description: "Successful models are scaled to create self-sustaining ecosystems." },
    { label: "Service", description: "Driven by purpose, not publicity." },
  ],
  groupConnection:
    "[TBD — short paragraph about SAHS Group: industries, geographies, philosophy of giving back. Will be provided.]",
  leadership: [] as Array<{ name: string; role: string; bio: string; photo?: string }>,
  compliance: [
    "Registered as a Non-Profit Trust in Uttar Pradesh",
    "Registration Number: UP/2022/0307306",
    "Annual reports available on request",
    "All programs independently audited",
  ],
};

export const initiatives = {
  hero: {
    eyebrow: "OUR INITIATIVES",
    headline: "Eight pillars. One purpose.",
    sub: "Each program is built around real, ground-level need — and delivered with measurable outcomes.",
  },
  cta: {
    heading: "Want to support a specific initiative?",
    label: "Get in touch",
    to: "/get-involved#partner",
  },
};

export const impact = {
  hero: {
    eyebrow: "IMPACT & STORIES",
    headline: "Real lives. Real change.",
    sub: "Behind every program is a person whose life looks different today than it did yesterday.",
  },
  stories: [] as Array<{
    name: string;
    location: string;
    pillar: string;
    photo: string;
    body: string[];
    quote?: string;
  }>,
  press: [] as Array<{ name: string; logo: string; href?: string }>,
  reports: [] as Array<{ year: number; title: string; href: string }>,
};

export const getInvolved = {
  hero: {
    eyebrow: "GET INVOLVED",
    headline: "Three ways to make a difference.",
    sub: "Whether you contribute resources, partner with us as an organisation, or give your time — every effort creates impact.",
  },
  pathways: [
    {
      key: "donate" as const,
      heading: "Donate",
      label: "Support a Cause",
      to: "#donate",
      tone: "coral" as const,
    },
    {
      key: "partner" as const,
      heading: "Partner",
      label: "Discuss Partnership",
      to: "#partner",
      tone: "teal" as const,
    },
    {
      key: "volunteer" as const,
      heading: "Volunteer",
      label: "Join Us",
      to: "#volunteer",
      tone: "navy" as const,
    },
  ],
  donate: {
    heading: "Support a cause",
    body:
      "Every rupee you contribute goes directly to programs. Our operating costs are covered by the SAHS Group, ensuring 100% of public donations reach beneficiaries.",
    tiers: [
      { amount: "₹1,000", impact: "One month of medical support for one patient" },
      { amount: "₹5,000", impact: "Skill training for one woman" },
      { amount: "₹25,000", impact: "A borewell for a rural community" },
      { amount: "Custom", impact: "Choose your own contribution" },
    ],
    paymentHref: "#" as string, // TBD payment gateway
  },
  partner: {
    heading: "For corporates & CSR teams",
    body:
      "Whether you are a corporation seeking a CSR partner, a foundation looking to co-fund initiatives, or an organisation aligned with our mission — we would be delighted to explore collaboration. Our parent group's backing means partnerships with us are structured, accountable, and outcome-driven.",
  },
  volunteer: {
    heading: "Give your time",
    body:
      "From medical camps to plantation drives, we welcome volunteers across all eight initiatives. Tell us a bit about yourself and we will match you with a programme that fits your skills and availability.",
  },
};

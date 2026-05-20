export const home = {
  hero: {
    eyebrow: "A Registered Non-Profit Trust",
    headline: "Supporting lives with dignity, care, and accountability",
    sub: "SAHS Foundation works through focused social initiatives in community welfare, animal care, health, sanitation, and environmental responsibility.",
    trustBadge: "REGISTERED NON-PROFIT TRUST · UP/2022/0307306",
    primaryCta: { label: "Partner With Us", to: "/get-involved#partner" },
    secondaryCta: { label: "Explore Initiatives", to: "/initiatives" },
  },
  whoWeAre: {
    eyebrow: "WHO WE ARE",
    body:
      "SAHS Foundation is the humanitarian initiative of the SAHS Group, created to support structured, accountable, and need-based social impact. The foundation focuses on community welfare, animal care, health, sanitation, environmental responsibility, and support for vulnerable groups through direct initiatives and trusted field partnerships.",
    info: [
      { label: "Office", value: "SAHS Tower, Sector 49, Noida" },
      { label: "Focus", value: "Community Welfare & Animal Care" },
      { label: "Registration", value: "UP/2022/0307306" },
    ],
  },
  pillarsHeader: {
    heading: "Our Focus Areas",
    sub: "Structured initiatives across community welfare, health, animal care, sanitation, and environmental responsibility.",
  },
  approach: {
    eyebrow: "OUR METHOD",
    heading: "How We Work",
    sub: "A simple, accountable process from need identification to responsible delivery.",
    steps: [
      {
        title: "Identify Needs",
        description:
          "We begin by understanding real needs through field inputs, local references, and direct community conversations.",
      },
      {
        title: "Assess & Plan",
        description:
          "Each initiative is reviewed for urgency, suitability, budget, and expected outcome before support is committed.",
      },
      {
        title: "Deliver Support",
        description:
          "Support is delivered directly or through trusted partners, with documentation and basic reporting.",
      },
      {
        title: "Review & Continue",
        description:
          "We review outcomes, document learnings, and continue or expand initiatives where they create meaningful value.",
      },
    ],
  },
  trust: {
    cells: [
      {
        icon: "shield",
        label: "Transparent Governance",
        sub: "Accountable records and responsible use of resources",
      },
      {
        icon: "map",
        label: "India-Focused Work",
        sub: "Community-led initiatives with a long-term outlook",
      },
      {
        icon: "building",
        label: "SAHS Group Support",
        sub: "Backed by responsible enterprise commitment",
      },
      {
        icon: "heart",
        label: "Not-for-Profit Purpose",
        sub: "Structured for social welfare and community benefit",
      },
    ],
  },
  guidingPrinciple: {
    eyebrow: "OUR COMMITMENT",
    heading: "Guided by dignity, accountability, and care",
    body:
      "SAHS Foundation exists to support people, animals, and communities through focused, responsible social initiatives. We work where support can be delivered with care, documented with accountability, and sustained through trusted partnerships.",
  },
  finalCta: {
    heading: "Be part of the change",
    body:
      "Whether you contribute resources, partner with us as an organisation, or give your time — every effort creates impact.",
    buttons: [
      { label: "Partner With Us", to: "/get-involved#partner", variant: "primary" as const },
      { label: "Explore Initiatives", to: "/initiatives", variant: "secondary" as const },
      { label: "Volunteer", to: "/get-involved#volunteer", variant: "ghost" as const },
    ],
  },
};

export const about = {
  hero: {
    eyebrow: "ABOUT US",
    headline: "Dignity, by design.",
    sub: "Built on responsibility. Designed for accountable social impact.",
  },
  whoWeAre: [
    "SAHS Foundation is a registered non-profit trust established in 2022 under registration number UP/2022/0307306.",
    "The foundation is the social impact initiative of the SAHS Group, created to support structured, need-based, and accountable welfare programs. Our work focuses on community welfare, medical support, animal care, sanitation, environmental responsibility, and assistance for vulnerable groups.",
    "We believe social impact should be delivered with care, documented with responsibility, and sustained through trusted partnerships. SAHS Foundation is supported by the SAHS Group's commitment to responsible enterprise and community development.",
  ],
  vision:
    "A society where people, animals, and communities receive support with dignity, care, and opportunity.",
  mission:
    "To support structured, need-based social initiatives in community welfare, medical assistance, animal care, sanitation, environmental responsibility, and support for vulnerable groups.",
  values: [
    { label: "Compassion", description: "Every initiative begins with empathy and respect." },
    { label: "Integrity", description: "We maintain responsible records, clear processes, and accountable use of resources." },
    { label: "Dignity", description: "People and communities are treated as partners in progress, not recipients of pity." },
    { label: "Sustainability", description: "We support initiatives that can create lasting value beyond one-time assistance." },
    { label: "Service", description: "Driven by purpose, responsibility, and quiet commitment." },
  ],
  groupConnection: {
    eyebrow: "SAHS GROUP",
    heading: "Built on responsible business.",
    paragraphs: [
      "SAHS Foundation is supported by the SAHS Group's commitment to responsible business and community development.",
      "The Group's work in animal nutrition and allied life-sciences sectors gives the Foundation a practical understanding of rural communities, animal welfare, public health, and grassroots support needs.",
      "The Foundation operates as a registered non-profit trust with its own welfare purpose, governance discipline, and program priorities.",
      "Business creates capacity. The Foundation channels that capacity into accountable social impact.",
    ],
  },
  leadership: [] as Array<{ name: string; role: string; bio: string; photo?: string }>,
};

export const initiatives = {
  hero: {
    eyebrow: "OUR INITIATIVES",
    headline: "Focused initiatives. One purpose.",
    sub: "SAHS Foundation works across selected welfare areas where care, support, and responsible action can create meaningful community value.",
  },
  cta: {
    heading: "Want to support a specific initiative?",
    label: "Get in touch",
    to: "/get-involved#partner",
  },
};

export const getInvolved = {
  hero: {
    eyebrow: "GET INVOLVED",
    headline: "Work with us to create responsible impact.",
    sub: "Partner with SAHS Foundation, volunteer your time, or help us identify communities, individuals, animals, and institutions that need genuine support.",
  },
  pathways: [
    {
      key: "partner" as const,
      heading: "Partner",
      body:
        "Partner on focused welfare initiatives across community support, animal care, health, sanitation, and environmental responsibility.",
      label: "Discuss Partnership",
      to: "#partner",
      tone: "teal" as const,
    },
    {
      key: "volunteer" as const,
      heading: "Volunteer",
      body:
        "Contribute your time, skills, or field support to initiatives where responsible participation can create meaningful value.",
      label: "Volunteer With Us",
      to: "#volunteer",
      tone: "navy" as const,
    },
    {
      key: "refer" as const,
      heading: "Refer a Need",
      body:
        "Help us identify individuals, communities, animals, or care institutions that may require genuine, need-based support.",
      label: "Refer a Need",
      to: "#refer",
      tone: "coral" as const,
    },
  ],
  partner: {
    heading: "For corporates & CSR teams",
    body:
      "Whether you are a corporation seeking a CSR partner, a foundation looking to co-fund initiatives, or an organisation aligned with our mission — we would be delighted to explore collaboration. Our parent group's backing means partnerships with us are structured, accountable, and outcome-driven.",
  },
  volunteer: {
    heading: "Give your time",
    body:
      "From medical camps to plantation drives, we welcome volunteers across all of our initiatives. Tell us a bit about yourself and we will match you with a programme that fits your skills and availability.",
  },
  refer: {
    heading: "Refer a need",
    body:
      "If you know of an individual, community, animal, or care institution that may need support, share the details with us. We review every referral with care and respond where we can help.",
  },
};

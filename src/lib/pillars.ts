import type { LucideIcon } from "lucide-react";
import {
  User,
  Plus,
  Accessibility,
  Home as HomeIcon,
  Droplet,
  PawPrint,
  TreePine,
  Heart,
} from "lucide-react";
import type { PillarKey } from "../components/ui/PillarCard";

export type PillarSlug =
  | "women-empowerment"
  | "medical-assistance"
  | "disability-support"
  | "care-institutions"
  | "water-sanitation"
  | "animal-welfare"
  | "environmental-care"
  | "elder-care";

export interface PillarImage {
  src: string;
  alt: string;
  credit: { name: string; url: string };
}

export interface Pillar {
  slug: PillarSlug;
  pillar: PillarKey;
  title: string;
  short: string;
  tabLabel?: string;
  sectionHeading?: string;
  intro: string;
  whatWeDo: string[];
  whoWeServe: string;
  icon: LucideIcon;
  image: PillarImage;
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const pillars: Pillar[] = [
  {
    slug: "women-empowerment",
    pillar: "women",
    title: "Women's Welfare & Livelihoods",
    short: "Support for education, skills, self-reliance, and dignity-led community assistance.",
    tabLabel: "Women's Welfare",
    sectionHeading: "Women's Welfare & Livelihoods",
    intro:
      "SAHS Foundation supports women and girls through education assistance, skill-building, livelihood enablement, and need-based welfare support. The focus is to encourage dignity, self-reliance, and timely assistance where support can improve family and community stability.",
    whatWeDo: [
      "Skill development support",
      "Education and scholarship assistance",
      "Livelihood and self-employment enablement",
      "Need-based welfare assistance",
    ],
    whoWeServe:
      "Women and girls facing economic, social, or educational disadvantage, identified through field inputs, local references, or trusted partners.",
    icon: User,
    image: {
      src: "https://plus.unsplash.com/premium_photo-1663039852183-847a142ab9df?auto=format&fit=crop&w=1600&q=80",
      alt: "Indian woman working at a sewing machine in a tailoring workshop.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/3xgCAit9r18" },
    },
  },
  {
    slug: "medical-assistance",
    pillar: "medical",
    title: "Medical Assistance",
    short: "Healthcare access, treatment support, medical camps, and essential care assistance.",
    intro:
      "SAHS Foundation supports need-based healthcare assistance for individuals and communities with limited access to timely medical care. Our focus includes medical camps, treatment support, essential medicines, and coordination with healthcare providers where appropriate.",
    whatWeDo: [
      "Medical camp support",
      "Treatment assistance",
      "Essential medicine support",
      "Healthcare access facilitation",
      "Hospital or clinic coordination, where required",
    ],
    whoWeServe:
      "Individuals and families from underserved communities who face financial, access, or emergency barriers to basic healthcare support.",
    icon: Plus,
    image: {
      src: u("1779006277040-67543ea167b1"),
      alt: "Hands applying medical ointment to a patient.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/LE0vyZoHwWY" },
    },
  },
  {
    slug: "disability-support",
    pillar: "disability",
    title: "Disability Support",
    short: "Assistive support, rehabilitation access, counselling, and inclusion-focused care.",
    sectionHeading: "Disability Support & Inclusion",
    intro:
      "SAHS Foundation supports persons with disabilities through need-based assistance, access facilitation, assistive support, and inclusion-focused welfare initiatives. Our approach is rooted in dignity, accessibility, and practical support for individuals and their families.",
    whatWeDo: [
      "Assistive device support",
      "Therapy and rehabilitation access facilitation",
      "Counselling and family support",
      "Education and inclusion support",
      "Need-based welfare assistance",
    ],
    whoWeServe:
      "Persons with disabilities and their families who require support in accessing care, rehabilitation, education, mobility, or essential welfare assistance.",
    icon: Accessibility,
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/National_Institute_For_Locomotor_Disabilities_01.jpg/1280px-National_Institute_For_Locomotor_Disabilities_01.jpg",
      alt: "National Institute for Locomotor Disabilities, India — supporting persons with disabilities.",
      credit: { name: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:National_Institute_For_Locomotor_Disabilities_01.jpg" },
    },
  },
  {
    slug: "care-institutions",
    pillar: "care",
    title: "Institutional Support",
    short: "Essential supplies and support for orphanages, special schools, shelters, and care homes.",
    sectionHeading: "Support for Care Institutions",
    intro:
      "SAHS Foundation supports care institutions that serve children, senior citizens, persons with disabilities, and vulnerable groups. Our assistance focuses on essential supplies, basic infrastructure support, health-related activities, and need-based welfare contributions.",
    whatWeDo: [
      "Essential supply support",
      "Basic infrastructure assistance",
      "Health and welfare camp support",
      "Seasonal and need-based contributions",
      "Coordination with care homes, shelters, and special institutions",
    ],
    whoWeServe:
      "Care homes, shelters, orphanages, special schools, senior citizen homes, and institutions serving vulnerable communities.",
    icon: HomeIcon,
    image: {
      src: u("1489942986787-cded4ecf962e"),
      alt: "Two children embracing and laughing together.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/w6caoaJzXIE" },
    },
  },
  {
    slug: "water-sanitation",
    pillar: "water",
    title: "Water & Sanitation",
    short: "Clean water, sanitation, hygiene infrastructure, and community health support.",
    sectionHeading: "Water & Sanitation Support",
    intro:
      "SAHS Foundation supports access to clean water, basic sanitation, and hygiene awareness for underserved communities. Our focus is on practical, need-based interventions that improve health, dignity, and everyday living conditions.",
    whatWeDo: [
      "Clean drinking water support",
      "Water purification assistance",
      "Basic sanitation infrastructure support",
      "Hygiene awareness initiatives",
      "Need-based community health support",
    ],
    whoWeServe:
      "Rural and peri-urban communities facing limited access to clean water, sanitation facilities, or basic hygiene infrastructure.",
    icon: Droplet,
    image: {
      src: u("1604981338911-b7e37bcd3899"),
      alt: "Water pouring from a wooden bucket.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/jeiPvWOlhs4" },
    },
  },
  {
    slug: "animal-welfare",
    pillar: "animal",
    title: "Animal Welfare",
    short: "Veterinary care, vaccination support, shelter assistance, and welfare awareness.",
    sectionHeading: "Animal Welfare Support",
    intro:
      "SAHS Foundation supports need-based animal welfare initiatives focused on care, health, shelter support, and humane treatment. Our work is especially aligned with the SAHS Group's broader understanding of animal health, rural ecosystems, and responsible care.",
    whatWeDo: [
      "Veterinary care support",
      "Vaccination and sterilisation support, where arranged through qualified partners",
      "Shelter and rescue support",
      "Essential medicine and nutrition assistance",
      "Animal welfare awareness initiatives",
    ],
    whoWeServe:
      "Stray, abandoned, rescued, and community animals requiring care, treatment, shelter, or welfare support.",
    icon: PawPrint,
    image: {
      src: u("1779183802270-474920e26315"),
      alt: "A rescued dog with an ear tag resting on grass.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/HwbYPIcdCBc" },
    },
  },
  {
    slug: "environmental-care",
    pillar: "environment",
    title: "Environmental Care",
    short: "Plantation drives, cleanliness initiatives, waste awareness, and community environmental action.",
    intro:
      "SAHS Foundation supports community-led environmental initiatives focused on cleanliness, plantation, green spaces, and awareness. Our approach is practical and local: small, responsible actions that improve shared surroundings and encourage long-term civic responsibility.",
    whatWeDo: [
      "Plantation and green space support",
      "Cleanliness and waste awareness initiatives",
      "Community cleanup activities",
      "Environmental awareness programs",
      "Support for local eco-restoration efforts, where feasible",
    ],
    whoWeServe:
      "Communities, public spaces, local institutions, and neighbourhood ecosystems that benefit from cleaner, greener, and healthier surroundings.",
    icon: TreePine,
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Tree_Plantation_Drive.jpg",
      alt: "Volunteers carrying out a tree plantation drive in India.",
      credit: { name: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Tree_Plantation_Drive.jpg" },
    },
  },
  {
    slug: "elder-care",
    pillar: "elder",
    title: "Elder Care",
    short: "Support for senior citizens through care, companionship, dignity, and essential assistance.",
    sectionHeading: "Elder Care Support",
    intro:
      "SAHS Foundation supports senior citizens through need-based assistance, care institution support, health-related help, and companionship-focused welfare initiatives. Our focus is to help elderly individuals live with dignity, comfort, and basic support.",
    whatWeDo: [
      "Senior citizen welfare support",
      "Old age home and care institution assistance",
      "Health and essential needs support",
      "Companionship and community engagement initiatives",
      "Need-based assistance for elderly individuals",
    ],
    whoWeServe:
      "Senior citizens, especially those facing neglect, isolation, financial hardship, limited family support, or difficulty accessing basic care.",
    icon: Heart,
    image: {
      src: u("1773234005378-ceebf3c877b9"),
      alt: "Two hands holding each other gently in care.",
      credit: { name: "Unsplash", url: "https://unsplash.com/photos/mwGrAl1X514" },
    },
  },
];

export const pillarBySlug = (slug: PillarSlug): Pillar | undefined =>
  pillars.find((p) => p.slug === slug);

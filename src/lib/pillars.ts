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

export interface Pillar {
  slug: PillarSlug;
  pillar: PillarKey;
  title: string;
  short: string;
  long: string;
  whatWeDo: string;
  whoWeServe: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    slug: "women-empowerment",
    pillar: "women",
    title: "Women Empowerment",
    short: "Education, skill development, self-employment & marriage assistance.",
    long:
      "Education, skill development, self-employment, marriage assistance, and holistic upliftment of deserving women across all ages. We believe empowering one woman creates ripples that transform entire families and communities.",
    whatWeDo:
      "Skill training, scholarship support, marriage assistance, livelihood enablement",
    whoWeServe:
      "Women across all ages and circumstances facing economic, social, or educational disadvantage",
    icon: User,
  },
  {
    slug: "medical-assistance",
    pillar: "medical",
    title: "Medical Assistance",
    short: "Free medical aid, treatment support & healthcare access.",
    long:
      "Free medical aid, treatment support, and healthcare access for those who cannot afford it — across all ages and genders. From routine consultations to critical surgeries, we bridge the gap between need and care.",
    whatWeDo:
      "Free medical camps, treatment funding, hospital tie-ups, medication supply",
    whoWeServe:
      "Patients from underserved communities unable to afford private healthcare",
    icon: Plus,
  },
  {
    slug: "disability-support",
    pillar: "disability",
    title: "Disability Support",
    short: "Rehabilitation, assistive aids, counselling & inclusive care.",
    long:
      "Physical and mental disability rehabilitation, assistive aids, counselling, and inclusive care programs across gender and age. Our work is rooted in inclusion — never sympathy.",
    whatWeDo:
      "Assistive device distribution, therapy support, counselling, inclusive education advocacy",
    whoWeServe: "Persons with disabilities and their families",
    icon: Accessibility,
  },
  {
    slug: "care-institutions",
    pillar: "care",
    title: "Care Institutions",
    short: "Essential supplies for orphanages, blind schools & homes.",
    long:
      "Essential supplies for orphanages, blind schools, old age homes, and disability centres across the region. Where institutions exist, we make them better.",
    whatWeDo:
      "Supply drives, infrastructure support, festival contributions, health camps",
    whoWeServe: "Established care institutions and the residents they serve",
    icon: HomeIcon,
  },
  {
    slug: "water-sanitation",
    pillar: "water",
    title: "Water & Sanitation",
    short: "Clean water, sanitation & hygiene infrastructure.",
    long:
      "Building sanitation facilities, clean drinking water access, and hygiene infrastructure for underserved communities. Dignity begins with the basics.",
    whatWeDo:
      "Borewells, water purification, toilet construction, hygiene awareness drives",
    whoWeServe:
      "Rural and peri-urban communities lacking basic water and sanitation infrastructure",
    icon: Droplet,
  },
  {
    slug: "animal-welfare",
    pillar: "animal",
    title: "Animal Welfare",
    short: "Veterinary care, vaccination, sheltering & welfare.",
    long:
      "Veterinary care, vaccination drives, medication, sheltering, and compassionate welfare programs for animals in need. Compassion knows no species.",
    whatWeDo:
      "Stray animal sterilisation and vaccination, emergency veterinary aid, shelter support",
    whoWeServe: "Stray, abandoned, and rescued animals",
    icon: PawPrint,
  },
  {
    slug: "environmental-care",
    pillar: "environment",
    title: "Environmental Care",
    short: "Plantation drives, cleanups & community eco initiatives.",
    long:
      "Tree plantation drives, green space restoration, garbage cleaning, and community-led eco initiatives. We owe the planet what we owe each other.",
    whatWeDo:
      "Plantation drives, green space adoption, cleanup campaigns, eco-awareness programs",
    whoWeServe:
      "Local ecosystems and the communities that depend on them",
    icon: TreePine,
  },
  {
    slug: "elder-care",
    pillar: "elder",
    title: "Elder Care",
    short: "Dignity, companionship & support for senior citizens.",
    long:
      "Dedicated programs ensuring dignity, companionship, healthcare essentials, and support for senior citizens in need. Every elder deserves to be seen.",
    whatWeDo:
      "Old age home support, home visits, medical aid, companionship programs",
    whoWeServe: "Senior citizens, especially those without family support",
    icon: Heart,
  },
];

export const pillarBySlug = (slug: PillarSlug): Pillar | undefined =>
  pillars.find((p) => p.slug === slug);

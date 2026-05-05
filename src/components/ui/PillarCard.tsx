import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export type PillarKey =
  | "women"
  | "medical"
  | "disability"
  | "care"
  | "water"
  | "animal"
  | "environment"
  | "elder";

export interface PillarCardProps {
  pillar: PillarKey;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
}

type Tokens = { border: string; bg: string };

const palette: Record<PillarKey, Tokens> = {
  women:       { border: "#D4537E", bg: "#FBEAF0" },
  medical:     { border: "#1D9E75", bg: "#E1F5EE" },
  disability:  { border: "#7F77DD", bg: "#EEEDFE" },
  care:        { border: "#BA7517", bg: "#FAEEDA" },
  water:       { border: "#378ADD", bg: "#E6F1FB" },
  animal:      { border: "#639922", bg: "#EAF3DE" },
  environment: { border: "#5F5E5A", bg: "#F1EFE8" },
  elder:       { border: "#D85A30", bg: "#FAECE7" },
};

function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function PillarCard({
  pillar,
  title,
  description,
  icon: Icon,
  href,
  className,
}: PillarCardProps) {
  const tokens = palette[pillar];

  const body = (
    <>
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: tokens.border }}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <h3 className="font-medium text-ink-900 mb-2 text-base">{title}</h3>
      <p className="text-sm text-ink-600 leading-relaxed">{description}</p>
    </>
  );

  const cardClasses = `border-t-4 p-6 transition-transform duration-200 ${className ?? ""}`;
  const styleProps = { backgroundColor: tokens.bg, borderTopColor: tokens.border };

  if (href && isInternal(href)) {
    return (
      <Link
        to={href}
        className={`${cardClasses} block hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-inset`}
        style={styleProps}
        aria-label={`${title} — view initiative`}
      >
        {body}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${cardClasses} block hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-inset`}
        style={styleProps}
      >
        {body}
      </a>
    );
  }

  return (
    <div className={cardClasses} style={styleProps}>
      {body}
    </div>
  );
}

import { forwardRef } from "react";
import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "heroGhost";

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center px-6 py-3 rounded text-sm font-medium tracking-wide transition focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-coral-600 hover:bg-coral-700 text-white",
  secondary: "bg-teal-700 hover:bg-teal-800 text-white",
  ghost: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white",
  heroGhost:
    "border border-white/40 text-white hover:bg-white/10 focus:ring-offset-0",
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  {
    variant = "primary",
    children,
    onClick,
    href,
    className,
    type = "button",
    disabled,
    ariaLabel,
  },
  ref
) {
  const classes = cx(base, variants[variant], className);

  if (href && isInternal(href)) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-60";

const sizes = {
  md: "h-11 px-6",
  lg: "h-13 px-7 text-base py-3.5",
};

const variants = {
  primary:
    "bg-gradient-brand text-plum-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5",
  outline:
    "border border-border bg-card text-foreground hover:border-mauve hover:text-primary hover:-translate-y-0.5",
  ghost: "text-primary hover:text-accent",
};

export type CtaProps = {
  variant?: keyof typeof variants | undefined;
  size?: keyof typeof sizes | undefined;
  className?: string | undefined;
};

export function ctaClasses({
  variant = "primary",
  size = "md",
  className,
}: CtaProps = {}) {
  return cn(base, sizes[size], variants[variant], className);
}

/** Primary CTA used across the whole site. */
export function BookCallButton({
  size = "md",
  className,
  label = "Book a Free Discovery Call",
}: CtaProps & { label?: string }) {
  return (
    <Link to="/book-a-call" className={ctaClasses({ size, className })}>
      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
      {label}
    </Link>
  );
}

/** Secondary CTA. */
export function ExploreServicesButton({
  size = "md",
  className,
  label = "Explore Services",
}: CtaProps & { label?: string }) {
  return (
    <Link
      to="/services"
      className={ctaClasses({ variant: "outline", size, className })}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

import { cn } from "@/lib/utils";

/** Minimal luxury TG monogram for Tia Goyal — deep espresso on ivory with a beige accent. */
export function Monogram({
  className,
  title = "Tia Goyal monogram",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={cn("h-9 w-9", className)}
    >
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="10"
        fill="var(--ivory)"
        stroke="var(--beige)"
        strokeWidth="1.5"
      />
      <rect
        x="5.5"
        y="5.5"
        width="37"
        height="37"
        rx="7"
        fill="none"
        stroke="var(--taupe)"
        strokeOpacity="0.45"
        strokeWidth="0.75"
      />
      <path
        d="M13 18.5h11.5M18.75 18.5v11"
        stroke="var(--espresso)"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M34.6 21.2a5.6 5.6 0 1 0 .5 5.6h-3.4"
        fill="none"
        stroke="var(--espresso)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

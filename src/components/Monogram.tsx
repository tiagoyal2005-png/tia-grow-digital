import { cn } from "@/lib/utils";

/**
 * Minimal editorial TG monogram for Tia Goyal.
 * Deep espresso letterforms on ivory, with a fine beige frame and a champagne hairline accent.
 */
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
        x="0.6"
        y="0.6"
        width="46.8"
        height="46.8"
        rx="12"
        fill="var(--ivory)"
        stroke="var(--beige)"
        strokeWidth="1.2"
      />
      {/* T */}
      <path
        d="M12.5 17.5h11M18 17.5v13"
        stroke="var(--espresso)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* G */}
      <path
        d="M34.8 20.4a6 6 0 1 0 .6 6.2h-3.7"
        fill="none"
        stroke="var(--espresso)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* champagne hairline accent */}
      <path
        d="M12.5 35.4h23"
        stroke="var(--champagne)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

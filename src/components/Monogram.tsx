import { cn } from "@/lib/utils";

/** Minimal TG monogram mark for Tia Goyal. */
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
      <defs>
        <linearGradient id="tg-mono" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.4 0.105 320)" />
          <stop offset="60%" stopColor="oklch(0.7 0.115 320)" />
          <stop offset="100%" stopColor="oklch(0.85 0.062 310)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#tg-mono)" />
      <path
        d="M12 17h13M18.5 17v15"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M36 20.5a6.6 6.6 0 1 0 .6 6.4h-4.2"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

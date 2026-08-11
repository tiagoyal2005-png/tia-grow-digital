import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Star rating display. Pass `count` to show the number of reviews. */
export function StarRating({
  rating,
  count,
  size = 14,
  className,
}: {
  rating: number;
  count?: number;
  size?: number;
  className?: string;
}) {
  const rounded = Math.round(rating);
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className="inline-flex items-center gap-0.5"
        role="img"
        aria-label={`Rated ${rating.toFixed(1)} out of 5`}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            width={size}
            height={size}
            aria-hidden="true"
            className={cn(
              i <= rounded ? "fill-accent text-accent" : "text-border",
            )}
          />
        ))}
      </span>
      {typeof count === "number" ? (
        <span className="text-xs text-muted-foreground">
          {count > 0 ? `${rating.toFixed(1)} (${count})` : "No reviews yet"}
        </span>
      ) : null}
    </span>
  );
}

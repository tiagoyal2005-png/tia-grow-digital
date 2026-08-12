import { cn } from "@/lib/utils";

/** Kota Doria wordmark — text-based, easy to replace with a final logo asset. */
export function Wordmark({
  className,
  subtitle = true,
}: {
  className?: string;
  subtitle?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-serif text-2xl font-light tracking-[0.34em] text-foreground md:text-[1.6rem]">
        Kota Doria
      </span>
      {subtitle ? (
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Handwoven Kota Doria
        </span>
      ) : null}
    </span>
  );
}

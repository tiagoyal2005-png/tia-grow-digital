import { ArrowUpRight, Lock } from "lucide-react";
import type { Resource } from "@/data/site";
import { cn } from "@/lib/utils";

export function ResourceCard({
  resource,
  onAction,
}: {
  resource: Resource;
  onAction?: (resource: Resource) => void;
}) {
  const available = resource.status === "available";

  return (
    <article className="card-premium flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow">{resource.type}</span>
        {!available && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Coming soon
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold">{resource.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => onAction?.(resource)}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3",
            available ? "text-primary" : "text-muted-foreground",
          )}
        >
          {resource.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

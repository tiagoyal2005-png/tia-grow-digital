import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const Icon = service.icon;

  return (
    <article
      id={detailed ? service.slug : undefined}
      className="card-premium group flex h-full flex-col p-6 sm:p-7"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-plum-foreground shadow-soft transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {detailed ? (
        <>
          <ul className="mt-5 space-y-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-2 text-sm text-foreground">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-xl bg-secondary p-3 text-sm text-secondary-foreground">
            <strong className="font-semibold">Best for:</strong> {service.bestFor}
          </p>
        </>
      ) : null}

      <div className="mt-auto pt-6">
        <Link
          to={detailed ? "/book-a-call" : "/services"}
          hash={detailed ? undefined : service.slug}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-3"
        >
          {detailed ? "Discuss this service" : "Learn more"}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { navLinks, services, site } from "@/data/site";
import { Monogram } from "@/components/Monogram";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ivory">
      <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <Monogram />
            <span className="text-lg font-bold tracking-tight">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.statement}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp {site.phoneDisplay}
            </a>
          </div>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/book-a-call"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Newsletter
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Practical SEO, AI and marketing notes. No spam, unsubscribe anytime.
          </p>
          <NewsletterForm className="mt-4" compact />
          <ul className="mt-6 space-y-1.5 text-xs text-muted-foreground">
            {site.socials.map((s) => (
              <li key={s.label}>{s.label}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            {site.role} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}

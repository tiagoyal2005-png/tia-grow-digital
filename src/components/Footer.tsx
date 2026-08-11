import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { site, policies } from "@/data/site";
import { collections } from "@/data/catalog";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-xs text-sm text-muted-foreground">{site.statement}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {site.address}
          </p>
        </div>

        <nav aria-label="Shop" className="text-sm">
          <h2 className="eyebrow">Shop</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/shop" className="link-underline text-muted-foreground hover:text-foreground">
                All sarees
              </Link>
            </li>
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/collections/$slug"
                  params={{ slug: c.slug }}
                  className="link-underline text-muted-foreground hover:text-foreground"
                >
                  {c.name} — {c.subtitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="House" className="text-sm">
          <h2 className="eyebrow">The house</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/heritage" className="link-underline text-muted-foreground hover:text-foreground">
                Our heritage
              </Link>
            </li>
            <li>
              <Link to="/craft" className="link-underline text-muted-foreground hover:text-foreground">
                Craft &amp; process
              </Link>
            </li>
            <li>
              <Link to="/journal" className="link-underline text-muted-foreground hover:text-foreground">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline text-muted-foreground hover:text-foreground">
                Contact &amp; care
              </Link>
            </li>
            <li>
              <Link to="/account" className="link-underline text-muted-foreground hover:text-foreground">
                Account &amp; orders
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Letters from the loom</h2>
          <p className="mt-5 text-sm text-muted-foreground">
            New weaves, artisan notes and collection previews. Sent occasionally.
          </p>
          <form
            className="mt-5 flex border-b border-foreground/25 pb-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setEmail("");
              toast.success("Thank you — you're on the list.");
            }}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="text-xs uppercase tracking-[0.2em] hover:text-primary">
              Join
            </button>
          </form>
          <ul className="mt-7 space-y-2 text-xs text-muted-foreground">
            {site.socials.map((s) => (
              <li key={s.label}>{s.label}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <ul className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <li key={p.title}>
              <h3 className="text-xs uppercase tracking-[0.18em]">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Handwoven in Kota, Rajasthan.</p>
          <p>
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
            <span className="px-2">·</span>
            <a href={`tel:${site.phone}`} className="link-underline">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

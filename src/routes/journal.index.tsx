import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { journalCategories, journalPosts } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The Journal — Heritage, Artisans & Styling | Kota Doria" },
      {
        name: "description",
        content:
          "A journal of Kota Doria heritage, artisan stories, craftsmanship, styling notes, new collections and festive inspiration.",
      },
      { property: "og:title", content: "The Journal — Kota Doria" },
      { property: "og:description", content: "Heritage, artisan stories, craftsmanship and styling from the Kota Doria studio." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState<string>("All");

  const list = useMemo(() => {
    let posts = [...journalPosts];
    if (category !== "All") posts = posts.filter((p) => p.category === category);
    if (term) {
      const needle = term.toLowerCase();
      posts = posts.filter((p) =>
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(needle),
      );
    }
    return posts;
  }, [term, category]);

  const [lead, ...rest] = list;

  return (
    <div className="container-page section-y">
      <Reveal>
        <p className="eyebrow">The journal</p>
        <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
          Fashion, craft and the culture around a loom
        </h1>
      </Reveal>

      <div className="mt-12 flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...journalCategories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 border-b border-border pb-2 lg:w-64">
          <span className="sr-only">Search the journal</span>
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search stories"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-sm text-muted-foreground">No stories match that search yet.</p>
      ) : (
        <>
          {lead ? (
            <Reveal className="mt-16">
              <Link to="/journal/$slug" params={{ slug: lead.slug }} className="hover-zoom grid gap-10 md:grid-cols-2 md:items-center">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={lead.image} alt={lead.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="eyebrow">{lead.category}</p>
                  <h2 className="display mt-4 text-3xl md:text-5xl">{lead.title}</h2>
                  <p className="mt-5 text-sm text-muted-foreground">{lead.excerpt}</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {lead.readingTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-20 grid gap-14 md:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link to="/journal/$slug" params={{ slug: post.slug }} className="hover-zoom block">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{post.category}</p>
                  <h2 className="mt-2 font-serif text-2xl font-light">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

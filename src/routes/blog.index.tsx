import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { blogCategories, blogPosts } from "@/data/site";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { NewsletterForm } from "@/components/NewsletterForm";
import { cn } from "@/lib/utils";

const title = "Blog — SEO, AI & Digital Marketing Insights | Tia Goyal";
const description =
  "Practical articles on SEO for small businesses, how AI is changing marketing, and personal branding for founders — written by freelance digital marketer Tia Goyal.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">Blog</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Notes on <span className="text-gradient">SEO, AI and growing online.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical, opinionated writing for founders and small teams. No
              fluff, no recycled listicles — just what I'd tell a client.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Articles">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="h-11 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm transition-colors focus:border-taupe"
            />
          </div>
          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap gap-2"
          >
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === cat
                    ? "border-transparent bg-gradient-brand text-espresso-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-taupe hover:text-primary",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No articles match that search yet. Try a different keyword or
            category.
          </p>
        )}

        <div className="mt-14 rounded-3xl border border-border bg-ivory p-8 md:p-10">
          <h2 className="text-2xl font-bold">Get new articles by email</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            One practical email a month on SEO, AI and digital marketing.
          </p>
          <div className="mt-5 max-w-xl">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

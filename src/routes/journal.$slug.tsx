import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { journalBySlug, journalPosts, type JournalPost } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }): { post: JournalPost } => {
    const post = journalBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Story not found — Kota Doria" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Kota Doria Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: JournalArticle,
});

function JournalArticle() {
  const { post } = Route.useLoaderData() as { post: JournalPost };
  const more = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <div className="container-page pt-14 md:pt-20">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <Link to="/journal" className="link-underline">
            Journal
          </Link>
          <span className="px-2">/</span>
          <span>{post.category}</span>
        </nav>
        <Reveal className="mt-8 max-w-3xl">
          <h1 className="display text-4xl md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {post.readingTime}
          </p>
        </Reveal>
      </div>

      <div className="hover-zoom mt-12 aspect-[16/9] max-h-[64vh] overflow-hidden bg-muted">
        <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>

      <div className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          {post.body.map((section, i) => (
            <section key={i} className="mt-10 first:mt-0">
              {section.heading ? (
                <h2 className="display mb-4 text-2xl md:text-3xl">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-border">
        <div className="container-page section-y">
          <h2 className="display text-3xl md:text-4xl">More from the journal</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {more.map((item) => (
              <Link key={item.slug} to="/journal/$slug" params={{ slug: item.slug }} className="hover-zoom block">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.category}</p>
                <h3 className="mt-2 font-serif text-xl font-light">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

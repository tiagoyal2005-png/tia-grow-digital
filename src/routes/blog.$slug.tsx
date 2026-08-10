import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { blogPosts, site, type BlogPost } from "@/data/site";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Tia Goyal" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const t = `${post.title} | Tia Goyal`;
    return {
      meta: [
        { title: t },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: t },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Person", name: site.name },
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `/blog/${params.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: Article,
});

function ArticleNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <p className="mt-3 text-muted-foreground">
        That article doesn't exist — it may have been renamed.
      </p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the blog
      </Link>
    </div>
  );
}

function Article() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-gradient-soft">
          <div className="container-page py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {post.title}
                </li>
              </ol>
            </nav>
            <span className="eyebrow mt-6">{post.category}</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.dateDisplay}</time> ·{" "}
              {post.readingTime} · by {site.name}
            </p>
          </div>
        </header>

        <div className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_320px] lg:py-20">
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-foreground">
              {post.excerpt}
            </p>
            {post.body.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl font-bold">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-12 rounded-2xl border border-border bg-lavender p-6">
              <h2 className="text-lg font-bold">Want this done for you?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I help businesses put ideas like these into practice.{" "}
                <Link
                  to="/services"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  See the services
                </Link>{" "}
                or{" "}
                <Link
                  to="/book-a-call"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  book a free discovery call
                </Link>
                .
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Keep reading
            </h2>
            <div className="mt-4 space-y-5">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </aside>
        </div>
      </article>

      <CTASection />
    </>
  );
}

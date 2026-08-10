import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/site";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-premium group flex h-full flex-col p-6">
      <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
        <span className="eyebrow">{post.category}</span>
        <time dateTime={post.date}>{post.dateDisplay}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="transition-colors hover:text-primary"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>
      <div className="mt-auto pt-6">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-3"
        >
          Read article
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

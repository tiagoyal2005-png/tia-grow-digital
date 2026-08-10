import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/data/site";

/**
 * Sitemap. BASE_URL stays empty until the production domain is live —
 * set it to "https://tiagoyal.com" at launch.
 */
const BASE_URL = "";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/blog",
  "/resources",
  "/faq",
  "/contact",
  "/book-a-call",
];

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          ...staticPaths.map((p) => ({ loc: p, lastmod: undefined as string | undefined })),
          ...blogPosts.map((p) => ({
            loc: `/blog/${p.slug}`,
            lastmod: p.date,
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${BASE_URL}${u.loc}</loc>${
        u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""
      }\n  </url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});

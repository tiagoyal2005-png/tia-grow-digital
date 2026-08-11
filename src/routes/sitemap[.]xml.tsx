import { createFileRoute } from "@tanstack/react-router";
import { collections, journalPosts, products } from "@/data/catalog";
import { site } from "@/data/site";

const staticPaths = [
  "/",
  "/shop",
  "/collections",
  "/heritage",
  "/craft",
  "/journal",
  "/contact",
  "/account",
  "/wishlist",
  "/bag",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const base = `https://${site.domain}`;
        const urls = [
          ...staticPaths,
          ...collections.map((c) => `/collections/${c.slug}`),
          ...products.map((p) => `/product/${p.slug}`),
          ...journalPosts.map((p) => `/journal/${p.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});

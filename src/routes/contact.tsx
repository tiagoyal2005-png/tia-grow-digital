import { createFileRoute } from "@tanstack/react-router";
import { site, policies } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Client Care — Kota Doria" },
      {
        name: "description",
        content:
          "Talk to Kota Doria client care about choosing a saree, an existing order, made-to-order bridal pieces, or care and repair.",
      },
      { property: "og:title", content: "Contact & Client Care — Kota Doria" },
      { property: "og:description", content: "Client care for sizing, orders, bridal commissions and saree care." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-page section-y">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Client care</p>
        <h1 className="display mt-4 text-4xl md:text-6xl">We answer every message</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Studio hours are Monday to Saturday, 10am–6pm IST. For quick questions,
          WhatsApp is usually fastest.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={90} className="space-y-8 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div>
            <h2 className="eyebrow">Direct</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="link-underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                  WhatsApp client care
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow">Studio</h2>
            <p className="mt-3 text-sm text-muted-foreground">{site.address}</p>
          </div>
          <div>
            <h2 className="eyebrow">Good to know</h2>
            <ul className="mt-3 space-y-4">
              {policies.map((p) => (
                <li key={p.title}>
                  <h3 className="text-sm">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

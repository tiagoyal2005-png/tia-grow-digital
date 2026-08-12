/** Kota Doria — brand configuration. Single source of truth for contact + nav. */
export const site = {
  name: "Kota Doria",
  tagline: "Handwoven Kota Doria, reimagined",
  statement:
    "Kota Doria is a heritage-led fashion house working with Kota Doria weavers to create handwoven sarees for modern life.",
  domain: "actdf.com",
  email: "care@actdf.com",
  phone: "+916687243567",
  phoneDisplay: "+91 66872 43567",
  whatsappUrl:
    "https://wa.me/916687243567?text=Hello%20Kota Doria%2C%20I%27d%20like%20help%20choosing%20a%20saree.",
  address: "Atelier & Studio — Kota, Rajasthan, India",
  /** Placeholders — replace with real profile URLs when available. */
  socials: [
    { label: "Instagram (link coming soon)", href: "#", placeholder: true },
    { label: "Pinterest (link coming soon)", href: "#", placeholder: true },
    { label: "YouTube (link coming soon)", href: "#", placeholder: true },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "Our Heritage", to: "/heritage" },
  { label: "Craft & Process", to: "/craft" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
] as const;

export const policies = [
  {
    title: "Complimentary shipping",
    body: "Free insured delivery across India. Dispatched within 2 working days from our Kota studio.",
  },
  {
    title: "Easy 7-day returns",
    body: "Unworn pieces with tags intact can be returned within 7 days of delivery.",
  },
  {
    title: "Secure payments",
    body: "UPI, cards, net banking and cash on delivery — processed over an encrypted connection.",
  },
  {
    title: "Woven to order",
    body: "Each saree is handwoven, so slight irregularities are a signature of the loom, not a flaw.",
  },
] as const;

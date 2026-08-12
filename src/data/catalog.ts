import productSuitIvory from "@/assets/product-suit-ivory.jpg";
import productSuitMaroon from "@/assets/product-suit-maroon.jpg";
import productSuitTerracotta from "@/assets/product-suit-terracotta.jpg";
import productMaroon from "@/assets/product-maroon.jpg";
import productIvory from "@/assets/product-ivory.jpg";
import productSand from "@/assets/product-sand.jpg";
import productSage from "@/assets/product-sage.jpg";
import productCharcoal from "@/assets/product-charcoal.jpg";
import productRose from "@/assets/product-rose.jpg";
import craftLoom from "@/assets/craft-loom.jpg";
import craftWeaveDetail from "@/assets/craft-weave-detail.jpg";
import heritageVillage from "@/assets/heritage-village.jpg";
import journalStyling from "@/assets/journal-styling.jpg";
import journalArtisan from "@/assets/journal-artisan.jpg";
import heroSaree from "@/assets/hero-saree.jpg";

export const images = {
  heroSaree,
  suitIvory: productSuitIvory,
  suitMaroon: productSuitMaroon,
  suitTerracotta: productSuitTerracotta,
  craftLoom,
  craftWeaveDetail,
  heritageVillage,
  journalStyling,
  journalArtisan,
};

/* ------------------------------------------------------------------ */
/* Reviews — structures ready for real content. Seeded empty on purpose. */
/* ------------------------------------------------------------------ */

export type Review = {
  id: string;
  productSlug: string;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verifiedPurchase: boolean;
  photos?: string[];
  videoUrl?: string;
  story?: string;
};

/** Real customer reviews are added here as they are collected. */
export const reviews: Review[] = [];

export function reviewsFor(slug: string) {
  return reviews.filter((r) => r.productSlug === slug);
}

/* ------------------------------------------------------------------ */
/* Catalog                                                             */
/* ------------------------------------------------------------------ */

export type ProductType = "Saree" | "Suit";

export type ProductCategory =
  | "Everyday Kota"
  | "Festive"
  | "Bridal & Occasion"
  | "Zari & Gold"
  | "Contemporary";

export type Product = {
  slug: string;
  name: string;
  type: ProductType;
  category: ProductCategory;
  collection: string;
  price: number;
  compareAt?: number;
  colour: string;
  fabric: string;
  weave: string;
  origin: string;
  images: { src: string; alt: string }[];
  shortDescription: string;
  story: string;
  details: string[];
  care: string[];
  variants?: { label: string; options: string[] };
  bestseller?: boolean;
  isNew?: boolean;
};

/** Sample catalogue — realistic and fully editable. Swap for live inventory. */
export const products: Product[] = [
  {
    slug: "aranya-maroon-zari-kota-saree",
    name: "Aranya Deep Maroon Zari Saree",
    type: "Saree",
    category: "Festive",
    collection: "aranya",
    price: 14800,
    colour: "Deep maroon",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven khat with real zari border",
    origin: "Kota, Rajasthan",
    images: [
      { src: productMaroon, alt: "Model wearing a deep maroon Kota Doria saree with a gold zari border" },
      { src: craftWeaveDetail, alt: "Macro detail of the fine khat weave and gold zari thread" },
      { src: craftLoom, alt: "Weaver's hands working the pit loom that produced this saree" },
    ],
    shortDescription:
      "A festive Kota Doria in deep maroon, finished with a hand-inserted antique zari border.",
    story:
      "Woven over eleven days on a pit loom in Kota, the maroon ground is dyed in small batches so the colour carries the depth of natural pigment rather than the flatness of machine dyeing.",
    details: [
      "6.3 m saree with 0.8 m unstitched blouse piece",
      "Real zari border, hand-inserted",
      "Weight approximately 480 g",
      "Handloom mark eligible",
    ],
    care: [
      "Dry clean recommended for the first wash",
      "Hand wash cold thereafter with mild detergent",
      "Dry in shade; steam iron on low with a cotton cloth",
    ],
    variants: { label: "Blouse", options: ["Unstitched piece", "Fabric only"] },
    bestseller: true,
  },
  {
    slug: "kshara-ivory-handwoven-saree",
    name: "Kshara Ivory Handwoven Saree",
    type: "Saree",
    category: "Everyday Kota",
    collection: "kshara",
    price: 8900,
    colour: "Ivory",
    fabric: "Kota Doria pure cotton",
    weave: "Fine khat, tissue-light",
    origin: "Kota, Rajasthan",
    images: [
      { src: productIvory, alt: "Model wearing an ivory handwoven Kota Doria cotton saree" },
      { src: craftWeaveDetail, alt: "Close-up of the translucent ivory Kota Doria weave" },
    ],
    shortDescription:
      "The lightest weave in our studio — an ivory cotton Kota for long, warm days.",
    story:
      "Kota Doria's square khat pattern comes from alternating cotton and silk threads in a precise count. This ivory saree uses pure cotton throughout, which is why it breathes the way it does.",
    details: [
      "6.3 m saree with unstitched blouse piece",
      "Undyed ivory ground",
      "Weight approximately 380 g",
    ],
    care: ["Hand wash cold", "Do not bleach", "Line dry in shade"],
    bestseller: true,
  },
  {
    slug: "reti-sand-check-saree",
    name: "Reti Sand Check Saree",
    type: "Saree",
    category: "Everyday Kota",
    collection: "kshara",
    price: 7600,
    compareAt: 8400,
    colour: "Sand with maroon check",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven check",
    origin: "Kota, Rajasthan",
    images: [
      { src: productSand, alt: "Sand-beige Kota Doria saree with fine maroon checks, draped in studio light" },
      { src: craftLoom, alt: "Pit loom weaving in progress" },
    ],
    shortDescription:
      "Sand ground crossed with the thinnest maroon check — quiet, and easy to repeat.",
    story:
      "The check is drawn thread by thread; no two panels align perfectly, and that small drift is how you know a hand made it.",
    details: ["6.3 m saree with unstitched blouse piece", "Weight approximately 420 g"],
    care: ["Hand wash cold separately", "Dry in shade", "Low iron"],
  },
  {
    slug: "vana-sage-zari-saree",
    name: "Vana Sage Zari Saree",
    type: "Saree",
    category: "Zari & Gold",
    collection: "vana",
    price: 12400,
    colour: "Muted sage",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven with slim zari border",
    origin: "Kota, Rajasthan",
    images: [
      { src: productSage, alt: "Model wearing a muted sage Kota Doria silk saree with a slim gold zari border" },
      { src: craftWeaveDetail, alt: "Detail of zari thread against the sage ground" },
    ],
    shortDescription: "A restrained sage silk Kota with the narrowest possible gold edge.",
    story:
      "Sage is dyed from a base our dyer mixes by eye each season, so the shade shifts a little year to year — deliberately.",
    details: ["6.3 m saree with unstitched blouse piece", "Slim real zari border", "Weight approximately 450 g"],
    care: ["Dry clean only", "Store folded in muslin", "Refold along new lines every few months"],
    variants: { label: "Blouse", options: ["Unstitched piece", "Fabric only"] },
    isNew: true,
  },
  {
    slug: "dhun-charcoal-pallu-saree",
    name: "Dhun Charcoal Pallu Saree",
    type: "Saree",
    category: "Contemporary",
    collection: "dhun",
    price: 10900,
    colour: "Warm charcoal",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven with striped pallu",
    origin: "Kota, Rajasthan",
    images: [
      { src: productCharcoal, alt: "Model wearing a charcoal Kota Doria saree with a cream striped pallu" },
      { src: heritageVillage, alt: "Workshop in Kota where the saree was woven" },
    ],
    shortDescription:
      "Charcoal ground, cream banded pallu — the most modern drape in the studio.",
    story:
      "We asked our weavers to widen the traditional pallu bands until the saree read as graphic rather than ornamental. This is the fourth attempt, and the one we kept.",
    details: ["6.3 m saree with unstitched blouse piece", "Weight approximately 460 g"],
    care: ["Dry clean recommended", "Steam iron on low"],
    bestseller: true,
    isNew: true,
  },
  {
    slug: "gulab-rose-buti-saree",
    name: "Gulab Rose Buti Saree",
    type: "Saree",
    category: "Festive",
    collection: "aranya",
    price: 13600,
    colour: "Blush rose",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven with gold buti motifs",
    origin: "Kota, Rajasthan",
    images: [
      { src: productRose, alt: "Model wearing a blush rose Kota Doria saree with small gold buti motifs" },
      { src: craftWeaveDetail, alt: "Close-up of a woven gold buti motif" },
    ],
    shortDescription: "Blush rose scattered with small gold buti, woven rather than printed.",
    story:
      "Each buti is added by hand at the loom with a separate spool. A single saree carries close to four hundred of them.",
    details: ["6.3 m saree with unstitched blouse piece", "Hand-woven buti motifs", "Weight approximately 470 g"],
    care: ["Dry clean only", "Avoid perfume contact with zari"],
    variants: { label: "Blouse", options: ["Unstitched piece", "Fabric only"] },
    bestseller: true,
  },
  {
    slug: "anant-bridal-maroon-gold-saree",
    name: "Anant Bridal Maroon & Gold Saree",
    type: "Saree",
    category: "Bridal & Occasion",
    collection: "anant",
    price: 24500,
    colour: "Deep maroon with antique gold",
    fabric: "Kota Doria silk",
    weave: "Handwoven, wide zari border and pallu",
    origin: "Kota, Rajasthan",
    images: [
      { src: productMaroon, alt: "Deep maroon and gold bridal Kota Doria saree" },
      { src: journalStyling, alt: "Folded maroon and cream sarees with brass shears" },
      { src: craftLoom, alt: "Weaver at the pit loom" },
    ],
    shortDescription:
      "Our occasion weight — a maroon silk Kota with a wide antique zari pallu.",
    story:
      "Reserved for weddings and long evenings. Roughly six weeks on the loom from warping to finish, worked by a single weaver so the tension never changes hands.",
    details: [
      "6.5 m saree with 0.9 m blouse piece",
      "Wide real zari border and pallu",
      "Made to order — allow 3 to 5 weeks",
    ],
    care: ["Dry clean only", "Store in muslin away from light"],
    variants: { label: "Blouse", options: ["Unstitched piece", "Fabric only"] },
  },
  {
    slug: "sahaj-ivory-gold-edge-saree",
    name: "Sahaj Ivory Gold-Edge Saree",
    type: "Saree",
    category: "Zari & Gold",
    collection: "vana",
    price: 11200,
    colour: "Ivory with gold edge",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven, hairline zari edge",
    origin: "Kota, Rajasthan",
    images: [
      { src: productIvory, alt: "Ivory Kota Doria saree with a hairline gold edge" },
      { src: craftWeaveDetail, alt: "Hairline zari edge detail" },
    ],
    shortDescription: "Ivory, with gold reduced to a single thread at the edge.",
    story:
      "The brief to the loom was simple: as little gold as the border can hold and still catch light.",
    details: ["6.3 m saree with unstitched blouse piece", "Weight approximately 430 g"],
    care: ["Dry clean recommended", "Dry in shade"],
    isNew: true,
  },
  {
    slug: "sharda-ivory-kota-doria-suit",
    name: "Sharda Ivory Kota Doria Suit Set",
    type: "Suit",
    category: "Everyday Kota",
    collection: "kshara",
    price: 9400,
    colour: "Ivory with maroon edge",
    fabric: "Kota Doria pure cotton",
    weave: "Fine khat, hand-finished maroon edge",
    origin: "Kota, Rajasthan",
    images: [
      { src: productSuitIvory, alt: "Woman wearing an ivory handwoven Kota Doria suit set with a thin maroon border" },
      { src: craftWeaveDetail, alt: "Close-up of the translucent ivory Kota Doria weave" },
    ],
    shortDescription:
      "A three-piece ivory Kota Doria suit — kurta, straight pants and a sheer dupatta.",
    story:
      "The same khat that makes a Kota saree breathe, cut instead into an everyday suit. The dupatta is woven on the same warp as the kurta so the two never read as separate cloth.",
    details: [
      "Kurta, straight pants and 2.3 m dupatta",
      "Unlined; cotton lining available on request",
      "Handwoven by artisans of Kota",
    ],
    care: ["Hand wash cold separately", "Dry in shade", "Steam iron on low"],
    variants: { label: "Size", options: ["XS", "S", "M", "L", "XL"] },
    bestseller: true,
  },
  {
    slug: "rajwada-maroon-zari-suit",
    name: "Rajwada Maroon Zari Suit Set",
    type: "Suit",
    category: "Festive",
    collection: "aranya",
    price: 15600,
    colour: "Deep maroon with antique gold",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven with zari border on kurta and dupatta",
    origin: "Kota, Rajasthan",
    images: [
      { src: productSuitMaroon, alt: "Woman wearing a deep maroon Kota Doria suit with an antique gold zari border" },
      { src: craftLoom, alt: "Weaver at the pit loom in Kota" },
    ],
    shortDescription:
      "Festive weight in deep maroon, with a narrow antique zari running through kurta and dupatta.",
    story:
      "Cut for long evenings: the ground is dyed in small batches, and the zari is inserted at the loom rather than stitched on afterwards.",
    details: [
      "Kurta, straight pants and 2.4 m zari dupatta",
      "Real zari border",
      "Made to order — allow 2 to 3 weeks",
    ],
    care: ["Dry clean only", "Store folded in muslin", "Avoid perfume contact with zari"],
    variants: { label: "Size", options: ["XS", "S", "M", "L", "XL"] },
    isNew: true,
  },
  {
    slug: "mitti-terracotta-kota-doria-suit",
    name: "Mitti Terracotta Kota Doria Suit Set",
    type: "Suit",
    category: "Contemporary",
    collection: "dhun",
    price: 11800,
    colour: "Terracotta with sand dupatta",
    fabric: "Kota Doria cotton–silk",
    weave: "Handwoven, fine hand embroidery at the placket",
    origin: "Kota, Rajasthan",
    images: [
      { src: productSuitTerracotta, alt: "Woman wearing a terracotta Kota Doria suit with a warm sand dupatta" },
      { src: heritageVillage, alt: "Workshop in Kota where the fabric was woven" },
    ],
    shortDescription:
      "Terracotta kurta with a warm sand Kota dupatta and quiet tonal embroidery.",
    story:
      "Terracotta is the hardest shade to hold across a batch, so we dye the full run of a season in one lot and stop when it is finished.",
    details: ["Kurta, straight pants and 2.3 m dupatta", "Tonal hand embroidery at the placket"],
    care: ["Dry clean recommended", "Dry in shade", "Low iron"],
    variants: { label: "Size", options: ["XS", "S", "M", "L", "XL"] },
    bestseller: true,
    isNew: true,
  },
];

export const productCategories: ProductCategory[] = [
  "Everyday Kota",
  "Festive",
  "Bridal & Occasion",
  "Zari & Gold",
  "Contemporary",
];

export const priceBands = [
  { label: "Under ₹10,000", min: 0, max: 9999 },
  { label: "₹10,000 – ₹15,000", min: 10000, max: 15000 },
  { label: "Above ₹15,000", min: 15001, max: Infinity },
] as const;

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];

export const sarees = products.filter((p) => p.type === "Saree");
export const suits = products.filter((p) => p.type === "Suit");

/** Shop-level browse tabs. */
export const shopFilters = [
  { value: "all", label: "All" },
  { value: "sarees", label: "Sarees" },
  { value: "suits", label: "Suits" },
  { value: "new", label: "New arrivals" },
  { value: "bestsellers", label: "Bestsellers" },
  { value: "festive", label: "Festive collection" },
] as const;

export type ShopFilter = (typeof shopFilters)[number]["value"];

export function filterProducts(list: Product[], filter: ShopFilter) {
  switch (filter) {
    case "sarees":
      return list.filter((p) => p.type === "Saree");
    case "suits":
      return list.filter((p) => p.type === "Suit");
    case "new":
      return list.filter((p) => p.isNew);
    case "bestsellers":
      return list.filter((p) => p.bestseller);
    case "festive":
      return list.filter((p) => p.category === "Festive" || p.category === "Bridal & Occasion");
    default:
      return list;
  }
}

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string, limit = 3) {
  const current = productBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const score = (p: Product) =>
        (p.collection === current.collection ? 2 : 0) +
        (p.category === current.category ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Collections                                                         */
/* ------------------------------------------------------------------ */

export type Collection = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const collections: Collection[] = [
  {
    slug: "aranya",
    name: "Aranya",
    subtitle: "Festive weaves",
    description:
      "Deep, saturated grounds and hand-inserted zari, made for evenings that matter. Aranya is our festive line, kept deliberately small.",
    image: productMaroon,
    imageAlt: "Deep maroon festive Kota Doria saree from the Aranya collection",
  },
  {
    slug: "kshara",
    name: "Kshara",
    subtitle: "Everyday Kota",
    description:
      "Pure cotton Kota Doria in undyed and softly dyed grounds. The lightest weaves we make, intended to be worn often.",
    image: productIvory,
    imageAlt: "Ivory everyday cotton saree from the Kshara collection",
  },
  {
    slug: "vana",
    name: "Vana",
    subtitle: "Zari, restrained",
    description:
      "Gold used sparingly — a hairline edge, a slim border. Vana explores how little zari a saree needs to feel like an occasion.",
    image: productSage,
    imageAlt: "Sage saree with slim gold border from the Vana collection",
  },
  {
    slug: "dhun",
    name: "Dhun",
    subtitle: "Contemporary drapes",
    description:
      "A modern reinterpretation of the Kota pallu — wider bands, graphic proportion, muted ground.",
    image: productCharcoal,
    imageAlt: "Charcoal contemporary saree from the Dhun collection",
  },
  {
    slug: "anant",
    name: "Anant",
    subtitle: "Bridal & occasion",
    description:
      "Made to order, woven by a single hand from warp to finish. Our heaviest and slowest pieces.",
    image: journalStyling,
    imageAlt: "Folded bridal sarees from the Anant collection",
  },
];

export function collectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function productsInCollection(slug: string) {
  return products.filter((p) => p.collection === slug);
}

/* ------------------------------------------------------------------ */
/* Journal                                                             */
/* ------------------------------------------------------------------ */

export const journalCategories = [
  "Kota Doria Heritage",
  "Artisan Stories",
  "Craftsmanship",
  "Styling",
  "New Collections",
  "Festive Inspiration",
] as const;

export type JournalCategory = (typeof journalCategories)[number];

export type JournalPost = {
  slug: string;
  title: string;
  category: JournalCategory;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "what-makes-a-kota-doria-saree",
    title: "What actually makes a saree Kota Doria",
    category: "Kota Doria Heritage",
    excerpt:
      "The square khat, the thread count, the town of Kota — and why so much of what is sold as Kota Doria is not.",
    date: "2026-05-12",
    readingTime: "6 min read",
    image: craftWeaveDetail,
    imageAlt: "Macro photograph of the square khat weave of Kota Doria fabric",
    body: [
      {
        paragraphs: [
          "Kota Doria is defined by its khat — the small square formed by alternating cotton and silk threads in a fixed ratio. Traditionally, a single khat is made of fourteen threads: eight cotton and six silk. Change the ratio and the fabric loses the translucency that made it travel.",
          "The weave belongs to Kota, a town on the edge of Kota in Rajasthan, where the craft was brought from the south several centuries ago and stayed.",
        ],
      },
      {
        heading: "How to tell a handloom from a power loom",
        paragraphs: [
          "Hold the fabric to light. A handwoven khat is never perfectly uniform; the squares drift a fraction across the width. Power-loom copies are exact, and that exactness is the tell.",
          "The second test is weight. A genuine Kota Doria saree rarely exceeds five hundred grams.",
        ],
      },
    ],
  },
  {
    slug: "eleven-days-at-the-loom",
    title: "Eleven days at the loom",
    category: "Craftsmanship",
    excerpt:
      "A single festive saree, from warping the yarn to cutting it free. What each stage actually takes.",
    date: "2026-04-28",
    readingTime: "8 min read",
    image: craftLoom,
    imageAlt: "Weaver's hands working fine thread on a wooden pit loom",
    body: [
      {
        paragraphs: [
          "Warping takes a day and a half and happens outdoors, because the length of a warp needs more room than any workshop has. The yarn is stretched between pegs down a lane, sized with rice starch, and left to dry.",
          "Only then does the loom come into it.",
        ],
      },
      {
        heading: "The part nobody photographs",
        paragraphs: [
          "Drawing each thread through the reed takes two people the better part of two days and produces nothing visible. It is the stage that decides whether the saree will be good.",
        ],
      },
    ],
  },
  {
    slug: "meet-the-artisans-of-kota",
    title: "Meet the weavers of Kota",
    category: "Artisan Stories",
    excerpt:
      "The families we work with, what they are paid, and why the number of active looms keeps falling.",
    date: "2026-04-02",
    readingTime: "7 min read",
    image: journalArtisan,
    imageAlt: "Portrait of a master weaver seated beside his loom",
    body: [
      {
        paragraphs: [
          "We buy directly from weaving households rather than through a trader, and we publish our per-saree rate to the households we work with so it can be checked against the market.",
          "The reason matters: the craft is not endangered by lack of demand. It is endangered by a young generation reasonably deciding that the returns do not justify the years of training.",
        ],
      },
    ],
  },
  {
    slug: "five-ways-to-drape-a-kota",
    title: "Five ways to drape a Kota, none of them fussy",
    category: "Styling",
    excerpt:
      "The fabric is light enough to hold a pleat without pinning. Here is how we wear it.",
    date: "2026-03-18",
    readingTime: "5 min read",
    image: journalStyling,
    imageAlt: "Folded handwoven sarees stacked beside brass shears and thread",
    body: [
      {
        paragraphs: [
          "Kota Doria falls rather than drapes. It rewards fewer pleats, a longer pallu, and a belt only if you want the waist defined.",
          "For daily wear, we skip the pins entirely and tuck deeper.",
        ],
      },
    ],
  },
  {
    slug: "introducing-dhun",
    title: "Introducing Dhun — the pallu, widened",
    category: "New Collections",
    excerpt:
      "Our contemporary line began as an argument about how wide a traditional band could get before it stopped being traditional.",
    date: "2026-03-01",
    readingTime: "4 min read",
    image: productCharcoal,
    imageAlt: "Charcoal saree with wide cream pallu bands from the Dhun collection",
    body: [
      {
        paragraphs: [
          "Dhun is four sarees. It took nine samples to get there, and the first five were too clever.",
          "What remains is a charcoal ground, a cream banded pallu, and nothing else.",
        ],
      },
    ],
  },
  {
    slug: "dressing-for-the-festive-season",
    title: "Dressing for the festive season, lightly",
    category: "Festive Inspiration",
    excerpt:
      "Heavy is not the same as festive. A case for handloom during the months everyone reaches for silk.",
    date: "2026-02-10",
    readingTime: "5 min read",
    image: productRose,
    imageAlt: "Blush rose festive saree with small gold motifs",
    body: [
      {
        paragraphs: [
          "There is an assumption that occasion wear must be weighty. Kota Doria disagrees — the zari does the work, and the fabric stays under half a kilo.",
        ],
      },
    ],
  },
];

export function journalBySlug(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Craft journey                                                       */
/* ------------------------------------------------------------------ */

export const craftJourney = [
  {
    step: "Thread",
    title: "Cotton and mulberry silk, counted",
    body: "Yarn is sourced in small lots, degummed and sized with rice starch before it ever reaches a loom.",
    image: craftWeaveDetail,
    imageAlt: "Fine cotton and silk thread in the Kota Doria weave",
  },
  {
    step: "Weave",
    title: "The khat, square by square",
    body: "Eight cotton and six silk threads make one khat. A weaver holds that count across six metres.",
    image: craftLoom,
    imageAlt: "Weaver's hands at a wooden pit loom",
  },
  {
    step: "Craft",
    title: "Zari and buti, inserted by hand",
    body: "Borders and motifs are added at the loom with separate spools — never printed, never applied later.",
    image: heritageVillage,
    imageAlt: "Looms and dyed thread hanging in a Kota workshop",
  },
  {
    step: "Finish",
    title: "Washed, checked, folded",
    body: "Each saree is washed, inspected against light, and folded in muslin at our Kota studio.",
    image: journalStyling,
    imageAlt: "Finished sarees folded and stacked",
  },
  {
    step: "You",
    title: "Sent, and worn",
    body: "Shipped insured with the weaver's name on the card inside the box.",
    image: heroSaree,
    imageAlt: "Woman wearing a cream Kota Doria saree in a sunlit courtyard",
  },
] as const;

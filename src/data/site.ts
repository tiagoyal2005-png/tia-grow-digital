import type { LucideIcon } from "lucide-react";
import {
  Search,
  Code2,
  Share2,
  Bot,
  Linkedin,
  Target,
  Mail,
} from "lucide-react";

/** Central site configuration — single source of truth for contact + brand. */
export const site = {
  name: "Tia Goyal",
  role: "Freelance Digital Marketer, SEO Specialist & Personal Brand",
  statement: "Helping Businesses Grow with SEO, AI & Digital Marketing.",
  domain: "tiagoyal.com",
  email: "tiagoyal@gmail.com",
  phone: "+916687243567",
  phoneDisplay: "+91 66872 43567",
  whatsappUrl:
    "https://wa.me/916687243567?text=Hi%20Tia%2C%20I%27d%20like%20to%20talk%20about%20growing%20my%20business%20online.",
  /** Replace with the real Calendly URL when the account is ready. */
  calendlyUrl: "https://calendly.com/your-calendly-handle/discovery-call",
  calendlyIsPlaceholder: true,
  /** Placeholders — swap in the real profile URLs when available. */
  socials: [
    { label: "LinkedIn (link coming soon)", href: "#", placeholder: true },
    { label: "Instagram (link coming soon)", href: "#", placeholder: true },
    { label: "X / Twitter (link coming soon)", href: "#", placeholder: true },
  ],
  locale: {
    default: "en",
    supported: ["en"] as const,
    planned: ["hi"] as const,
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "SEO",
    tagline: "Be found by people already searching for you",
    description:
      "Technical, on-page and content SEO built around real search intent — so your website earns qualified traffic instead of random clicks.",
    icon: Search,
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and search-intent mapping",
      "On-page optimisation and internal linking",
      "Content briefs built for ranking",
      "Search Console and analytics setup",
    ],
    bestFor: "Businesses that want compounding, long-term organic growth.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Fast, clean websites that convert",
    description:
      "Conversion-focused websites and landing pages that load fast, read clearly on mobile, and guide visitors towards one obvious next step.",
    icon: Code2,
    deliverables: [
      "Mobile-first responsive design",
      "Landing pages built for conversion",
      "Core Web Vitals and speed optimisation",
      "SEO-ready structure and metadata",
      "Forms, tracking and CTA wiring",
    ],
    bestFor: "Founders who need a credible, high-performing web presence.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Consistent presence, on-brand and on-purpose",
    description:
      "Content strategy, calendars and creative direction that keep your brand visible and recognisable without burning your week on posting.",
    icon: Share2,
    deliverables: [
      "Content strategy and pillars",
      "Monthly content calendars",
      "Creative direction in Canva",
      "Copywriting for posts and captions",
      "Performance review and iteration",
    ],
    bestFor: "Brands that post inconsistently and want a repeatable system.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Let AI handle the repetitive work",
    description:
      "Practical AI workflows for content production, outreach, reporting and lead follow-up — designed to save hours, not to add complexity.",
    icon: Bot,
    deliverables: [
      "AI content and research workflows",
      "Automated lead follow-up sequences",
      "Prompt libraries for your brand voice",
      "Reporting and summarisation automations",
      "Team documentation and handover",
    ],
    bestFor: "Small teams doing manual work that should be automated.",
  },
  {
    slug: "linkedin-personal-branding",
    title: "LinkedIn Personal Branding",
    tagline: "Turn your profile into a pipeline",
    description:
      "Positioning, profile optimisation and a content engine that makes founders and consultants the obvious choice in their niche.",
    icon: Linkedin,
    deliverables: [
      "Positioning and messaging clarity",
      "Full profile optimisation",
      "Content pillars and post frameworks",
      "Ghost-written post drafts",
      "Engagement and outreach routine",
    ],
    bestFor: "Founders, coaches and consultants selling through trust.",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    tagline: "A steady flow of qualified conversations",
    description:
      "Targeted prospecting with Apollo, clear offers and outreach sequences that start real conversations with people who can actually buy.",
    icon: Target,
    deliverables: [
      "Ideal customer profile definition",
      "Prospect list building in Apollo",
      "Multi-touch outreach sequences",
      "Offer and messaging testing",
      "Pipeline tracking setup",
    ],
    bestFor: "B2B and service businesses that need predictable pipeline.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    tagline: "Own the audience you worked hard to earn",
    description:
      "Newsletters, nurture flows and automations in Brevo that turn one-time visitors into subscribers, and subscribers into clients.",
    icon: Mail,
    deliverables: [
      "Brevo setup and list hygiene",
      "Welcome and nurture automations",
      "Newsletter strategy and templates",
      "Lead magnet delivery flows",
      "Open, click and conversion reporting",
    ],
    bestFor: "Businesses sitting on a list they never email properly.",
  },
];

export const valueProps = [
  {
    title: "Strategy before tactics",
    body: "Every engagement starts with your goals, buyers and numbers — not a generic checklist of deliverables.",
  },
  {
    title: "Search + AI, together",
    body: "SEO fundamentals paired with practical AI workflows, so output goes up without quality going down.",
  },
  {
    title: "Direct, senior communication",
    body: "You work with me directly. No account managers, no handovers, no guessing what happened this week.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Freelance focus, agency thinking",
    body: "Small, senior and hands-on — with the structure, documentation and reporting you'd expect from an agency.",
  },
  {
    title: "Built for measurable outcomes",
    body: "Traffic that converts, leads that qualify, emails that get replies. We agree on the metric before we start.",
  },
  {
    title: "Clear scope and honest timelines",
    body: "You'll know what's being delivered, when, and what it costs — before any work begins.",
  },
  {
    title: "Tools you already trust",
    body: "Brevo for email, Apollo for prospecting, Canva for creative — set up properly and handed over to your team.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    body: "A free 30-minute conversation about your business, your audience and what growth actually needs to look like.",
  },
  {
    step: "02",
    title: "Audit & Research",
    body: "I review your website, search visibility, competitors and current funnel to find the real bottleneck.",
  },
  {
    step: "03",
    title: "Strategy & Roadmap",
    body: "You get a prioritised plan: what we do first, why it matters, and how we'll measure it.",
  },
  {
    step: "04",
    title: "Execution",
    body: "SEO, website, content, automation and outreach get built and shipped in focused sprints.",
  },
  {
    step: "05",
    title: "Measure & Scale",
    body: "We review performance, keep what works, cut what doesn't, and scale the channels that produce leads.",
  },
];

export const experience = [
  {
    org: "360tf",
    role: "Digital Sales & Marketing",
    period: "Professional experience",
    body: "Worked across digital sales and marketing — outreach, lead qualification, campaign support and the day-to-day work of turning digital activity into commercial conversations.",
  },
  {
    org: "Briwon Academy",
    role: "Internship & Marketing Experience",
    period: "Internship experience",
    body: "Hands-on marketing experience covering content, social media and campaign execution, building the practical foundation for the freelance work I do today.",
  },
];

export const tools = [
  {
    name: "Brevo",
    use: "Email marketing, automations and newsletter delivery",
  },
  { name: "Apollo", use: "Prospecting, list building and B2B outreach" },
  { name: "Canva", use: "Brand creative, social assets and presentations" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  dateDisplay: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-tips-for-small-businesses",
    title: "SEO Tips for Small Businesses",
    excerpt:
      "A practical, no-jargon starting point for small businesses that want to show up in search without hiring a full agency.",
    category: "SEO",
    readingTime: "6 min read",
    date: "2026-07-14",
    dateDisplay: "14 July 2026",
    body: [
      {
        heading: "Start with intent, not keyword volume",
        paragraphs: [
          "The most common small-business SEO mistake is chasing high-volume keywords that never convert. A term with 200 monthly searches from people ready to buy is worth far more than 20,000 searches from people who are only browsing.",
          "List the exact phrases a customer would type the moment they realise they have a problem you solve. Those phrases become the backbone of your site structure.",
        ],
      },
      {
        heading: "Give every service its own page",
        paragraphs: [
          "One page listing eight services rarely ranks for any of them. Each core service deserves its own page with a clear H1, a specific description, the outcomes a client can expect, and one obvious call to action.",
          "This also makes internal linking natural: your blog posts can point to the exact service page that matches the topic.",
        ],
      },
      {
        heading: "Fix the technical basics once",
        paragraphs: [
          "Fast loading, a mobile-first layout, descriptive title tags, unique meta descriptions, clean URLs, image alt text and a working sitemap. None of this is glamorous, and all of it compounds.",
          "Connect Google Search Console early. It is free, and it tells you which queries you already rank for — usually the fastest route to more traffic.",
        ],
      },
      {
        heading: "Publish fewer, better pages",
        paragraphs: [
          "Ten genuinely useful pages beat fifty thin ones. Write for the person searching, answer the question fully, and update the page when things change.",
          "Consistency wins. A monthly cadence you can maintain for a year outperforms a burst of twenty posts followed by silence.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-is-changing-marketing",
    title: "How AI Is Changing Marketing",
    excerpt:
      "Where AI genuinely helps marketers today, where it quietly hurts, and how to build workflows that keep your brand voice intact.",
    category: "AI & Automation",
    readingTime: "7 min read",
    date: "2026-07-28",
    dateDisplay: "28 July 2026",
    body: [
      {
        heading: "AI is a speed multiplier, not a strategist",
        paragraphs: [
          "AI is exceptional at drafting, summarising, restructuring and researching. It is poor at knowing what your customers care about, what your positioning should be, and which trade-offs are worth making.",
          "The teams getting real value treat AI as leverage on top of a clear strategy, not as a replacement for having one.",
        ],
      },
      {
        heading: "Where it pays off fastest",
        paragraphs: [
          "Repurposing long-form content into social posts and email. Turning research notes into structured briefs. Drafting personalised outreach at scale. Summarising analytics into plain-language updates.",
          "Each of these is a repetitive task with a clear input and output — exactly the shape of work AI handles well.",
        ],
      },
      {
        heading: "Protect your voice",
        paragraphs: [
          "Generic AI output is easy to spot and easy to ignore. Build a prompt library that encodes your tone, your examples and your point of view, then edit every draft as a human before it ships.",
          "Search engines and readers both reward genuine expertise. AI should help you publish your thinking faster, not publish thinking that isn't yours.",
        ],
      },
      {
        heading: "Measure the time you get back",
        paragraphs: [
          "The clearest ROI from AI automation is hours returned to the team. Track how long a task took before, and after. If it hasn't moved, the workflow needs rethinking rather than a better prompt.",
        ],
      },
    ],
  },
  {
    slug: "personal-branding-for-founders",
    title: "Personal Branding for Founders",
    excerpt:
      "Why founder-led content outperforms company pages, and a simple LinkedIn system you can run in a few hours a month.",
    category: "Personal Branding",
    readingTime: "6 min read",
    date: "2026-08-04",
    dateDisplay: "4 August 2026",
    body: [
      {
        heading: "People buy from people",
        paragraphs: [
          "Company pages broadcast. Founders converse. That difference is why founder-led content consistently earns more reach, more replies and more inbound conversations than a brand account posting the same thing.",
          "Your personal brand is not vanity — it is distribution you own.",
        ],
      },
      {
        heading: "Pick three pillars and stay there",
        paragraphs: [
          "Choose three themes you can talk about credibly for a year: usually your craft, your industry's problems, and the lessons from building your business.",
          "Rotating through three pillars makes you recognisable. Posting about everything makes you forgettable.",
        ],
      },
      {
        heading: "Fix the profile before the posting",
        paragraphs: [
          "A clear headline that says who you help and how, a banner that reinforces it, an about section written for your buyer, and a featured section pointing to your best work or an easy next step.",
          "Traffic from great content lands on your profile. If the profile is vague, that attention leaks away.",
        ],
      },
      {
        heading: "Make replying part of the routine",
        paragraphs: [
          "Thirty minutes of thoughtful comments on other people's posts often produces more qualified conversations than another post of your own.",
          "Consistency plus genuine engagement is the whole system. Everything else is optimisation.",
        ],
      },
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export type Resource = {
  title: string;
  description: string;
  type: string;
  status: "available" | "coming-soon";
  cta: string;
};

export const resources: Resource[] = [
  {
    title: "Free SEO Checklist",
    description:
      "A 25-point checklist covering technical setup, on-page fundamentals, content and tracking — the exact list I run on every new website.",
    type: "Checklist (PDF)",
    status: "available",
    cta: "Get the checklist",
  },
  {
    title: "AI Prompt Pack for Marketers",
    description:
      "Reusable prompts for content repurposing, outreach personalisation and reporting summaries, written to preserve your brand voice.",
    type: "Prompt library",
    status: "coming-soon",
    cta: "Join the waitlist",
  },
  {
    title: "LinkedIn Profile Audit Template",
    description:
      "A self-audit worksheet to score your headline, about section, featured links and content pillars against what buyers actually look for.",
    type: "Template",
    status: "coming-soon",
    cta: "Join the waitlist",
  },
  {
    title: "Lead Generation Starter Kit",
    description:
      "ICP worksheet, outreach sequence framework and a simple pipeline tracker for founders doing their own prospecting.",
    type: "Toolkit",
    status: "coming-soon",
    cta: "Join the waitlist",
  },
];

export const faqs = [
  {
    q: "What exactly do you do?",
    a: "I work as a freelance digital marketer specialising in SEO, website development, social media, AI automation, LinkedIn personal branding, lead generation and email marketing. Most clients start with one focus area and expand from there.",
  },
  {
    q: "Who do you usually work with?",
    a: "Startup founders, small businesses, entrepreneurs, coaches and consultants, personal brands, e-commerce and B2B/SaaS teams, local businesses, agencies looking for extra capacity, and independent professionals.",
  },
  {
    q: "How do we start working together?",
    a: "Book a free discovery call. We'll talk through your goals and current setup, and if I'm a good fit I'll follow up with a scope, timeline and price. If I'm not the right fit, I'll tell you that too.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on scope, timeline and whether you need a one-off project or ongoing support. I quote per engagement after the discovery call so you're never paying for deliverables you don't need.",
  },
  {
    q: "Do you offer one-off projects or retainers?",
    a: "Both. Projects suit clearly bounded work such as a website build or an SEO audit. Retainers suit ongoing SEO, content, email and lead generation where results compound month over month.",
  },
  {
    q: "How long before I see results from SEO?",
    a: "Technical and on-page improvements can show up in weeks. Meaningful ranking and traffic growth generally takes three to six months of consistent work, depending on your market and starting point.",
  },
  {
    q: "Can you work with my existing team or agency?",
    a: "Yes. I regularly work alongside in-house teams and other partners, either owning a specific channel or providing strategy and documentation your team executes.",
  },
  {
    q: "Where are you based and which time zones do you cover?",
    a: "I work remotely with clients across time zones. Calls are scheduled at a time that works for you, and communication happens over email, WhatsApp or your preferred tool.",
  },
];

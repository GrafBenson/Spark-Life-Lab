// Central, hand-edited site data for SparkLifeLab.
// Long-form page copy lives in the page files themselves; this file holds only
// the small structural data that's repeated across pages (nav, footer, founders).

export const brand = {
  name: "SparkLifeLab",
  tagline: "Ignite Your Best Life — On Purpose",
  domain: "spark-life-lab.com",
  // Used as Next.js metadataBase. Keep in sync with the production domain.
  siteUrl: "https://spark-life-lab.com",
  email: "hello@spark-life-lab.com",
  substackUrl: "https://sparklifelab.substack.com/",
  // Short SEO description used as the default <meta name="description"> on the home page.
  description:
    "A calm, guided space for the midlife threshold. Take the free Midlife Clarity Check and find your next honest step.",
} as const;

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

/**
 * Primary navigation — homepage anchor links only.
 * Header component prefixes "/" when rendering from a subpage (e.g. "/#clarity-check").
 * Resources + Contact are deferred from launch nav per V10.
 */
export const primaryNav: NavLink[] = [
  { href: "#clarity-check", label: "Clarity Check" },
  { href: "#identity-lab", label: "Identity Lab" },
  { href: "#about", label: "Our Story" },
];

export const primaryCta = {
  href: "/clarity-check",
  label: "Get the Midlife Clarity Check →",
} as const;

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { href: "/clarity-check", label: "The Clarity Check" },
      { href: "/identity-lab", label: "Identity Lab" },
      { href: "/about", label: "Our Story" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Read",
    links: [
      { href: "/resources", label: "Resources" },
      {
        href: "https://sparklifelab.substack.com/",
        label: "Essays on Substack ↗",
        external: true,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/impressum", label: "Impressum" },
    ],
  },
];

export type Founder = {
  initials: string;
  name: string;
  role: string;
  /** Filename within /public/images/ — e.g. "founder_barbel.png" */
  file: string;
  /** One-line bio shown on founder cards */
  bio: string;
  /** Full LinkedIn profile URL */
  linkedin: string;
};

export const founders: Founder[] = [
  {
    initials: "BT",
    name: "Bärbel Tress",
    role: "Co-founder",
    file: "founder_barbel.png",
    bio: "A scientist and maven who spent decades guiding researchers forward — and found her own path forward when she discovered her genius and purpose in midlife.",
    linkedin: "https://www.linkedin.com/in/baerbeltress",
  },
  {
    initials: "GT",
    name: "Gunther Tress",
    role: "Co-founder",
    file: "founder_gunther.png",
    bio: "A communicator, scientist, and storyteller who built a career making complex ideas come alive — and brings that same clarity, warmth, and lightness to midlife transformation.",
    linkedin: "https://www.linkedin.com/in/gunthertress",
  },
  {
    initials: "SB",
    name: "Scott E. Burton",
    role: "Co-founder",
    file: "founder_scott.png",
    bio: "A strategist and guide with decades in leadership and transformation who found that the most important journey was the one inward.",
    linkedin: "https://www.linkedin.com/in/scotteburton",
  },
];

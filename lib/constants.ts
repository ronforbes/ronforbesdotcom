export const SITE_NAME = "Ron Forbes";
export const SITE_DESCRIPTION =
  "Personal website and blog by Ron Forbes covering career, AI, health, VR, personal finance, and happiness.";
export const SITE_URL = "https://ronforbes.com";

export const BLOG_CATEGORIES = [
  { slug: "career", name: "Career", description: "Career development and professional growth" },
  { slug: "ai", name: "AI", description: "Artificial intelligence, formerly Notion" },
  { slug: "health", name: "Health", description: "Health and wellness topics" },
  { slug: "vr", name: "VR", description: "Virtual reality and immersive technology" },
  { slug: "personal-finance", name: "Personal Finance", description: "Money management and financial planning" },
  { slug: "happiness", name: "Happiness", description: "Life satisfaction and well-being" },
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]["slug"];

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/tech", label: "Tech" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
] as const;

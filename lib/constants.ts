export const SITE_NAME = "Ron Forbes";
export const SITE_DESCRIPTION =
  "Personal website and blog by Ron Forbes covering career, AI, health, VR, personal finance, and happiness.";
export const SITE_URL = "https://ronforbes.com";

export const BLOG_CATEGORIES = [
  { slug: "career", name: "Career", description: "Career development and professional growth" },
  { slug: "ai", name: "AI", description: "AI tools and workflows for getting things done" },
  { slug: "productivity", name: "Productivity", description: "Tips and tools for getting things done efficiently" },
  { slug: "health", name: "Health", description: "Health and wellness topics" },
  { slug: "vr", name: "Spatial Computing", description: "Productivity and workflows on Meta Quest" },
  { slug: "personal-finance", name: "Personal Finance", description: "Money management and financial planning" },
  { slug: "happiness", name: "Happiness", description: "Life satisfaction and well-being" },
  { slug: "pkm", name: "Personal Knowledge Management", description: "Systems for organizing knowledge and notes" },
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]["slug"];

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/videos", label: "Videos" },
  { href: "/tech", label: "Tools" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
] as const;

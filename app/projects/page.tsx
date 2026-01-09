import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Building in Public | Ron Forbes Projects",
  description: "Follow along as Ron Forbes builds Block Party (AI-powered puzzle game), RonOS (Obsidian + Claude Code PKM), and more. Documenting the entire journey with vibe coding.",
};

type ProjectStatus = "in-development" | "active" | "live" | "archived";

interface Project {
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  statusEmoji: string;
  description: string;
  techStack: string[];
  motivation: string;
  buildLinks?: { title: string; url: string; description?: string }[];
  links?: { label: string; emoji: string; url: string; external?: boolean }[];
  year?: string;
  impact?: string;
  lesson?: string;
}

const activeProjects: Project[] = [
  {
    title: "Block Party",
    status: "in-development",
    statusLabel: "In Development",
    statusEmoji: "🚧",
    description: "A browser-based puzzle game built entirely using AI-assisted development (Claude Code, Cursor, and lots of vibe coding).",
    techStack: ["Next.js", "TypeScript", "React", "Canvas API"],
    motivation: "To prove that a PM can ship a real game without being a professional game developer. Every line of code is documented as a case study in AI-assisted development.",
    buildLinks: [
      { title: "The Degenerate's Guide to Vibe Coding", url: "/blog/the-degenerates-guide-to-vibe-coding", description: "How I use AI to code" },
    ],
    links: [
      { label: "Play Demo", emoji: "🎮", url: "https://blockparty.ronforbes.com/", external: true },
      { label: "Read Build Log", emoji: "📝", url: "#" },
    ],
  },
  {
    title: "RonOS",
    status: "active",
    statusLabel: "Active & Evolving",
    statusEmoji: "✅",
    description: "My personal knowledge base in Obsidian, connected to Claude Code for AI-powered reflection and life coaching. 2,000+ notes and growing.",
    techStack: ["Obsidian", "Claude Code", "Markdown", "Dataview plugin"],
    motivation: "To turn years of scattered notes into a searchable, AI-augmented second brain. Claude Code acts as my life coach, synthesizing insights from my journal entries.",
    buildLinks: [
      { title: "Claude Code as Life Coach", url: "/blog/claude-code-as-life-coach", description: "How I use AI for personal growth" },
    ],
    links: [
      { label: "Download Starter Template", emoji: "📦", url: "#", external: true },
      { label: "Read Setup Guide", emoji: "📝", url: "/blog/claude-code-as-life-coach" },
    ],
  },
  {
    title: "RonForbes.com",
    status: "live",
    statusLabel: "Live & Iterating",
    statusEmoji: "✅",
    description: "This website! Migrated from Notion + Super.so to Next.js + Markdown to have full control over my content and performance.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    motivation: "Wanted faster page loads, better SEO, and ownership of my content. Plus, it's another excuse to vibe code with Claude.",
    buildLinks: [
      { title: "Building Your Personal Website with Notion: A Guide", url: "/blog/building-your-personal-website-with-notion-a-guide", description: "The original Notion approach" },
    ],
    links: [
      { label: "You're here!", emoji: "🌐", url: "/" },
      { label: "GitHub", emoji: "💻", url: "https://github.com/ronforbes/ronforbesdotcom", external: true },
    ],
  },
];

const pastProjects: Project[] = [
  {
    title: "Blitz of Blocks",
    status: "archived",
    statusLabel: "Archived",
    statusEmoji: "📦",
    year: "2019",
    description: "A multiplayer puzzle game I built during my indie game studio days (Block Party, the company). Launched on web, iOS, and Android.",
    techStack: ["Unity", "C#", "Firebase"],
    motivation: "",
    impact: "10,000 users in the first month. Learned a ton about game design, user acquisition, and the reality of indie game development.",
    lesson: "Building games is hard. Building games people love is harder. Building games that make money is the hardest.",
    buildLinks: [
      { title: "Blitz of Blocks Post-Launch Results", url: "/blog/blitz-of-blocks-post-launch-results" },
      { title: "The Road to an MVP and Beyond", url: "/blog/the-road-to-an-mvp-and-beyond" },
    ],
  },
  {
    title: "Vector Arena",
    status: "archived",
    statusLabel: "Archived",
    statusEmoji: "📦",
    year: "2012-2014",
    description: "A fast-paced action game built during my first indie studio (Omega Entertainment). Published on Windows and Windows Phone.",
    techStack: ["C#", "XNA Framework"],
    motivation: "",
    impact: "Early experiment in game development. Taught me the fundamentals of shipping software as a solo founder.",
    lesson: "Ship early, ship often. Even if it's not perfect.",
  },
];

const ideas = [
  { title: "AI-Powered Tutorial Generator", description: "Tool that turns blog posts into interactive tutorials" },
  { title: "Quest Productivity Dashboard", description: "Real-time stats on my VR usage and productivity patterns" },
  { title: "Vibe Coding IDE Plugin", description: "Claude Code shortcuts for common PM-to-code workflows" },
  { title: "Personal CRM in Obsidian", description: "Relationship management system in my PKM" },
];

function StatusBadge({ emoji, label }: { emoji: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
      <span>{emoji}</span>
      <span>{label}</span>
    </span>
  );
}

function TechStackTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, isPast = false }: { project: Project; isPast?: boolean }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <StatusBadge emoji={project.statusEmoji} label={project.statusLabel} />
        </div>
        {project.year && (
          <p className="text-sm text-muted-foreground">Year: {project.year}</p>
        )}
        <CardDescription className="text-base mt-2">
          {isPast ? <strong>What it was: </strong> : <strong>What it is: </strong>}
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">Tech Stack</p>
          <TechStackTags tags={project.techStack} />
        </div>

        {project.motivation && (
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {isPast ? "Why I built it" : "Why I'm building it"}
            </p>
            <p className="text-sm">{project.motivation}</p>
          </div>
        )}

        {project.impact && (
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Impact</p>
            <p className="text-sm">{project.impact}</p>
          </div>
        )}

        {project.lesson && (
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Lesson learned</p>
            <p className="text-sm italic">{project.lesson}</p>
          </div>
        )}

        {project.buildLinks && project.buildLinks.length > 0 && (
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {isPast ? "Read more:" : "Follow the build:"}
            </p>
            <ul className="space-y-1">
              {project.buildLinks.map((link) => (
                <li key={link.url} className="text-sm">
                  <Link href={link.url} className="text-primary hover:underline">
                    {link.title}
                  </Link>
                  {link.description && (
                    <span className="text-muted-foreground"> - {link.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Button key={link.url} asChild variant="outline" size="sm">
                {link.external ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.emoji} {link.label}
                  </a>
                ) : (
                  <Link href={link.url}>
                    {link.emoji} {link.label}
                  </Link>
                )}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      {/* Hero Section */}
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">Building in Public</h1>
        <p className="text-xl text-muted-foreground">
          I&apos;m documenting everything I build—from browser games to AI-powered knowledge systems.
          Follow along as I vibe code my way through each project.
        </p>
        <p className="text-base">
          <strong>Want updates?</strong>{" "}
          <Link href="#newsletter-cta" className="text-primary hover:underline">
            Subscribe to The Degenerate
          </Link>{" "}
          for weekly build logs.
        </p>
      </div>

      {/* Active Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Active Projects</h2>
        <div className="grid gap-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Past Projects</h2>
        <p className="text-muted-foreground mb-6">
          Projects I&apos;ve shipped before this &quot;building in public&quot; journey began.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {pastProjects.map((project) => (
            <ProjectCard key={project.title} project={project} isPast />
          ))}
        </div>
      </section>

      {/* Ideas & Experiments Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Ideas & Experiments</h2>
        <p className="text-muted-foreground mb-6">
          Things I&apos;m thinking about building (or might never build, but they&apos;re fun to think about).
        </p>
        <ul className="space-y-3">
          {ideas.map((idea) => (
            <li key={idea.title} className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <div>
                <span className="font-medium">{idea.title}:</span>{" "}
                <span className="text-muted-foreground">{idea.description}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Have ideas for me?</strong> DM me on{" "}
          <a
            href="https://twitter.com/ronforbes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Twitter
          </a>
          .
        </p>
      </section>

      {/* Newsletter CTA Section */}
      <section id="newsletter-cta" className="scroll-mt-20">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl">Follow My Builds</CardTitle>
            <CardDescription className="text-base">
              I document every project in my newsletter, <strong>The Degenerate</strong>. You&apos;ll get:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>Weekly build updates on Block Party, RonOS, and this site</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔧</span>
                <span>Behind-the-scenes struggles and breakthroughs</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💻</span>
                <span>Code snippets and vibe coding techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎮</span>
                <span>Early access to project demos and downloads</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              No fluff. Just honest documentation of building in public.
            </p>
            <NewsletterForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Tools & Setup",
  description: "The AI productivity tools, apps, and systems I use daily: Claude Code, Obsidian, Meta Quest, and more. Includes setup guides and why I chose each tool.",
  openGraph: {
    title: "Tools & Setup | Ron Forbes",
    description: "The AI productivity tools and systems I use to work, create, and build in public.",
  },
};

interface Tool {
  name: string;
  url?: string;
  useCase: string;
  why: string;
  relatedPosts?: Array<{ title: string; slug: string }>;
}

const aiDevTools: Tool[] = [
  {
    name: "Claude & Claude Code",
    url: "https://claude.ai/code",
    useCase: "AI-assisted coding, website development, and personal knowledge management",
    why: "Best balance of coding capability and natural language understanding. Can access my local file system, making it perfect for Obsidian integration.",
    relatedPosts: [
      { title: "The Degenerate's Guide to Vibe Coding", slug: "the-degenerates-guide-to-vibe-coding" },
      { title: "Claude Code as Life Coach", slug: "claude-code-as-life-coach" },
    ],
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com",
    useCase: "Primary code editor for all development work",
    why: "Industry standard, excellent extensions, Git integration, and highly customizable.",
    relatedPosts: [
      { title: "The Degenerate's Guide to Vibe Coding", slug: "the-degenerates-guide-to-vibe-coding" },
    ],
  },
  {
    name: "GitHub",
    url: "https://github.com",
    useCase: "Version control and open-source collaboration",
    why: "Industry standard. All my projects live here.",
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    useCase: "Hosting and deployment for Next.js sites (including this one)",
    why: "Instant deployments, great developer experience, free tier for personal projects.",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org",
    useCase: "React framework powering this website",
    why: "Server-side rendering, great DX, built-in optimizations.",
  },
  {
    name: "Squarespace",
    url: "https://squarespace.com",
    useCase: "Domain registration and DNS management",
    why: "Simple domain management interface.",
  },
];

const pkmTools: Tool[] = [
  {
    name: "Obsidian",
    url: "https://obsidian.md",
    useCase: "My second brain. All notes, journal entries, and life documentation live here.",
    why: "Local-first (my data stays with me), markdown-based (AI-friendly), infinitely customizable, integrates with Claude Code.",
    relatedPosts: [
      { title: "Claude Code as Life Coach", slug: "claude-code-as-life-coach" },
    ],
  },
  {
    name: "Notion",
    url: "https://notion.so",
    useCase: "Team collaboration, databases, and lightweight project management",
    why: "Best-in-class database features and team sharing. Previously powered this website via Super.so before I migrated to Next.js.",
  },
  {
    name: "Apple Notes",
    useCase: "Quick capture on the go, ephemeral thoughts that don't need structure",
    why: "Frictionless. Opens instantly, syncs perfectly across Apple devices.",
  },
];

const hardwareTools: Tool[] = [
  {
    name: "MacBook Pro M4 Max",
    useCase: "Primary development machine",
    why: "Powerful performance for development work, excellent battery life, seamless Apple ecosystem integration.",
  },
  {
    name: "Meta Quest 3",
    url: "https://www.meta.com/quest/quest-3/",
    useCase: "Spatial computing experiments, productivity workflows, and immersive focus sessions",
    why: "I work on this product, but I also genuinely use it for productivity. Best mixed reality headset available.",
    relatedPosts: [
      { title: "Unlocking Seamless Multitasking on Meta Quest", slug: "unlocking-seamless-multitasking-on-meta-quest" },
      { title: "Using Meta Quest as Your Spatial Computer", slug: "using-meta-quest-as-your-spatial-computer" },
    ],
  },
  {
    name: "Apple Vision Pro",
    url: "https://www.apple.com/apple-vision-pro/",
    useCase: "Spatial computing with tight Apple ecosystem integration",
    why: "Seamless integration with my MacBook, iPhone, and other Apple devices. Premium spatial computing experience.",
  },
  {
    name: "iPhone 15 Pro Max",
    useCase: "Mobile device for communication and quick capture",
    why: "Best camera system, reliable performance, deep integration with my other Apple devices.",
  },
  {
    name: "AirPods Pro 3",
    useCase: "Wireless earbuds for focus work",
    why: "Excellent noise cancellation, seamless device switching, comfortable for all-day wear.",
  },
  {
    name: "Whoop",
    url: "https://www.whoop.com",
    useCase: "Fitness tracking, recovery monitoring, and sleep optimization",
    why: "Comprehensive health data that helps me optimize my daily routines and work performance.",
  },
  {
    name: "Eight Sleep Mattress",
    url: "https://www.eightsleep.com",
    useCase: "Temperature-controlled sleep for better rest and recovery",
    why: "Sleep quality directly impacts productivity. The temperature control makes a significant difference.",
  },
];

const contentTools: Tool[] = [
  {
    name: "This Website",
    useCase: "Publishing my blog, portfolio, and experiments",
    why: "Migrated from Notion + Super.so for more control, better performance, and SEO. Built entirely using vibe coding with Claude Code. Tech stack: Next.js 15, TypeScript, Tailwind CSS, deployed on Vercel.",
  },
  {
    name: "Substack",
    url: "https://substack.com",
    useCase: "Email newsletter (The Degenerate)",
    why: "Built-in email infrastructure, reader discovery features, simple to use.",
  },
];

const personalFinanceTools: Tool[] = [
  {
    name: "Monarch",
    url: "https://www.monarchmoney.com",
    useCase: "Comprehensive personal finance dashboard for budgets, transactions, and investments",
    why: "All-in-one view of my financial life. Clean interface, powerful tracking.",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {tool.url ? (
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {tool.name}
            </a>
          ) : (
            tool.name
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <span className="font-semibold">What I use it for:</span>
          <p className="text-muted-foreground mt-1">{tool.useCase}</p>
        </div>
        <div>
          <span className="font-semibold">Why I chose it:</span>
          <p className="text-muted-foreground mt-1">{tool.why}</p>
        </div>
        {tool.relatedPosts && tool.relatedPosts.length > 0 && (
          <div>
            <span className="font-semibold">Related posts:</span>
            <ul className="mt-1 space-y-1">
              {tool.relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function TechPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">Tools &amp; Setup</h1>
        <p className="text-xl text-muted-foreground">
          The AI productivity tools, apps, and systems I use to work, create, and build in public.
        </p>
        <p className="text-sm text-muted-foreground">
          This is a living document—I&apos;ll update it as my stack evolves. Last updated: January 2026.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">AI &amp; Development</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {aiDevTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Personal Knowledge Management</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pkmTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Hardware &amp; Health</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {hardwareTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Content Creation</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {contentTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Personal Finance</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {personalFinanceTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Want to See How I Use These Tools?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I document my experiments with these tools every week in <strong>The Degenerate</strong>.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground">You&apos;ll get:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Setup guides and configuration tips</li>
              <li>Real workflows and use cases</li>
              <li>Honest reviews (what works, what doesn&apos;t)</li>
              <li>Early access to templates and starter kits</li>
            </ul>
          </div>

          <NewsletterForm variant="compact" />

          <p className="text-center text-sm text-muted-foreground mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </section>
      </div>
    </div>
  );
}

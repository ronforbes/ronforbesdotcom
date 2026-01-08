import { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description: "Product Manager at Meta Quest documenting experiments with AI productivity, personal knowledge management, and spatial computing. Currently vibe coding my way through life.",
  openGraph: {
    title: "About | Ron Forbes",
    description: "Product Manager at Meta Quest documenting experiments with AI productivity, personal knowledge management, and spatial computing.",
  },
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Hey! 👋🏾 I&apos;m Ron.
        </h1>
        <p className="text-xl text-muted-foreground">
          I&apos;m a Product Manager at Meta Quest where I work on mixed reality experiences that blend the physical and digital worlds.
        </p>
        <p className="text-xl text-muted-foreground mt-4">
          But this site isn&apos;t about my day job—it&apos;s about what happens when you apply AI tools to real work, personal growth, and creative projects.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Ron Forbes"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-8 prose prose-gray dark:prose-invert max-w-none">
          <div>
            <h2>My Story</h2>
            <p>
              I&apos;ve spent my career building products at the intersection of technology and human experience. Before Meta, I worked on League of Legends esports events, Kinect on Xbox, Internet Explorer, and a side project mix of games, apps, and platforms, always drawn to pushing the boundaries of what&apos;s possible.
            </p>
            <p>
              Like a lot of 90s kids, I grew up dreaming of making video games. That dream led me to learn coding, pick up piano to play game soundtracks, and eventually land in product management. But recently, I realized something: the thing that excites me now isn&apos;t just making games—it&apos;s still building, but also teaching, sharing, and helping others see what&apos;s possible with technology.
            </p>
            <p>
              Which brings me to why this site exists.
            </p>
          </div>

          <div>
            <h2>What I Write About</h2>
            <p>
              I&apos;m documenting my experiments at the intersection of three things:
            </p>
            <p>
              <strong>AI-Assisted Productivity</strong><br />
              I use tools like Claude Code to build websites, applications, and workflows. I call it &quot;vibe coding life&quot;—a PM&apos;s approach to technical work where you don&apos;t need to be an expert to ship real things.
            </p>
            <p>
              <strong>Personal Knowledge Management</strong><br />
              I&apos;m obsessed with note-taking systems, particularly Notion, Apple Notes, and more recently Obsidian. I&apos;ve even used Claude Code as an AI life coach to synthesize years of scattered thoughts into actionable insights.
            </p>
            <p>
              <strong>Spatial Computing &amp; VR</strong><br />
              As someone who works on Meta Quest, I&apos;m exploring what happens when you use VR not for games, but for productivity. Think multitasking, focus work, and reimagining how we interact with computers.
            </p>
          </div>

          <div>
            <h2>What I&apos;m Building</h2>
            <p>
              <strong>Block Party</strong> (In Progress)<br />
              A browser-based puzzle game built entirely using AI-assisted development. I&apos;m documenting the entire process as a case study in vibe coding.
            </p>
            <p>
              <strong>This Website</strong><br />
              You&apos;re looking at it! I migrated from Notion + Super.so to Next.js + Markdown, vibe coding my way through the entire stack.
            </p>
            <p>
              <strong>ronOS</strong><br />
              My personal knowledge base in Obsidian, connected to Claude Code for AI-powered reflection and life coaching.
            </p>
          </div>

          <div>
            <h2>Beyond the Keyboard</h2>
            <p>
              When I&apos;m not coding or taking notes, you&apos;ll find me:
            </p>
            <ul>
              <li>Playing piano (covers and game soundtracks, mostly)</li>
              <li>Exploring VR worlds and productivity experiments</li>
              <li>Building Notion databases that probably over-complicate simple problems</li>
              <li>Thinking about how to make technology more human</li>
            </ul>
            <p>
              I believe the best work happens at the intersection of technical capability and human creativity—and that AI tools are making that intersection accessible to everyone, not just engineers.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">Let&apos;s Stay Connected</h2>
        <p className="text-lg text-muted-foreground mb-6">
          I send a weekly newsletter called <strong>The Degenerate</strong> where I share my latest experiments, the tools I&apos;m using, and lessons from building in public.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          No fluff, no hype—just honest documentation of what&apos;s working (and what&apos;s not).
        </p>

        <NewsletterForm variant="compact" />

        <p className="text-center text-muted-foreground mt-6">
          Or find me on{" "}
          <a
            href="https://twitter.com/ronforbes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Twitter
          </a>,{" "}
          <a
            href="https://linkedin.com/in/ronforbes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>, or{" "}
          <a
            href="https://threads.net/@ronforbes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Threads
          </a>.
        </p>
      </div>
    </div>
  );
}

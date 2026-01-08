import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12 items-center">
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="Ron Forbes"
            width={500}
            height={500}
            className="w-auto h-auto max-w-full"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hey! 👋🏾 I&apos;m Ron.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            I&apos;m a product manager at Meta Quest exploring how AI is changing the way we work, create, and grow.<br /><br />

            I write about AI-assisted productivity, personal knowledge management, and building things with tools like Claude Code and Obsidian.<br /><br />

            Currently vibe coding my way through life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg">
              <Link href="/blog">Read my blog</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn more about me</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m Ron Forbes
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            I share insights and experiences on career development, artificial intelligence,
            health, virtual reality, personal finance, and the pursuit of happiness.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg">
              <Link href="/blog">Read My Blog</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-xl overflow-hidden bg-muted">
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-sm">Hero Image</p>
              <p className="text-xs mt-2">Add your image at /public/images/hero.jpg</p>
            </div>
          </div>
          {/* Uncomment when you add your hero image */}
          {/* <Image
            src="/images/hero.jpg"
            alt="Ron Forbes"
            fill
            className="object-cover"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}

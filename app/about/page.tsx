import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ron Forbes and his background.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">About Me</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-xl overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">Profile Photo</p>
                <p className="text-xs mt-2">Add at /public/images/profile.jpg</p>
              </div>
            </div>
            {/* Uncomment when you add your profile photo */}
            {/* <Image
              src="/images/profile.jpg"
              alt="Ron Forbes"
              width={400}
              height={400}
              className="object-cover"
            /> */}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 prose prose-gray dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Hi, I&apos;m Ron Forbes. Welcome to my corner of the internet.
          </p>

          <h2>What I Do</h2>
          <p>
            [Add your professional background and what you do. This is a placeholder
            that you can customize with your own story.]
          </p>

          <h2>My Interests</h2>
          <p>
            I write about career development, artificial intelligence, health and wellness,
            virtual reality, personal finance, and the pursuit of happiness.
          </p>

          <h2>Get in Touch</h2>
          <p>
            You can find me on{" "}
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
            </a>, or subscribe to my{" "}
            <a
              href="https://substack.com/@ronforbes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              newsletter
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-semibold">{SITE_NAME}</h3>
            <p className="text-sm text-muted-foreground">
              Product Manager at Meta Quest. I write about AI productivity,
              personal knowledge management, and building in public.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Content</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-foreground transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-foreground transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com/ronforbes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ronforbes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://substack.com/@ronforbes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

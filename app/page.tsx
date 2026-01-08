import { Hero } from "@/components/home/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FeaturedContent } from "@/components/home/FeaturedContent";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-muted/30 py-12">
        <div className="container">
          <NewsletterForm
            title="Subscribe to The Degenerate"
            description="New here? I'm documenting my experiments with AI productivity tools in real-time. Join my newsletter to follow along."
          />
        </div>
      </div>

      <FeaturedContent />

      <div className="bg-muted/30 py-16">
        <div className="container">
          <NewsletterForm
            title="Don't Miss Future Experiments"
            description="Get weekly(ish) updates on AI productivity, PKM systems, and whatever I'm building next."
          />
        </div>
      </div>
    </>
  );
}

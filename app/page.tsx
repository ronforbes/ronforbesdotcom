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
            description="I'm building my AI productivity system in public. Join my newsletter to get the experiments, setups, and lessons I don't post publicly."
          />
        </div>
      </div>

      <FeaturedContent />

      <div className="bg-muted/30 py-16">
        <div className="container">
          <NewsletterForm
            title="Don't Miss Future Experiments"
            description="Get weekly updates on AI productivity, PKM systems, and whatever I'm building next."
          />
        </div>
      </div>
    </>
  );
}

import { Hero } from "@/components/home/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedContent } from "@/components/home/FeaturedContent";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-muted/30 py-12">
        <div className="container max-w-3xl">
          <NewsletterForm variant="compact" />
        </div>
      </div>

      <CategoryGrid />

      <FeaturedContent />

      <div className="bg-muted/30 py-16">
        <div className="container max-w-3xl">
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}

import { Hero } from "@/components/home/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FeaturedContent } from "@/components/home/FeaturedContent";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-muted/30 py-12">
        <div className="container">
          <NewsletterForm />
        </div>
      </div>

      <FeaturedContent />

      <div className="bg-muted/30 py-16">
        <div className="container">
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}

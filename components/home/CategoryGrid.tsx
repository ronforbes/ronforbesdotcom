import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { getCategoryPostCount } from "@/lib/posts";

export function CategoryGrid() {
  return (
    <section className="container py-12 md:py-16">
      <div className="space-y-4 text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Explore by Category
        </h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Browse articles organized by topic. Each category contains curated content
          to help you learn and grow.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_CATEGORIES.map((category) => {
          const postCount = getCategoryPostCount(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {postCount} {postCount === 1 ? "post" : "posts"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

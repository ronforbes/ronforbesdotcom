import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getBlogPostsByCategory } from "@/lib/posts";
import { BLOG_CATEGORIES, BlogCategory } from "@/lib/constants";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} - Blog`,
    description: category.description,
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(categorySlug as BlogCategory);

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">{category.name}</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          {category.description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
          >
            All Posts
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat.slug === categorySlug
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                {post.image && (
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No posts in this category yet.</p>
        </div>
      )}
    </div>
  );
}

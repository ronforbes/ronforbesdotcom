import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFeaturedBlogPosts, getFeaturedVideos } from "@/lib/posts";
import { BLOG_CATEGORIES } from "@/lib/constants";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function FeaturedContent() {
  const featuredPosts = getFeaturedBlogPosts();
  const featuredVideos = getFeaturedVideos();

  return (
    <section className="container py-12 md:py-16">
      {/* Featured Blog Posts */}
      <div className="space-y-6 mb-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Featured Posts</h2>
            <p className="text-muted-foreground mt-2">
              Handpicked articles you might find interesting
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/blog">View All</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => {
              const category = BLOG_CATEGORIES.find((c) => c.slug === post.category);
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full transition-all hover:shadow-lg">
                    {post.image && (
                      <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                        {/* Image placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                          Image
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span className="font-medium text-primary">{category?.name}</span>
                        <span>•</span>
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
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <p>No featured posts yet. Add some blog posts with <code className="bg-muted px-2 py-1 rounded text-xs">featured: true</code> in the frontmatter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Videos */}
      {featuredVideos.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Featured Videos</h2>
              <p className="text-muted-foreground mt-2">
                Watch my latest video content
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/videos">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredVideos.map((video) => {
              const category = BLOG_CATEGORIES.find((c) => c.slug === video.category);
              return (
                <Link key={video.slug} href={`/videos/${video.slug}`} className="group">
                  <Card className="h-full transition-all hover:shadow-lg">
                    <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                      {/* YouTube thumbnail placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <p className="text-sm">Video Thumbnail</p>
                          <p className="text-xs mt-1">ID: {video.videoId}</p>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span className="font-medium text-primary">{category?.name}</span>
                        <span>•</span>
                        <time dateTime={video.date}>{formatDate(video.date)}</time>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getAllVideos } from "@/lib/posts";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch video content on career, AI, health, VR, personal finance, and happiness.",
};

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tighter">Videos</h1>
        <p className="text-xl text-muted-foreground max-w-[700px]">
          Video content covering technology, career insights, and more.
        </p>
      </div>

      {videos.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => {
            const category = BLOG_CATEGORIES.find((c) => c.slug === video.category);
            return (
              <Link key={video.slug} href={`/videos/${video.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-lg">
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-xl">
                    <Image
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
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
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No videos yet. Add MDX files to the <code className="bg-muted px-2 py-1 rounded text-sm">content/videos</code> directory.</p>
        </div>
      )}
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllVideos, getVideoBySlug } from "@/lib/posts";
import { BLOG_CATEGORIES } from "@/lib/constants";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const videos = getAllVideos();
  return videos.map((video) => ({
    slug: video.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    return {
      title: "Video Not Found",
    };
  }

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      type: "video.other",
    },
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

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  const category = BLOG_CATEGORIES.find((c) => c.slug === video.category);

  return (
    <article className="container max-w-4xl py-12 md:py-16">
      <header className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{category?.name}</span>
          <span>•</span>
          <time dateTime={video.date}>{formatDate(video.date)}</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {video.title}
        </h1>
        <p className="text-xl text-muted-foreground">{video.description}</p>
      </header>

      <div className="mb-8">
        <div className="aspect-video rounded-xl overflow-hidden bg-muted">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote
          source={video.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypePrettyCode, { theme: "github-dark" }],
                [
                  rehypeAutolinkHeadings,
                  {
                    properties: {
                      className: ["anchor"],
                      ariaLabel: "Link to section",
                    },
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}

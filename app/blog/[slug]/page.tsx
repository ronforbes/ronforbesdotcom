import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/posts";
import { BLOG_CATEGORIES } from "@/lib/constants";
import { NewsletterForm } from "@/components/NewsletterForm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = BLOG_CATEGORIES.find((c) => c.slug === post.category);

  return (
    <article className="container max-w-4xl py-12 md:py-16">
      <header className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{category?.name}</span>
          <span>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground">{post.description}</p>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
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

      <div className="mt-16 pt-8 border-t">
        <NewsletterForm variant="compact" />
      </div>
    </article>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, VideoPost } from "./types";
import { BlogCategory } from "./constants";

const postsDirectory = path.join(process.cwd(), "content/blog");
const videosDirectory = path.join(process.cwd(), "content/videos");

function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getAllBlogPosts(): BlogPost[] {
  ensureDirectoryExists(postsDirectory);

  const fileNames = fs.readdirSync(postsDirectory).filter((file) =>
    file.endsWith(".mdx")
  );

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      featured: data.featured || false,
      image: data.image,
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      featured: data.featured || false,
      image: data.image,
      content,
    } as BlogPost;
  } catch {
    return null;
  }
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.featured).slice(0, limit);
}

export function getAllVideos(): VideoPost[] {
  ensureDirectoryExists(videosDirectory);

  const fileNames = fs.readdirSync(videosDirectory).filter((file) =>
    file.endsWith(".mdx")
  );

  const videos = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(videosDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      videoId: data.videoId,
      featured: data.featured || false,
      thumbnail: data.thumbnail,
      content,
    } as VideoPost;
  });

  return videos.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getVideoBySlug(slug: string): VideoPost | null {
  try {
    const fullPath = path.join(videosDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      videoId: data.videoId,
      featured: data.featured || false,
      thumbnail: data.thumbnail,
      content,
    } as VideoPost;
  } catch {
    return null;
  }
}

export function getFeaturedVideos(limit = 2): VideoPost[] {
  const allVideos = getAllVideos();
  return allVideos.filter((video) => video.featured).slice(0, limit);
}

export function getCategoryPostCount(category: BlogCategory): number {
  const posts = getBlogPostsByCategory(category);
  return posts.length;
}

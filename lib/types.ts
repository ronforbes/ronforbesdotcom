import { BlogCategory } from "./constants";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  featured?: boolean;
  image?: string;
  content: string;
}

export interface VideoPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  videoId: string;
  featured?: boolean;
  thumbnail?: string;
  content: string;
}

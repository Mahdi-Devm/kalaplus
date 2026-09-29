export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  categorySlug: string;
  tags: string[];

  publishedAt: string;
  readTime: string;
  views: number;
  featured: boolean;
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
}

export interface BlogTag {
  name: string;
  slug: string;
  count: number;
}

export type BlogCardVariant = "default" | "featured" | "compact" | "horizontal";

export type BlogViewMode = "grid" | "list";

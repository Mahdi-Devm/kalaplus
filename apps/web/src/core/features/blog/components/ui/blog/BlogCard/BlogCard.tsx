"use client";

import { H3 } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";
import { BlogPost } from "@/core/features/blog/assets/@types/blog";
import {
  baseBlogClasses,
  contentBlogClasses,
  imageBlogClasses,
  variantBlogClasses,
} from "@/core/features/blog/assets/mock/blog/blogPosts";
import { cn } from "@/core/utils/shadcn/utils";
import { Calendar, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
  post,
  variant = "default",
  className,
}: {
  post: BlogPost;
  variant?: "default" | "featured" | "compact" | "horizontal";
  className?: string;
}) {
  return (
    <article
      className={cn(baseBlogClasses, variantBlogClasses[variant], className)}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "block relative overflow-hidden",
          imageBlogClasses[variant],
        )}
        aria-label={`مطالعه مقاله: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            variant === "horizontal"
              ? "150px"
              : variant === "featured"
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <Badge className="w-20 text-xs">{post.category}</Badge>
        </div>
      </Link>

      <div className={cn(contentBlogClasses[variant])}>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {post.views.toLocaleString()} بازدید
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group">
          <H3
            className={cn(
              "font-bold leading-tight transition-colors group-hover:text-primary",
              variant === "featured"
                ? "text-2xl lg:text-3xl mb-3"
                : variant === "horizontal"
                  ? "text-lg mb-2"
                  : variant === "compact"
                    ? "text-lg mb-2"
                    : "text-xl mb-3",
            )}
          >
            {post.title}
          </H3>
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;

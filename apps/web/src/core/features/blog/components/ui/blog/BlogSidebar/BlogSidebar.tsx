"use client";

import { H3 } from "@/core/components/custom/ui/typography/Typography";
import {
  blogCategories,
  blogPosts,
} from "@/core/features/blog/assets/mock/blog/blogPosts";
import { cn } from "@/core/utils/shadcn/utils";
import { Calendar, ChevronDown, ChevronUp, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BlogSidebar() {
  const [expandedCategories, setExpandedCategories] = useState(true);

  const popularPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const recentPosts = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 5);

  const toggleCategories = () => setExpandedCategories(!expandedCategories);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        {/* Categories Widget */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <H3 className="text-lg font-semibold flex items-center gap-2">
              دسته‌بندی‌ها
            </H3>
            <button
              onClick={toggleCategories}
              className="p-1 rounded-lg hover:bg-accent transition-colors text-muted-foreground"
              aria-label={
                expandedCategories
                  ? "بستن دسته‌بندی‌ها"
                  : "باز کردن دسته‌بندی‌ها"
              }
            >
              {expandedCategories ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
          <ul
            className={cn(
              "space-y-2 transition-all duration-300 overflow-hidden",
              expandedCategories ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            {blogCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-accent transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <H3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <Eye className="w-5 h-5 text-muted-foreground" />
            پر بازدیدترین‌ها
          </H3>
          <ul className="space-y-4">
            {popularPosts.map((post, index) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="flex gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors text-sm leading-snug mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <H3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            آخرین مقالات
          </H3>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="flex gap-3 group">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors text-sm leading-snug mb-1">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;

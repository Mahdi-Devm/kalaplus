"use client";

import { Button } from "@/components/shadcn/ui/button/button";
import { H2, P } from "@/core/components/custom/ui/typography/Typography";
import { blogPosts } from "@/core/features/blog/assets/mock/blog/blogPosts";
import { cn } from "@/core/utils/shadcn/utils";
import { Grid, List } from "lucide-react";
import { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";

type ViewMode = "grid" | "list";

function BlogGrid() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const displayedPosts = blogPosts.slice(0, postsPerPage);
  const hasMorePosts = postsPerPage < blogPosts.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPostsPerPage((prev) => Math.min(prev + 6, blogPosts.length));
      setIsLoading(false);
    }, 500);
  };

  const gridColumns = {
    grid: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
    list: "grid-cols-1 gap-4",
  };

  const cardVariants = {
    grid: "default" as const,
    list: "horizontal" as const,
  };

  return (
    <section className="w-full" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <H2 className="text-2xl lg:text-3xl font-bold">مقالات اخیر</H2>
          <P className="text-muted-foreground mt-1">
            {blogPosts.length} مقاله در{" "}
            {new Set(blogPosts.map((p) => p.category)).size} دسته‌بندی
          </P>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex bg-muted rounded-lg p-1"
            role="group"
            aria-label="حالت نمایش"
          >
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              aria-label="نمای شبکه"
              aria-pressed={viewMode === "grid"}
              className="rounded-md"
            >
              <Grid className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
              aria-label="نمای لیست"
              aria-pressed={viewMode === "list"}
              className="rounded-md"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300",
          gridColumns[viewMode],
        )}
        role="list"
        aria-label="لیست مقالات بلاگ"
      >
        {displayedPosts.map((post, index) => (
          <div
            key={post.id}
            role="listitem"
            style={{ animationDelay: `${index * 50}ms` }}
            className="animate-fade-in-up"
          >
            <BlogCard post={post} variant={cardVariants[viewMode]} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;

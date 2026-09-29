"use client";

import BlogHeroSlider from "@/core/features/blog/components/ui/blog/BlogHeroSlider/BlogHeroSlider";
import BlogSidebar from "@/core/features/blog/components/ui/blog/BlogSidebar/BlogSidebar";
import BlogGrid from "@/core/features/blog/components/ui/blog/BlogGrid/BlogGrid";

function BlogComponents() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1 min-w-0">
        <BlogHeroSlider />
        <BlogGrid />
      </div>
      <aside className="hidden lg:block">
        <BlogSidebar />
      </aside>
    </div>
  );
}

export default BlogComponents;

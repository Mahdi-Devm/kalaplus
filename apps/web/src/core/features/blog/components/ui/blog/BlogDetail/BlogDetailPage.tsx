import { blogPosts } from "@/core/features/blog/assets/mock/blog/blogPosts";
import BlogDetailComponent from "./BlogDetailComponent";

function BlogDetailPage({ slug }: { slug?: string }) {
  const blog = blogPosts.find((item) => item.slug === slug);

  if (!blog) {
    return null;
  }

  return (
    <div className="mb-6">
      <BlogDetailComponent blog={blog} />
    </div>
  );
}

export default BlogDetailPage;

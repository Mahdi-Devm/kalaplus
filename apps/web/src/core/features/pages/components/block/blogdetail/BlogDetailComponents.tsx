import BlogDetailHeader from "../../../../blog/components/ui/blog/BlogDetail/BlogDetailHeader";
import BlogDetailPage from "../../../../blog/components/ui/blog/BlogDetail/BlogDetailPage";
function BlogDetailComponents({ slug }: { slug: string }) {
  return (
    <>
      <BlogDetailHeader />
      <BlogDetailPage slug={slug} />
    </>
  );
}

export default BlogDetailComponents;

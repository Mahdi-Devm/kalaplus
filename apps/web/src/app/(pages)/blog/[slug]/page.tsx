import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import BlogDetailComponents from "@/core/features/pages/components/block/blogdetail/BlogDetailComponents";
async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <SectionLayout>
      <BlogDetailComponents slug={slug} />
    </SectionLayout>
  );
}

export default page;

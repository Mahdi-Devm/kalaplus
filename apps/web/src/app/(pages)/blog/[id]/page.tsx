import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import BlogDetailComponents from "@/core/features/pages/components/block/blogdetail/BlogDetailComponents";
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("SLUG:", id);
  return (
    <SectionLayout>
      <BlogDetailComponents slug={id} />
    </SectionLayout>
  );
}

export default page;

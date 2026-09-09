import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import AuthComponents from "@/core/features/auth/components/block/AuthComponents";
import StoriesSection from "@/core/features/pages/components/block/home/StoriesSection";

function page() {
  return (
    <SectionLayout>
      <AuthComponents />
      <StoriesSection />
      <div className="bg-amber-300">2</div>
    </SectionLayout>
  );
}

export default page;

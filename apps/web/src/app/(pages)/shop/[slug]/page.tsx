import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import SingleProductComponents from "@/core/features/shop/components/block/SingleProductComponents";
import SingleProductSkeleton from "@/core/features/shop/components/ui/skeleton/SingleProductSkeleton";
import { Suspense } from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const param = await params;

  return (
    <SectionLayout>
      <Suspense fallback={<SingleProductSkeleton />}>
        <SingleProductComponents params={param} />
      </Suspense>
    </SectionLayout>
  );
}
export default page;

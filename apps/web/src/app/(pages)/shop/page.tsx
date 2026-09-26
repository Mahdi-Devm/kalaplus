import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import ShopComponents from "@/core/features/shop/components/block/ShopComponents";

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string; limit: string; search: string }>;
}) {
  return (
    <SectionLayout>
      <ShopComponents searchParams={searchParams} />
    </SectionLayout>
  );
}

import { ProductType } from "@/core/assets/types/product/ProductType";
import { H2, Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FiFilter } from "react-icons/fi";
import { ShopFiltersState } from "../../../assets/@types/ShopFilters";
import { ShopFilters } from "../filter/Shopfilters";
import { SortDropdown } from "../filter/SortDropdown";
import ShopSkeleton from "../skeleton/ShopSkeleton";
import { ProductCard } from "./Productcard";

function ListProductShopPage({
  products,
  filters,
  setFilters,
  setFilterModalOpen,
  isFilterModalOpen,
  loading,
}: {
  products: ProductType[];
  filters: ShopFiltersState;
  setFilters: Dispatch<SetStateAction<ShopFiltersState>>;
  setFilterModalOpen: (v: boolean) => void;
  isFilterModalOpen: boolean;
  loading: boolean;
}) {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sortBy") ?? "";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <aside className="hidden lg:col-span-1 lg:block">
        <ShopFilters value={filters} onChange={setFilters} />
      </aside>

      <div className="lg:col-span-3">
        <div className="flex  items-stretch gap-3 sm:flex-row sm:items-center mb-5">
          <div className="flex flex-1 items-center gap-3 sm:flex-none">
            <H2 className="whitespace-nowrap pb-0 text-xl sm:text-2xl">
              فروشگاه
            </H2>
          </div>
          <span className="hidden h-px flex-1 border-t border-dashed border-border sm:block" />
          <div className="flex items-center gap-3">
            <SortDropdown value={sort} />

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="فیلترها"
              onClick={() => setFilterModalOpen(!isFilterModalOpen)}
            >
              <FiFilter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {loading ? (
          <ShopSkeleton />
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-16 text-center">
            <Span className="font-medium">محصولی با این فیلترها پیدا نشد</Span>

            <Span className="text-sm text-muted-foreground">
              فیلترها را تغییر بده یا آن‌ها را پاک کن
            </Span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListProductShopPage;

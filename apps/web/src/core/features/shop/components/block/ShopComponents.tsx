"use client";

import { useState } from "react";
import { FiFilter } from "react-icons/fi";

import { Button } from "@/components/shadcn/ui/button/button";

import Modal from "@/core/components/custom/ui/modal/Modal";
import { H2, Span } from "@/core/components/custom/ui/typography/Typography";
import ProductsSkeleton from "@/core/features/pages/components/ui/product/skeleton/ProductsSkeleton";
import { useProducts } from "@/core/features/pages/lib/useProducts";
import { DEFAULT_SHOP_FILTERS, ShopFilters } from "../ui/filter/Shopfilters";
import { SortDropdown } from "../ui/filter/SortDropdown";
import { ProductCard } from "../ui/Productcard";

function ShopComponents() {
  const { loading, data } = useProducts();

  const products = data?.products?.data ?? [];

  const [filters, setFilters] = useState(DEFAULT_SHOP_FILTERS);
  const [sort, setSort] = useState("default");
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  if (loading) {
    return <ProductsSkeleton />;
  }
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <aside className="hidden lg:col-span-1 lg:block">
          <ShopFilters value={filters} onChange={setFilters} />
        </aside>

        <div className="lg:col-span-3">
          <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center mb-5">
            <div className="flex flex-1 items-center gap-3 sm:flex-none">
              <H2 className="whitespace-nowrap pb-0 text-xl sm:text-2xl">
                فروشگاه
              </H2>
            </div>
            <span className="hidden h-px flex-1 border-t border-dashed border-border sm:block" />
            <div className="flex items-center gap-3">
              <SortDropdown value={sort} onChange={setSort} />

              <Button
                type="button"
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="فیلترها"
                onClick={() => setFilterModalOpen(true)}
              >
                <FiFilter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-16 text-center">
              <Span className="font-medium">
                محصولی با این فیلترها پیدا نشد
              </Span>
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

      <Modal
        open={isFilterModalOpen}
        onOpenChange={setFilterModalOpen}
        title="فیلترها"
        size="md"
        hideDefaultFooter
      >
        <ShopFilters value={filters} onChange={setFilters} />
        <Button
          className="mt-4 w-full"
          onClick={() => setFilterModalOpen(false)}
        >
          اعمال فیلتر
        </Button>
      </Modal>
    </div>
  );
}

export default ShopComponents;

import { Button } from "@/core/components/shadcn/ui/button/button";
import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { Suspense } from "react";
import { FiChevronLeft } from "react-icons/fi";
import SiwperCategory from "../../ui/category/SiwperCategory";
import CategorySliderSkeleton from "../../ui/category/skeleton/CategorySliderSkeleton";
import TitleSiwperCategory from "../../ui/category/TitleSiwperCategory";

async function CategorySlider() {
  return (
    <Card className="border-0 lg:border lg:border-border mt-0">
      <CardContent className="flex flex-col items-center gap-4 p-4 sm:gap-6 sm:p-6 lg:flex-row lg:gap-10">
        <TitleSiwperCategory />

        <SiwperCategory />

        <Button
          size="sm"
          className="text-xs w-full rounded sm:text-sm flex sm:hidden"
        >
          مشاهده همه <FiChevronLeft />
        </Button>
      </CardContent>
    </Card>
  );
}

export default CategorySlider;

import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import SiwperCategory from "../../ui/category/SiwperCategory";
import TitleSiwperCategory from "../../ui/category/TitleSiwperCategory";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { FiChevronLeft } from "react-icons/fi";

function CategorySlider() {
  return (
    <Card className=" border-none sm:border-border mt-0">
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

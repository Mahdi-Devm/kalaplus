import { H3 } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { FiChevronLeft } from "react-icons/fi";

function TitleSiwperCategory() {
  return (
    <div className="flex w-full flex-col items-center text-center lg:w-auto lg:items-start lg:text-right">
      <H3 className="mb-2 ">دسته بندی محصولات</H3>
      <Button size="sm" className="text-xs sm:text-sm hidden sm:flex">
        مشاهده همه <FiChevronLeft />
      </Button>
    </div>
  );
}

export default TitleSiwperCategory;

import { H3 } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { FiChevronLeft } from "react-icons/fi";
function TitleSiwperCategory() {
  return (
    <div>
      <H3 className="text-center mb-2">
        دسته بندی <br></br>محصولات
      </H3>
      <Button>
        مشاهده همه <FiChevronLeft />
      </Button>
    </div>
  );
}

export default TitleSiwperCategory;

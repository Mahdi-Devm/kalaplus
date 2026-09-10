import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import SiwperCategory from "../../ui/category/SiwperCategory";
import TitleSiwperCategory from "../../ui/category/TitleSiwperCategory";
function CategorySlider() {
  return (
    <Card className="m-10">
      <CardContent className="flex items-center gap-10 ">
        <TitleSiwperCategory />
        <SiwperCategory />
      </CardContent>
    </Card>
  );
}

export default CategorySlider;

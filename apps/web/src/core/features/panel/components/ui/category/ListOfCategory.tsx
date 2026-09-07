import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { getImageUrl } from "@/core/utils/getImageUrl";
import { Pencil, Trash2, Upload } from "lucide-react";
import { CategoryProductType } from "../../../assets/@types/category/CategoryType";

function ListOfCategory({
  categories,
  handleEditCategory,
}: {
  categories: CategoryProductType[];
  handleEditCategory: (v: CategoryProductType) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="flex items-center gap-3 p-2.5 rounded-lg border hover:bg-muted/40 transition-colors"
        >
          <div className="size-10 rounded-md bg-muted overflow-hidden shrink-0">
            {cat.image ? (
              <ImgNormalCustom
                src={getImageUrl(cat.image)}
                alt={cat.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Upload className="size-4 text-muted-foreground" />
              </div>
            )}
          </div>

          <div className="text-right flex-1 min-w-0">
            <P className="font-medium truncate text-sm">{cat.title}</P>
            <P className="text-xs text-muted-foreground font-mono truncate">
              {cat.slug}
            </P>
          </div>

          <div className="flex items-center gap-0.5 shrink-0">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={() => handleEditCategory(cat)}
            >
              <Pencil className="size-3.5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 text-destructive hover:text-destructive"
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListOfCategory;

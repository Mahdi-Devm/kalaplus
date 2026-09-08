import SearchInput from "@/core/components/custom/ui/search-input/SearchInput";
import { H3, Muted } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
export default function ProdctListHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <H3>لیست محصولات</H3>
        <Muted>همه محصولات</Muted>
      </div>

      <div className="flex items-center gap-3">
        <SearchInput title="جستجوی محصول..." dely={500} />
        <Button
          className="whitespace-nowrap"
          onClick={() => redirect("/panel/admin/order")}
        >
          <Plus className="size-4 ml-1" />
          محصول جدید
        </Button>
      </div>
    </div>
  );
}

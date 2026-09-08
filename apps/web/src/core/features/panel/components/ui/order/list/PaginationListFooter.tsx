import { Paginations } from "@/core/components/custom/ui/pagination/Pagination";
import { Muted } from "@/core/components/custom/ui/typography/Typography";
interface PaginationFooterProps {
  total: number;
}

export default function PaginationListFooter({ total }: PaginationFooterProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Muted>
        نمایش ۱ تا {total} از {total} محصول
      </Muted>
      <div>
        <Paginations />
      </div>
    </div>
  );
}

import { H3, Muted } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { PackageOpen } from "lucide-react";

export default function EmptyState({
  title = "محصولی یافت نشد",
  description = "هنوز هیچ محصولی ثبت نشده یا با فیلترهای فعلی نتیجه‌ای وجود ندارد.",
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border rounded-lg bg-card">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
        <PackageOpen className="size-8 text-muted-foreground" />
      </div>

      <H3 className="mb-2">{title}</H3>
      <Muted className="max-w-sm mb-6">{description}</Muted>

      {actionLabel && onAction && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}

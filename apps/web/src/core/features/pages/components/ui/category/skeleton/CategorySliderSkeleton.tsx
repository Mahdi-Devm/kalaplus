import { Card, CardContent } from "@/core/components/shadcn/ui/card/card";
import { Skeleton } from "@/core/components/shadcn/ui/skeleton/skeleton";

export default function CategorySliderSkeleton() {
  return (
    <Card className="mt-0 border-none sm:border-border">
      <CardContent className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6 lg:flex-row lg:gap-10">
        <div className="w-full shrink-0 lg:w-40">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="mt-2 h-4 w-24" />
        </div>

        <div className="flex w-full gap-3 overflow-hidden">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-24 min-w-24 rounded-xl" />
          ))}
        </div>

        <Skeleton className="hidden h-9 w-24 shrink-0 lg:block" />
      </CardContent>
    </Card>
  );
}

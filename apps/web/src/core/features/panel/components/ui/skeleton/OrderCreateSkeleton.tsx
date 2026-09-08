import { Skeleton } from "@/core/components/shadcn/ui/skeleton/skeleton";

export default function OrderCreateSkeleton() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border p-6 space-y-4">
            <Skeleton className="h-6 w-40 mb-4" />

            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6 space-y-4">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="flex gap-4">
              <Skeleton className="h-32 w-32 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6 space-y-4">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          </div>
          <div className="bg-white rounded-lg border p-6 space-y-4">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>

              <Skeleton className="h-10 w-full mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  );
}

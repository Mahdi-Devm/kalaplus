import { Button } from "@/core/components/shadcn/ui/button/button";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BlogPage from "../blog/Blogs";

function Essay() {
  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-lg font-black sm:text-xl">مقالات </h2>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              مقالات برتر سایت
            </p>
          </div>
        </div>

        <Button asChild variant="ghost" className="group rounded-xl ">
          <Link href="/blog" className="text-sm">
            مشاهده همه
            <FiArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </Button>
      </div>

      <BlogPage />
    </div>
  );
}

export default Essay;

import { Button } from "@/core/components/shadcn/ui/button/button";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BlogPage from "../blog/Blogs";
import blogimg from "../../../../../../../public/common/img/blog/blog-img.png";

import Image from "next/image";

function Essay() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
      <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl lg:h-auto lg:w-75">
        <Image src={blogimg} alt="عکس مقاله" fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-4 flex w-full items-center justify-between">
          <h2 className="text-lg font-black sm:text-xl">مقالات</h2>

          <Button asChild variant="secondary">
            <Link href="/blog" className="group text-sm">
              مشاهده همه
              <FiArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
        </div>
        <BlogPage />
      </div>
    </div>
  );
}

export default Essay;

import { P } from "@/core/components/custom/ui/typography/Typography";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const BlogDetailHeader = () => {
  return (
    <div className="mb-6 mt-6 pages-container">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <P>صفحه اصلی</P>
        </Link>

        <ChevronLeft className="h-4 w-4 text-muted-foreground" />

        <Link
          href="/blog"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <P>بلاگ</P>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailHeader;
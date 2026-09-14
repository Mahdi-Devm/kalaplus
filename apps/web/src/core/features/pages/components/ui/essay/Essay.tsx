import BlogPage from "../blog/Blogs";
import { H2 } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const Essay = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <H2>مقالات </H2>
        <Link href="/blog">
         
          <Button>
            مشاهده همه <FiChevronLeft />
          </Button>
        </Link>
      </div>

      <BlogPage />
    </div>
  );
};

export default Essay;

import { H4, Muted } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface TopProductDetailProps {
  title: string;
  description: string;
}

function TopProductDetail({ title, description }: TopProductDetailProps) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div className="flex items-center gap-3">
        <div>
          <H4>{title}</H4>
          <Muted>{description}</Muted>
        </div>
      </div>
      <Button asChild variant="ghost" className="group rounded-xl ">
        <Link href="/products" className="text-sm">
          مشاهده همه
          <FiArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}

export default TopProductDetail;

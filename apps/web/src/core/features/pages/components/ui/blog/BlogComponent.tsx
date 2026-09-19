import Image from "next/image";
import Link from "next/link";
import { H2, Small } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
type BlComponent = {
  img: string;
  title: string;
  date: string;
  id: string;
};

const BlogComponent = ({ img, title, id }: BlComponent) => {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      <div className="flex flex-col p-5 sm:p-6">
        <H2 className="line-clamp-2 text-right text-lg font-bold leading-8 transition-colors duration-200 sm:text-xl">
          {title}
        </H2>

        <Link href={`/blog/${id}`}>
          <div className="mt-6 flex items-center justify-center border-t border-border pt-4">
            <Button variant="secondary" className="hover:text-white">
              مطالعه کنید
            </Button>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default BlogComponent;

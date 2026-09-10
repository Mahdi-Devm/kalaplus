import Image from "next/image";
import {
  H2,
  Muted,
  Small,
} from "@/core/components/custom/ui/typography/Typography";
import { CalendarDays, ArrowLeft } from "lucide-react";

type BlComponent = {
  img: string;
  title: string;
  date: string;
};

const BlogComponent = ({ img, title, date }: BlComponent) => {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
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
        <H2 className="line-clamp-2 text-right text-lg font-bold leading-8 transition-colors duration-200 group-hover:text-primary sm:text-xl">
          {title}
        </H2>

        <div className="mt-4 flex items-center justify-start gap-2">
          <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
          <Muted className="text-sm">{date}</Muted>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <Small className="font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
            بیشتر بخوانید
          </Small>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogComponent;

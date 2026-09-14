import Image from "next/image";
import { H2, P } from "@/core/components/custom/ui/typography/Typography";

type BlogDetailType = {
  img: string;
  title: string;
  text: string;
};

const BlogDetailComponent = ({ img, title, text }: BlogDetailType) => {
  return (
    <article className="mx-auto w-full max-w-5xl">
      <div className="relative mb-8 h-[250px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:h-[450px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
          priority
        />
      </div>

      <H2 className="mb-6 text-right text-2xl font-bold leading-9 sm:text-3xl md:text-4xl md:leading-[1.7]">
        {title}
      </H2>

      <div className="max-w-4xl">
        <P className="text-right text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          {text}
        </P>
      </div>
    </article>
  );
};

export default BlogDetailComponent;

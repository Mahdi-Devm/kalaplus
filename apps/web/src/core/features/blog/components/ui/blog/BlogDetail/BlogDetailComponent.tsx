import { BlogPost } from "@/core/assets/@types/blog";
import { H1, P, Span } from "@/core/components/custom/ui/typography/Typography";
import Image from "next/image";
import Link from "next/link";

function BlogDetailComponent({ blog }: { blog: BlogPost }) {
  return (
    <article className="mx-auto w-full max-w-5xl">
      <div className="relative mb-8 h-[250px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:h-[450px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>

      {/* Meta */}
      <div className="mb-5 flex flex-wrap items-center justify-end gap-3 text-sm text-muted-foreground">
        <Link
          href={`/blog/category/${blog.categorySlug}`}
          className="rounded-full bg-muted px-3 py-1 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {blog.category}
        </Link>

        <span>{blog.publishedAt}</span>

        <span>•</span>

        <span>{blog.readTime}</span>

        <span>•</span>

        <span>{blog.views.toLocaleString("fa-IR")} بازدید</span>
      </div>

      {/* Title */}
      <H1 className="mb-6 text-right text-2xl font-bold leading-9 sm:text-3xl md:text-4xl md:leading-[1.7]">
        {blog.title}
      </H1>

      {/* Excerpt */}
      <div className="mb-8 rounded-xl border-r-4 border-primary bg-muted/40 p-4 sm:p-5">
        <P className="text-right text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          {blog.excerpt}
        </P>
      </div>

      {/* Content */}
      <div className="max-w-4xl">
        {blog.content.split("\n\n").map((paragraph, index) => (
          <P
            key={index}
            className="mb-6 text-right text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9"
          >
            {paragraph}
          </P>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap items-center justify-end gap-2 border-t pt-6">
        <Span className="ml-2 text-sm font-semibold">برچسب‌ها:</Span>

        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default BlogDetailComponent;

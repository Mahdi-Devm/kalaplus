"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Span, H2, P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";

import { bannerBlog } from "../../../assets/mock/blog/bannerBlog";

function BlogHeroSlider() {
  return (
    <section className="mb-12 w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="blog-hero-swiper w-full"
      >
        {bannerBlog.map((banner) => (
          <SwiperSlide key={banner.id}>
            <article className="group relative min-h-105 overflow-hidden rounded-3xl border bg-card ">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority={banner.id === 1}
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl text-right text-white">
                  <Span>{banner.category}</Span>
                  <H2 className="text-xl md:text-4xl">{banner.title}</H2>

                  <P>{banner.description}</P>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-white/70 sm:text-sm">
                      <Span>{banner.date}</Span>

                      <span className="h-1 w-1 rounded-full bg-white/50" />

                      <Span>{banner.readTime}</Span>
                    </div>
                    <Button
                      variant="secondary"
                      className="hover:bg-muted-foreground"
                    >
                      <Link href={`/blog/${banner.id}`}>
                        مطالعه مقاله
                        <Span aria-hidden>←</Span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link
        href="/blog"
        className="mt-5 flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted sm:hidden"
      >
        مشاهده همه مطالب
      </Link>
    </section>
  );
}

export default BlogHeroSlider;

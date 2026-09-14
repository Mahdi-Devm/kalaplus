"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
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
            <article className="group relative min-h-[420px] overflow-hidden rounded-3xl border bg-card sm:min-h-[500px] lg:min-h-[560px]">
              {/* Image */}
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority={banner.id === 1}
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-14">
                <div className="max-w-3xl text-right text-white">
                  {/* Category */}
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
                    {banner.category}
                  </span>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl font-black leading-[1.4] sm:text-3xl lg:text-5xl">
                    {banner.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                    {banner.description}
                  </p>

                  {/* Meta + CTA */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-white/70 sm:text-sm">
                      <span>{banner.date}</span>

                      <span className="h-1 w-1 rounded-full bg-white/50" />

                      <span>{banner.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${banner.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      مطالعه مقاله
                      <span aria-hidden>←</span>
                    </Link>
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

"use client";

import {
  H2,
  P,
  Small,
} from "@/core/components/custom/ui/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogPosts } from "@/core/features/blog/assets/mock/blog/blogPosts";

function BlogHeroSlider() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 5);

  return (
    <section className="mb-10" dir="rtl">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="h-[480px] sm:h-[520px] lg:h-[580px]"
        >
          {featuredPosts.map((post) => (
            <SwiperSlide key={post.id} className="relative">
              <Link
                href={`/blog/${post.slug}`}
                className="block relative h-full overflow-hidden rounded-2xl group"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                      <Small className="text-primary-foreground/80 whitespace-nowrap">
                        {post.publishedAt} · {post.readTime}
                      </Small>
                    </div>
                    <H2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 group-hover:underline">
                      {post.title}
                    </H2>
                    <P className="text-white/90 text-base sm:text-lg leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </P>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BlogHeroSlider;

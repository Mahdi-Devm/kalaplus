import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";

const smallImages = [
  {
    src: "/common/img/slider-img/Group-9 (1).png",
    alt: "تصویر معرفی",
  },
  {
    src: "/common/img/slider-img/Frame-32-300x131.png",
    alt: "تصویر معرفی",
  },
  {
    src: "/common/img/slider-img/Frame-33-e1730370867386 (1).png",
    alt: "تصویر معرفی",
  },
];

function HeroSectionImg() {
  return (
    <div className="mt-6 w-full px-4 sm:mt-8 lg:mt-10">
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <ImgNormalCustom
          src="/common/img/slider-img/story-m (1).png"
          width={850}
          height={850}
          alt="تصویر اصلی"
          className="h-auto w-full max-w-md rounded-2xl object-contain"
        />

        <div className="grid w-full max-w-2xl grid-cols-3 gap-2 sm:gap-3">
          {smallImages.map((image) => (
            <ImgNormalCustom
              key={image.src}
              src={image.src}
              width={300}
              height={300}
              alt={image.alt}
              className="h-auto w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </div>
      <div className="hidden justify-center gap-5 lg:flex">
        <div className="flex flex-col gap-5">
          {smallImages.map((image) => (
            <ImgNormalCustom
              key={image.src}
              src={image.src}
              width={300}
              height={300}
              alt={image.alt}
              className="h-auto w-75 rounded-2xl object-cover"
            />
          ))}
        </div>

        <ImgNormalCustom
          src="/common/img/slider-img/slider.png"
          width={850}
          height={850}
          alt="تصویر اصلی"
          className="h-auto w-212 rounded-2xl object-contain"
        />
      </div>
    </div>
  );
}

export default HeroSectionImg;

import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { sliderImages } from "../../../assets/mock/SlidbarImag";

function SliderImgPP() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {sliderImages.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`overflow-hidden rounded-2xl ${image.className}`}
        >
          <ImgNormalCustom
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default SliderImgPP;

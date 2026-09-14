import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";

function SliderImgPP() {
  return (
    <div className="grid w-full grid-cols-6 gap-3">
      <div className="col-span-4 overflow-hidden rounded-2xl">
        <ImgNormalCustom
          src="/common/img/slider-img/kp-banner-2-1536x320.png"
          alt="KalaPlus banner"
          width={1536}
          height={320}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-span-2 overflow-hidden rounded-2xl">
        <ImgNormalCustom
          src="/common/img/slider-img/kp-banner-1-1536x661.png"
          alt="KalaPlus banner"
          width={1536}
          height={661}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-span-2 overflow-hidden rounded-2xl">
        <ImgNormalCustom
          src="/common/img/slider-img/kp-banner-1-1536x661.png"
          alt="KalaPlus banner"
          width={1536}
          height={661}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-span-4 overflow-hidden rounded-2xl">
        <ImgNormalCustom
          src="/common/img/slider-img/kp-banner-3-1536x320.png"
          alt="KalaPlus banner"
          width={1536}
          height={320}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default SliderImgPP;

import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";

function HeroSectionImg() {
  return (
    <div className="flex gap-5 justify-center mt-10">
      <div className="space-y-5">
        <ImgNormalCustom
          src={"/common/img/slider-img/Group-9.png"}
          width={300}
          height={300}
          alt=""
        />
        <ImgNormalCustom
          src={"/common/img/slider-img/Frame-32.png"}
          width={300}
          height={300}
          alt=""
        />
        <ImgNormalCustom
          src={"/common/img/slider-img/Frame-33-e1730370867386.png"}
          width={300}
          height={300}
          alt=""
        />
      </div>
      <ImgNormalCustom
        src={"/common/img/slider-img/slider.png"}
        width={850}
        height={850}
        alt=""
      />
    </div>
  );
}

export default HeroSectionImg;

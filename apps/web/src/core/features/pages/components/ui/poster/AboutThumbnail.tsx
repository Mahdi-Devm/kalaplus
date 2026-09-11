import { ImgNormalCustom } from "@/core/components/custom/ui/image/ImgNormalCustom";
import { H3, P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { FiChevronLeft } from "react-icons/fi";

function AboutThumbnail() {
  return (
    <div className="relative">
      <div className="hidden md:block">
        <ImgNormalCustom
          src={"/common/img/about/IMG_20241113_181628_315.png"}
          width={1250}
          height={1250}
          alt=""
        />
        <div className="absolute md:top-10 lg:top-30 right-15 w-1/2 space-y-5">
          <H3>درباره کالا پلاس</H3>
          <P>
            فروشگاه اینترنتی کالا پلاس سال‌ها است که به‌عنوان بزرگترین فروشگاه
            کالای دیجیتال مشغول فعالیت است. از آن‌جا که خرید اینترنتی همواره
            موجی از بی‌اعتمادی و شک را با خود به‌همراه داشته، نماد الکترونیکی
            می‌تواند خیال خیلی از افراد را راحت کند.
          </P>
          <Button>
            بیشتر بدانید <FiChevronLeft />
          </Button>
        </div>
      </div>

      <div className="block md:hidden">
        <ImgNormalCustom
          src={"/common/img/about/bascet-mob.png"}
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutThumbnail;

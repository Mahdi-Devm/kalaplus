import { H2, P } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import Image from "next/image";
import Link from "next/link";
import { CiChat2, CiShoppingBasket } from "react-icons/ci";
function AboutHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 order-2 lg:order-1">
        <H2 className="text-3xl sm:text-4xl font-bold">کی هستیم؟</H2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <P>
            کالا پلاس یک فروشگاه تخصصی آنلاین در حوزه{" "}
            <span className="text-foreground font-semibold">
              پوشاک و تجهیزات ورزشی
            </span>{" "}
            است که با هدف ارائه بهترین محصولات با کیفیت و قیمت مناسب فعالیت خود
            را آغاز کرده است.
          </P>
          <P>
            ما با گردآوری محصولات از بهترین برندهای معتبر داخلی و خارجی، نیازهای
            ورزشکاران و علاقه‌مندان به ورزش را در یکجا پوشش می‌دهیم.
          </P>
          <P>
            تیم ما با درک عمیق از نیازهای مشتریان، همواره در تلاش است تا
            تجربه‌ای لذت‌بخش از خرید آنلاین را برای شما فراهم کند.
          </P>
        </div>
        <div className="flex flex-wrap  gap-4 pt-4 md:flex-wrap">
          <Button asChild className="gap-2 sm:w-1/3 w-full">
            <Link href="/products">
              <CiShoppingBasket className="w-5 h-5" />
              شروع خرید
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2  sm:w-1/3 w-full">
            <Link href="/contact">
              <CiChat2 className="w-5 h-5" />
              تماس با ما
            </Link>
          </Button>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative">
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/20 rounded-3xl" />
          <div className="absolute inset-2 bg-background rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
            <Image
              src="/common/img/about/images.jfif"
              alt="فروشگاه کالا پلاس"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

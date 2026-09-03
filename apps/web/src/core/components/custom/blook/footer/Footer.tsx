import Image from "next/image";
import footer1 from "../../../../../../public/common/img/footer/footer1img.png";
import footer2 from "../../../../../../public/common/img/footer/footer2img.png";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="pages-container grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <section className="space-y-4">
          <h2 className="text-lg font-bold">درباره‌ی کالاپلاس</h2>

          <p className="text-sm leading-7 text-muted-foreground">
            کالاپلاس یک قالب فروشگاهی سریع، منعطف و سازگار با نیاز کاربران
            ایرانی است. هدف ما ساخت تجربه‌ای حرفه‌ای، امن و ساده برای فروش
            محصولات فیزیکی و دیجیتال است.
          </p>

          <div className="flex items-center justify-start gap-3 pt-2">
            <Image
              src={footer1}
              alt="نماد اعتماد کالاپلاس"
              className="h-[120px] w-[110px] rounded-lg bg-background object-contain p-2"
            />

            <Image
              src={footer2}
              alt="نماد کالاپلاس"
              className="h-[120px] w-[110px] rounded-lg bg-background object-contain p-2 "
            />
          </div>
        </section>

        <nav aria-label="لینک‌های مفید">
          <h2 className="mb-5 text-lg font-bold">لینک‌های مفید</h2>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="/rules"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                قوانین و مقررات
              </a>
            </li>

            <li>
              <a
                href="/order-tracking"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                پیگیری سفارش
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                درباره ما
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                تماس با ما
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="خدمات کالاپلاس">
          <h2 className="mb-5 text-lg font-bold">خدمات کالاپلاس</h2>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="/services"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                خدمات کالاپلاس
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                فروشگاه محصولات
              </a>
            </li>

            <li>
              <a
                href="/account"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                حساب کاربری
              </a>
            </li>

            <li>
              <a
                href="/cart"
                className="inline-block transition-colors duration-200 hover:text-primary"
              >
                سبد خرید
              </a>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="mb-5 text-lg font-bold">ارتباط با ما</h2>

          <div className="space-y-5 text-sm">
            <div className="space-y-1">
              <h3 className="font-medium text-primary-foreground">پشتیبانی</h3>

              <a
                href="tel:+989000000000"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                989000000000
              </a>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-primary-foreground">ایمیل</h3>

              <a
                href="mailto:test@gmail.com"
                className="text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                test@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-primary-foreground">
                شبکه‌های اجتماعی
              </h3>

              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/mardi-niyayesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="گیت‌هاب نیایش مردی"
                    className="group flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <FaGithub className="text-lg transition-transform duration-200 group-hover:scale-110" />
                    <span>نیایش مردی</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Mahdi-Devm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="گیت‌هاب مهدی باقری"
                    className="group flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <FaGithub className="text-lg transition-transform duration-200 group-hover:scale-110" />
                    <span>مهدی باقری</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="pages-container flex min-h-16 items-center justify-center">
          <p className="text-center text-xs text-muted-foreground">
            تمامی حقوق این وب‌سایت متعلق به کالاپلاس است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

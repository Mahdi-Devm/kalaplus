import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { Separator } from "@/core/components/shadcn/ui/separator/separator";

import { H3, Muted, P, Span } from "../../ui/typography/Typography";

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <H3 className="mb-6 text-lg font-bold">{title}</H3>
      {children}
    </section>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 transition-colors duration-200 hover:text-primary"
      >
        <span className="h-1 w-1 rounded-full bg-muted-foreground transition-all duration-200 group-hover:w-2 group-hover:bg-primary" />

        <Span className="text-sm text-muted-foreground group-hover:text-primary">
          {children}
        </Span>
      </Link>
    </li>
  );
}

function Footer() {
  const usefulLinks = [
    { title: "وبلاگ", href: "/blog" },
    { title: "پیگیری سفارش", href: "/order-tracking" },
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
  ];

  const serviceLinks = [
    { title: "خدمات کالاپلاس", href: "/services" },
    { title: "فروشگاه محصولات", href: "/products" },
    { title: "حساب کاربری", href: "/account" },
    { title: "سبد خرید", href: "/cart" },
  ];

  return (
    <footer className="mx-4 mt-10 mb-4 overflow-hidden rounded-2xl border bg-foreground text-primary-foreground md:mx-6">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <FooterSection title="درباره‌ی کالاپلاس">
            <P className="text-sm leading-7 text-muted-foreground">
              کالاپلاس یک قالب فروشگاهی سریع، منعطف و سازگار با نیاز کاربران
              ایرانی است. هدف ما ساخت تجربه‌ای حرفه‌ای، امن و ساده برای فروش
              محصولات فیزیکی و دیجیتال است.
            </P>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-background p-2 transition-transform duration-200 hover:-translate-y-1">
                <Image
                  src={"/common/img/footer/footer1img.png"}
                  alt="نماد اعتماد کالاپلاس"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-background p-2 transition-transform duration-200 hover:-translate-y-1">
                <Image
                  src={"/common/img/footer/footer2img.png"}
                  alt="نماد کالاپلاس"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </FooterSection>

          <FooterSection title="لینک‌های مفید">
            <nav aria-label="لینک‌های مفید">
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.title}
                  </FooterLink>
                ))}
              </ul>
            </nav>
          </FooterSection>

          <FooterSection title="خدمات کالاپلاس">
            <nav aria-label="خدمات کالاپلاس">
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.title}
                  </FooterLink>
                ))}
              </ul>
            </nav>
          </FooterSection>

          <FooterSection title="ارتباط با ما">
            <div className="space-y-6">
              <div>
                <Muted className="mb-1 font-medium text-primary-foreground">
                  پشتیبانی
                </Muted>

                <Link
                  href="tel:+989000000000"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  989000000000
                </Link>
              </div>

              <div>
                <Muted className="mb-1 font-medium text-primary-foreground">
                  ایمیل
                </Muted>

                <Link
                  href="mailto:test@gmail.com"
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  test@gmail.com
                </Link>
              </div>

              <div>
                <Muted className="mb-3 font-medium text-primary-foreground">
                  شبکه‌های اجتماعی
                </Muted>

                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/mardi-niyayesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="گیت‌هاب نیایش مردی"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaGithub className="text-lg" />
                  </Link>

                  <Link
                    href="https://github.com/Mahdi-Devm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="گیت‌هاب مهدی باقری"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <FaGithub className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          </FooterSection>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between">
          <Muted className="text-xs">
            تمامی حقوق این وب‌سایت متعلق به کالاپلاس است.
          </Muted>

          <Muted className="text-xs">طراحی و توسعه با ❤️</Muted>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

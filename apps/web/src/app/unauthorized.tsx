import { Big, H3, P } from "@/core/components/custom/ui/typography/Typography";
import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Home, LogIn } from "lucide-react";
import Link from "next/link";

export default function Unauthorized() {
  return (
    <SectionLayout className="flex items-center justify-center overflow-hidden relative bg-linear-to-b from-background via-background to-red-500/5">
      <div className="space-y-10 w-full relative z-10 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-8 w-full max-w-2xl">
            <div className="relative inline-block mx-auto">
              <Big className="text-[120px] sm:text-[160px] lg:text-[200px] font-black text-red-500/5 select-none tracking-tighter leading-none">
                403
              </Big>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl sm:text-8xl lg:text-9xl">🚫</div>
              </div>
            </div>

            <div className="space-y-4">
              <H3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                دسترسی غیرمجاز!
                <br />
                <span className="text-red-500">شما اجازه ورود ندارید</span>
              </H3>

              <P className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                برای دسترسی به این صفحه باید وارد حساب کاربری خود شوید.
                <br />
                اگر حساب کاربری ندارید، ثبت‌نام کنید.
              </P>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="gap-2 px-8 shadow-xl shadow-red-500/30 hover:shadow-red-500/40 transition-all duration-300 text-base"
              >
                <Link href="/login">
                  <LogIn className="w-5 h-5" />
                  ورود به حساب
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8 text-base border-2"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  بریم خونه
                </Link>
              </Button>
            </div>

            <P className="text-xs text-muted-foreground/40 font-mono pt-2">
              Error 403 • Access Denied • {new Date().getFullYear()} • کالا پلاس
            </P>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

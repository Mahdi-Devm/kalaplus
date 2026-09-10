import { Big, H3, P } from "@/core/components/custom/ui/typography/Typography";
import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { ArrowLeft, HelpCircle, Home, Package } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionLayout className="flex items-center justify-center overflow-hidden relative bg-linear-to-b from-background via-background to-primary/5">
      <div className="space-y-10 w-full relative z-10 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-8 w-full max-w-2xl">
            <div className="relative inline-block mx-auto">
              <Big className="text-[120px] sm:text-[160px] lg:text-[200px] font-black text-primary/5 select-none tracking-tighter leading-none">
                404
              </Big>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl sm:text-8xl lg:text-9xl animate-bounce-slow">
                  🤔
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <H3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                صفحه گم شد!
                <br />
                <span className="text-primary">مثل یه کالا در انبار</span>
              </H3>

              <P className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                انگار صفحه‌ای که دنبالش هستی توی انبار کالا پلاس گم شده!
                <br />
                نگران نباش، ما پیداش می‌کنیم.
              </P>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="gap-2 px-8 shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 text-base"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  بریم خونه
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8 text-base border-2"
              >
                <Link href="/products">
                  <Package className="w-5 h-5" />
                  محصولات
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                صفحه اصلی
              </Link>
              <span className="text-muted-foreground/20">•</span>
              <Link
                href="/help"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <HelpCircle className="w-4 h-4" />
                راهنما
              </Link>
              <span className="text-muted-foreground/20">•</span>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                تماس با ما
              </Link>
            </div>

            <P className="text-xs text-muted-foreground/40 font-mono pt-2">
              Error 404 • Page Not Found • {new Date().getFullYear()} • کالا
              پلاس
            </P>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

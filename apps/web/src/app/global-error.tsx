"use client";

import { Big, H3, P } from "@/core/components/custom/ui/typography/Typography";
import SectionLayout from "@/core/components/custom/ui/wrapper/SectionLayout";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    console.error("Application Error:", error);
    setTime(new Date().toLocaleTimeString("fa-IR"));
  }, [error]);

  return (
    <SectionLayout className="flex items-center justify-center overflow-hidden relative bg-linear-to-b from-background via-background to-destructive/5">
      <div className="space-y-10 w-full relative z-10 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-8 w-full max-w-2xl">
            <div className="relative inline-block mx-auto">
              <Big className="text-[120px] sm:text-[160px] lg:text-[200px] font-black text-destructive/5 select-none tracking-tighter leading-none">
                500
              </Big>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl sm:text-8xl lg:text-9xl">😵</div>
              </div>
            </div>

            <div className="space-y-4">
              <H3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                یه مشکل فنی!
                <br />
                <span className="text-destructive">
                  تیم ما در حال برطرف کردنشه
                </span>
              </H3>

              <P className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                انگار سیستم خرید یه کم قاطی کرده!
                <br />
                چند لحظه صبر کن، درستش می‌کنیم.
              </P>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button
                onClick={reset}
                size="lg"
                className="gap-2 px-8 shadow-xl shadow-destructive/30 hover:shadow-destructive/40 transition-all duration-300 text-base"
              >
                <RefreshCw className="w-5 h-5" />
                دوباره تلاش
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

            <div className="bg-muted/30 rounded-xl p-4 max-w-sm mx-auto space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">زمان ثبت:</span>
                <span className="font-mono text-xs">
                  {time || "در حال بارگذاری..."}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">خطا:</span>
                <span className="font-mono text-xs text-destructive/70">
                  {error.name || "Server Error"}
                </span>
              </div>
              {process.env.NODE_ENV === "development" && error.message && (
                <div className="mt-2 p-2 bg-destructive/5 rounded border border-destructive/10">
                  <P className="text-xs text-muted-foreground font-mono break-all">
                    {error.message}
                  </P>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

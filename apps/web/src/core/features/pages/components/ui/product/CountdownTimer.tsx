"use client";

import { useEffect, useState } from "react";

const TIMER_UNITS = [
  { key: "hours", label: "ساعت" },
  { key: "minutes", label: "دقیقه" },
  { key: "seconds", label: "ثانیه" },
] as const;

export function CountdownTimer({ deadline }: { deadline: number }) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, deadline - Date.now()),
  );

  useEffect(() => {
    const update = () => {
      setRemaining(Math.max(0, deadline - Date.now()));
    };

    update();

    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, [deadline]);

  const totalSeconds = Math.floor(remaining / 1000);

  if (remaining <= 0) {
    return (
      <span className="text-xs text-primary-foreground/70">
        تخفیف به پایان رسید
      </span>
    );
  }

  const time = {
    hours: String(Math.floor(totalSeconds / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(totalSeconds % 60).padStart(2, "0"),
  };

  return (
    <div>
      <p className="mb-2 text-[10px] text-primary-foreground/70">
        زمان باقی‌مانده
      </p>

      <div className="flex items-center gap-1" dir="ltr">
        {TIMER_UNITS.map(({ key, label }, index) => (
          <div key={key} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-xs font-bold text-white/50">:</span>
            )}

            <div className="text-center">
              <div
                className="
                  grid
                  size-8
                  place-items-center
                  rounded-lg
                  border
                  border-white/10
                  bg-white/15
                  text-xs
                  font-bold
                  tabular-nums
                  backdrop-blur-md
                "
              >
                {time[key]}
              </div>

              <span
                className="
                  mt-1
                  block
                  text-[8px]
                  text-primary-foreground/60
                "
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

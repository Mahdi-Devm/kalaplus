"use client";

import { cn } from "@/core/utils/shadcn/utils";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  className?: string;
}

function formatToman(n: number) {
  return n.toLocaleString("fa-IR");
}

/**
 * A dual-thumb range slider for price filtering.
 * Radix doesn't ship a slider primitive in this project's dependencies,
 * so this is built from two stacked native <input type="range"> elements.
 * Uses CSS logical properties (inset-inline-*) so it flips correctly for RTL.
 */
export function PriceRangeSlider({
  min,
  max,
  step = 1000,
  value,
  onChange,
  className,
}: PriceRangeSliderProps) {
  const [minVal, maxVal] = value;

  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Math.min(Number(e.target.value), maxVal - step);
    onChange([next, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Math.max(Number(e.target.value), minVal + step);
    onChange([minVal, next]);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative h-1.5 w-full rounded-full bg-secondary">
        <div
          className="absolute h-1.5 rounded-full bg-primary"
          style={{
            insetInlineStart: `${minPercent}%`,
            insetInlineEnd: `${100 - maxPercent}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className="range-thumb pointer-events-none absolute inset-0 h-1.5 w-full appearance-none bg-transparent [direction:rtl]"
          aria-label="حداقل قیمت"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className="range-thumb pointer-events-none absolute inset-0 h-1.5 w-full appearance-none bg-transparent [direction:rtl]"
          aria-label="حداکثر قیمت"
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatToman(minVal)} تومان</span>
        <span>{formatToman(maxVal)} تومان</span>
      </div>

      <style jsx>{`
        .range-thumb::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: var(--primary);
          border: 2px solid var(--card);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }
        .range-thumb::-moz-range-thumb {
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: var(--primary);
          border: 2px solid var(--card);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }
        .range-thumb::-webkit-slider-runnable-track {
          background: transparent;
        }
        .range-thumb::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
}

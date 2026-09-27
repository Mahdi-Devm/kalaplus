"use client";

import { ProductType } from "@/core/assets/types/product/ProductType";
import { P, Span } from "@/core/components/custom/ui/typography/Typography";
import { cn } from "@/core/utils/shadcn/utils";
import { useState } from "react";

interface ProductTabsProps {
  product: ProductType;
  className?: string;
}

type TabKey = "description" | "specs";

const TABS: { key: TabKey; label: string }[] = [
  { key: "description", label: "توضیحات" },
  { key: "specs", label: "مشخصات فنی" },
];

export function ProductTabs({ product, className }: ProductTabsProps) {
  const [active, setActive] = useState<TabKey>("description");

  const specs: { label: string; value: string }[] = [
    {
      label: "دسته‌بندی",
      value: product.category.title,
    },

    ...(product.materials?.length
      ? [
          {
            label: "جنس",
            value: product.materials.join("، "),
          },
        ]
      : []),

    ...(product.colors?.length
      ? [
          {
            label: "رنگ‌های موجود",
            value: product.colors.join("، "),
          },
        ]
      : []),

    ...(product.sizes?.length
      ? [
          {
            label: "سایزهای موجود",
            value: product.sizes.join("، "),
          },
        ]
      : []),

    {
      label: "موجودی",
      value: Number(product.stock) > 0 ? `${product.stock} عدد` : "ناموجود",
    },
  ];

  return (
    <div className={cn("rounded-xl border border-border bg-card", className)}>
      <div className="flex border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              "relative px-5 py-3 text-sm font-medium transition-colors",
              active === tab.key
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}

            {active === tab.key && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      <div className="p-5">
        {active === "description" ? (
          <div className="space-y-4">
            {product.shortDescription && (
              <P className="font-medium leading-7 text-foreground">
                {product.shortDescription}
              </P>
            )}

            <P className="whitespace-pre-line leading-8 text-muted-foreground">
              {product.description}
            </P>
          </div>
        ) : (
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between gap-4 rounded-lg bg-secondary/40 px-4 py-3"
              >
                <Span className="shrink-0 text-sm text-muted-foreground">
                  {spec.label}
                </Span>

                <Span className="text-left text-sm font-medium text-foreground">
                  {spec.value}
                </Span>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

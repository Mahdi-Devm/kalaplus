"use client";

import { GetAllCategories } from "@/core/features/panel/assets/@types/category/GetAllCategories";
import { GET_ALL_CATEGORY } from "@/core/gql-shcema/actionCategoryShema.gql";
import { useQuery } from "@apollo/client/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CategoryShopFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, loading } = useQuery<GetAllCategories>(GET_ALL_CATEGORY);
  const categories = data?.categories || [];
  const selectedCategoryId = searchParams.get("filter_categoryId");

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategoryId === categoryId) {
      params.delete("filter_categoryId");
    } else {
      params.set("filter_categoryId", categoryId);
    }

    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-10 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {categories?.map((category) => {
        const active = selectedCategoryId === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => handleCategoryChange(category.id)}
            className={`rounded-lg border p-3 text-sm transition-colors ${
              active
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:bg-secondary"
            }`}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}

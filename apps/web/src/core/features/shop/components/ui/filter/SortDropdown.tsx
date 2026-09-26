"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu/dropdown-menu";
import { SortBy } from "@/core/assets/types/sortBy";
import { useUpdateQuery } from "@/core/hooks/useUpdataQuery";
import { getSortBy } from "@/core/utils/getsortBy";
import { cn } from "@/core/utils/shadcn/utils";
import { FiSliders } from "react-icons/fi";

interface SortDropdownProps {
  value: string;
  className?: string;
}

const SORT_FIELD = "price";

export function SortDropdown({ value, className }: SortDropdownProps) {
  const updateQuery = useUpdateQuery();

  const handleSortChange = (value: string) => {
    const sort = value as SortBy;

    const sortBy = `${SORT_FIELD}:${sort}`;

    updateQuery("sortBy", sortBy);
  };

  const sortOptions = Object.values(SortBy) as SortBy[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
            className,
          )}
        >
          <FiSliders className="h-4 w-4" />
          مرتب سازی
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuRadioGroup value={value} onValueChange={handleSortChange}>
          {sortOptions.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              {getSortBy(option)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

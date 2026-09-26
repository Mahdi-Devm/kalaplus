"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu/dropdown-menu";
import { cn } from "@/core/utils/shadcn/utils";
import { FiSliders } from "react-icons/fi";
import { SORT_OPTIONS } from "../../../assets/mock/shopData";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SortDropdown({
  value,
  onChange,
  className,
}: SortDropdownProps) {
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
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

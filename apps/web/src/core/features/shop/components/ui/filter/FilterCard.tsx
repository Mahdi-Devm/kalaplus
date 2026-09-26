import { Span } from "@/core/components/custom/ui/typography/Typography";
import React from "react";

function FilterCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border bg-foreground-box p-4">
      <div className="mb-3 flex items-center gap-2">
        <Span className="font-medium">{title}</Span>
        <span className="h-px flex-1 border-t border-dashed border-border" />
      </div>
      {children}
    </div>
  );
}

export default FilterCard;

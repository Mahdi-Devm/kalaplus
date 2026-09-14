import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Badge } from "@/core/components/shadcn/ui/badge/badge";

interface ProductAttributesCellProps {
  items?: string[] | null;
  emptyText?: string;
  max?: number;
}

export function ProductAttributesCell({
  items,
  emptyText = "-",
  max = 2,
}: ProductAttributesCellProps) {
  if (!items?.length) {
    return <Span className="text-gray-400">{emptyText}</Span>;
  }

  const visible = items.slice(0, max);
  const rest = items.length - max;

  return (
    <div className="flex flex-wrap gap-1">
      {visible.map((item) => (
        <Badge key={item} variant="default" className="text-xs">
          {item}
        </Badge>
      ))}
      {rest > 0 && (
        <Badge variant="outline" className="text-xs">
          +{rest}
        </Badge>
      )}
    </div>
  );
}

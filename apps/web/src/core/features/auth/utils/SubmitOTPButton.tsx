import { Button } from "@/core/components/shadcn/ui/button/button";
import { useFormStatus } from "react-dom";

export function SubmitOTPButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="flex-1" disabled={pending}>
      {pending ? "در حال تایید..." : "تایید کد"}
    </Button>
  );
}

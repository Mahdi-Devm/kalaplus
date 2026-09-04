import { Button } from "@/core/components/shadcn/ui/button/button";
import { useFormStatus } from "react-dom";

export function SubmitPhoneButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full mt-6" disabled={pending}>
      {pending ? "در حال ارسال..." : "ارسال کد تایید"}
    </Button>
  );
}

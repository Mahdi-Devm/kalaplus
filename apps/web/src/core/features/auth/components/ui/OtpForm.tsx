"use client";

import Form from "next/form";

import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/core/components/shadcn/ui/input-otp/input-otp";
import { SubmitOTPButton } from "../../utils/SubmitOTPButton";

interface OtpFormProps {
  otp: string;
  loading: boolean;
  onOtpChange: (otp: string) => void;
  onBack: () => void;
  onSubmit: (formData: FormData) => void;
}

export function OtpForm({
  otp,
  loading,
  onOtpChange,
  onBack,
  onSubmit,
}: OtpFormProps) {
  return (
    <Form action={onSubmit}>
      <div className="space-y-4">
        <div className="flex justify-center">
          <InputOTP maxLength={5} value={otp} onChange={onOtpChange} name="otp">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={onBack}
            disabled={loading}
          >
            ویرایش شماره
          </Button>

          <SubmitOTPButton />
        </div>
      </div>
    </Form>
  );
}

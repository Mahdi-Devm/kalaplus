"use client";

import Form from "next/form";

import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Input } from "@/core/components/shadcn/ui/input/input";
import { SubmitPhoneButton } from "../../utils/SubmitPhoneButton";

interface PhoneFormProps {
  phone: string;
  loading: boolean;
  rememberMe: boolean;
  onPhoneChange: (phone: string) => void;
  onRememberMeChange: (value: boolean) => void;
  onSubmit: (formData: FormData) => void;
}

export function PhoneForm({
  phone,
  loading,
  rememberMe,
  onPhoneChange,
  onRememberMeChange,
  onSubmit,
}: PhoneFormProps) {
  return (
    <Form action={onSubmit}>
      <Input
        placeholder="09924164032"
        label="شماره تلفن"
        name="phone"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        dir="ltr"
        disabled={loading}
      />

      <div className="mt-4">
        <label
          htmlFor="remember-me"
          className="flex cursor-pointer select-none items-center gap-3"
        >
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => onRememberMeChange(e.target.checked)}
            className="h-4 w-4 cursor-pointer text-primary focus:ring-1 focus:ring-primary accent-primary"
            disabled={loading}
          />

          <Span className="text-sm">مرا به خاطر بسپار</Span>
        </label>
      </div>

      <SubmitPhoneButton />
    </Form>
  );
}

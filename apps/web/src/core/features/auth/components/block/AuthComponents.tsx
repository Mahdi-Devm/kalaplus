"use client";
import Modal from "@/core/components/custom/ui/modal/Modal";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/core/components/shadcn/ui/input-otp/input-otp";
import { Input } from "@/core/components/shadcn/ui/input/input";
import Form from "next/form";
import { Activity, useState } from "react";
import { useFormStatus } from "react-dom";
import { UserIconHeader } from "../../../../../../public/common/img/header/userIconHeader";
import { SubmitOTPButton } from "../../utils/SubmitOTPButton";
import { SubmitPhoneButton } from "../../utils/SubmitPhoneButton";

function AuthComponents() {
  const [open, setopen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  function handleSendOTP(formData: FormData) {
    const phoneValue = formData.get("phone") as string;
    if (phoneValue?.trim()) {
      console.log("Sending OTP to:", phoneValue);
      setPhone(phoneValue);
      setIsOtpSent(true);
    }
  }

  function handleVerifyOTP(formData: FormData) {
    const otpValue = formData.get("otp") as string;
    if (otpValue?.length === 6) {
      setopen(false);
      setTimeout(() => {
        setIsOtpSent(false);
        setOtp("");
        setPhone("");
      }, 300);
    }
  }

  function handleBack() {
    setIsOtpSent(false);
    setOtp("");
  }

  function handleOpenChange(isOpen: boolean) {
    setopen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setIsOtpSent(false);
        setOtp("");
        setPhone("");
      }, 300);
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      hideDefaultFooter={true}
      size="md"
      title={isOtpSent ? "تایید کد" : "ثبت نام"}
      description={
        isOtpSent
          ? `کد تایید به شماره ${phone} ارسال شد`
          : "وارد شدن به کالا پلاس :)"
      }
      trigger={
        <Button variant="secondary" className="bg-gray-200 hover:text-white">
          <UserIconHeader />
          <Span className="font-medium">حساب کاربری</Span>
        </Button>
      }
    >
      <Activity mode={isOtpSent ? "hidden" : "visible"}>
        <Form action={handleSendOTP}>
          <Input
            placeholder="09924164032"
            label="شماره تلفن"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />
          <div className="mt-4">
            <label
              htmlFor="remember-me"
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: "var(--primary)" }}
                className="w-4 h-4 text-primary focus:ring-primary focus:ring-1 cursor-pointer"
              />
              <Span className="text-sm">مرا به خاطر بسپار</Span>
            </label>
          </div>
          <SubmitPhoneButton />
        </Form>
      </Activity>

      <Activity mode={isOtpSent ? "visible" : "hidden"}>
        <Form action={handleVerifyOTP}>
          <div className="space-y-4">
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleBack}
                disabled={useFormStatus().pending}
              >
                ویرایش شماره
              </Button>
              <SubmitOTPButton />
            </div>
          </div>
        </Form>
      </Activity>
    </Modal>
  );
}

export default AuthComponents;

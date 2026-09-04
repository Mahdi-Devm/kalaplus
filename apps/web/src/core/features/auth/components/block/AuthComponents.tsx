"use client";

import Modal from "@/core/components/custom/ui/modal/Modal";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";

import { Activity, useState } from "react";
import { toast } from "sonner";

import { UserIconHeader } from "../../../../../../public/common/img/header/userIconHeader";
import { useAuth } from "../../hook/useAuth";
import { OtpForm } from "../ui/OtpForm";
import { PhoneForm } from "../ui/PhoneForm";

function AuthComponents() {
  const [open, setOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState("");

  const {
    phone,
    isOtpSent,
    requestLoading,
    verifyLoading,
    sendOtp,
    verifyOtp,
    resetAuth,
    setPhone,
  } = useAuth();

  async function handleSendOTP(formData: FormData) {
    const phoneValue = formData.get("phone") as string;

    await sendOtp(phoneValue);
  }

  async function handleVerifyOTP(formData: FormData) {
    const otpValue = formData.get("otp") as string;

    if (otpValue.length !== 5) {
      toast.error("کد تایید باید ۵ رقم باشد");
      return;
    }

    const success = await verifyOtp(otpValue);

    if (!success) return;

    setOpen(false);
    setOtp("");
    resetAuth();
  }

  function handleBack() {
    setOtp("");
    resetAuth();
  }

  function handleOpenChange(isOpen: boolean) {
    setOpen(isOpen);

    if (!isOpen) {
      setTimeout(() => {
        setOtp("");
        resetAuth();
      }, 300);
    }
  }

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      hideDefaultFooter
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
        <PhoneForm
          phone={phone}
          loading={requestLoading}
          rememberMe={rememberMe}
          onPhoneChange={setPhone}
          onRememberMeChange={setRememberMe}
          onSubmit={handleSendOTP}
        />
      </Activity>

      <Activity mode={isOtpSent ? "visible" : "hidden"}>
        <OtpForm
          otp={otp}
          loading={verifyLoading}
          onOtpChange={setOtp}
          onBack={handleBack}
          onSubmit={handleVerifyOTP}
        />
      </Activity>
    </Modal>
  );
}

export default AuthComponents;

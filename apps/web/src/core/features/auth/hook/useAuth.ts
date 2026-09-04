"use client";

import { BASE_URL } from "@/core/lib/basic-link/BackendBasicLink";
import { getErrorMessage } from "@/core/utils/getErrorMessage";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { toast } from "sonner";
import { REQUEST_OTP } from "../gql-shcema/RequestOtp.gql";

export function useAuth() {
  const [requestOtp, { loading: requestLoading }] = useMutation(REQUEST_OTP);

  const [verifyLoading, setVerifyLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  async function sendOtp(phone: string) {
    if (!phone.trim()) {
      toast.error("شماره تلفن وارد کنید");
      return false;
    }

    try {
      await requestOtp({
        variables: {
          input: {
            phone,
          },
        },
      });

      setPhone(phone);
      setIsOtpSent(true);

      return true;
    } catch (error) {
      toast.error(getErrorMessage(error));
      return false;
    }
  }

  async function verifyOtp(otp: string) {
    if (otp.length !== 5) return false;

    setVerifyLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/vrify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          phone,
          otp,
        }),
      });

      if (!response.ok) {
        throw new Error("کد تایید نامعتبر است");
      }

      return true;
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "کد تایید نامعتبر است",
      );

      return false;
    } finally {
      setVerifyLoading(false);
    }
  }

  function resetAuth() {
    setPhone("");
    setIsOtpSent(false);
  }

  return {
    phone,
    isOtpSent,
    requestLoading,
    verifyLoading,
    sendOtp,
    verifyOtp,
    resetAuth,
    setPhone,
  };
}

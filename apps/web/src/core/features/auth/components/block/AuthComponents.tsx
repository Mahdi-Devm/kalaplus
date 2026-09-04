"use client";
import Modal from "@/core/components/custom/ui/modal/Modal";
import { Span } from "@/core/components/custom/ui/typography/Typography";
import { Button } from "@/core/components/shadcn/ui/button/button";
import { useState } from "react";
import { UserIconHeader } from "../../../../../../public/common/img/header/userIconHeader";

function AuthComponents() {
  const [open, setopen] = useState(false);
  return (
    <Modal
      open={open}
      onOpenChange={setopen}
      trigger={
        <Button variant={"secondary"} className="bg-gray-200  hover:text-white">
          <UserIconHeader />
          <Span className={"font-medium"}>حساب کاربری</Span>
        </Button>
      }
    >
      hi
    </Modal>
  );
}

export default AuthComponents;

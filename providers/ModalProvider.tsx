"use client";
import ConfirmCancelModal from "@/components/modals/ConfirmCancelModal";
import EditModal from "@/components/modals/EditModal";
import LoginModal from "@/components/modals/LoginModal";
import LogoutModal from "@/components/modals/LogoutModal";
import RegisterModal from "@/components/modals/RegisterModal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <LogoutModal />
      <ConfirmCancelModal />
      <EditModal />
    </>
  );
};

export default ModalProvider;

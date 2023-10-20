"use client";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import useAuthModal from "@/hooks/useAuthModal";
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
    <div>
      <LoginModal />
      <RegisterModal />
    </div>
  );
};

export default ModalProvider;

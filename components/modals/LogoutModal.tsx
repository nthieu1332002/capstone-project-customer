"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { Modal } from "antd";
import { signOut } from "next-auth/react";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const LogoutModal = () => {
  const { isOpen, onClose, type } = useAuthModal();
  const isModalOpen = isOpen && type === "logout";

  const handleOk = () => {
    signOut();
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={<p className="text-red-500 border-red-500">Xác nhận</p>}
      cancelText="Hủy"
      footer={(_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <OkBtn />
        </>
      )}
    >
      <p className="text-lg flex items-center gap-2">
        <RiErrorWarningLine size={23} className="text-red-500" />
        Bạn có chắc chắn muốn đăng xuất?
      </p>
    </Modal>
  );
};

export default LogoutModal;

"use client";
import useCancelModal from "@/hooks/useCancelModal";
import { axios } from "@/lib/axios";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { RiErrorWarningLine } from "react-icons/ri";

const ConfirmCancelModal = () => {
  const { isOpen, onClose, code, identifier } = useCancelModal();
  const [isPending, startTransition] = useTransition();

  const isModalOpen = isOpen;
  console.log("code", code);
  console.log("iden", identifier);
  const router = useRouter();
  const handleOk = async () => {
    startTransition(async () => {
      try {
        const res = await axios.put(`/api/customer/orders/${code}/cancelled`, {
          identifier,
        });
        console.log("res", res);
        if (res.status === 200) {
          toast.success("Hủy đơn hàng thành công!");
          onClose();
        }
        router.refresh();
      } catch (error) {
        toast.error("Hủy đơn hàng thất bại!");
        onClose();
      }
    });
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={<span className="text-red-500 border-red-500">Xác nhận</span>}
      cancelText="Hủy"
      confirmLoading={isPending}
      footer={(_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <OkBtn />
        </>
      )}
    >
      <p className="text-lg flex items-center gap-2">
        <RiErrorWarningLine size={23} className="text-red-500" />
        Bạn có chắc chắn hủy đơn hàng này không?
      </p>
    </Modal>
  );
};

export default ConfirmCancelModal;

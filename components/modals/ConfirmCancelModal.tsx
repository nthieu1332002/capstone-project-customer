"use client";
import useCancelModal from "@/hooks/useCancelModal";
import { axios } from "@/lib/axios";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiErrorWarningLine } from "react-icons/ri";

const ConfirmCancelModal = () => {
  const { isOpen, onClose, code, identifier } = useCancelModal();
  const [loading, setLoading] = useState(false);
  const isModalOpen = isOpen;
  const router = useRouter();
  const handleOk = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`/api/customer/orders/${code}/cancelled`, {
        identifier,
      });
      if (res.status === 200) {
        toast.success("Hủy đơn hàng thành công!");
        router.refresh();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
      toast.error("Hủy đơn hàng thất bại!");
    }
    setLoading(false);
    onClose();
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
      confirmLoading={loading}
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

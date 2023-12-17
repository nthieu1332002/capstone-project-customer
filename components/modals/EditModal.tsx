"use client";
import useEditModal from "@/hooks/useEditModal";
import { axios } from "@/lib/axios";
import { phoneNumberPattern } from "@/lib/constants";
import { Divider, Form, Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
type EditType = {
  sender_name: string;
  sender_phone: string;
  sender_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
};
const EditModal = () => {
  const [form] = Form.useForm();

  const { isOpen, onClose, code } = useEditModal();
  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState<EditType | undefined>();
  const isModalOpen = isOpen;
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/customer/orders/${code}`);
        setOrder(res.data.data.attributes);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch data when the modal opens
    if (isModalOpen) {
      fetchData();
    }
  }, [isModalOpen, code]);
  const handleOk = async () => {
    setLoading(true);
    try {
      form.validateFields().then(async (fieldsValue) => {
        const res = await axios.put(`/api/customer/orders/${code}`, {
          sender_name: fieldsValue["sender_name"],
          sender_phone:fieldsValue["sender_phone"],
          sender_email: fieldsValue["sender_email"],
          receiver_name:fieldsValue["receiver_name"],
          receiver_phone: fieldsValue["receiver_phone"],
          receiver_email:fieldsValue["receiver_email"],
        });
        if (res.status === 200) {
          toast.success("Cập nhật thành công!");
          router.refresh();
        }
      });
    } catch (error: any) {
      toast.error("Cập nhật  thất bại!");
    }
    setLoading(false);
    onClose();
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={() => onClose()}
      title={<p className="text-lg">Chỉnh sửa đơn hàng</p>}
      okText={
        <span className="text-primary-color hover:text-white">Xác nhận</span>
      }
      cancelText="Hủy"
      confirmLoading={loading}
    >
      <Form
        form={form}
        id="edit-order-form"
        name="edit-order-form"
        layout="vertical"
        autoComplete="on"
        style={{
          width: "100%",
        }}
        initialValues={{
          sender_name: order?.sender_name,
          sender_phone: order?.sender_phone,
          sender_email: order?.sender_email,
          receiver_name: order?.receiver_name,
          receiver_phone: order?.receiver_phone,
          receiver_email: order?.receiver_email,
        }}
        fields={[
          {
            name: ["sender_name"],
            value: order?.sender_name,
          },
          {
            name: ["sender_phone"],
            value: order?.sender_phone,
          },
          {
            name: ["sender_email"],
            value: order?.sender_email,
          },
          {
            name: ["receiver_name"],
            value: order?.receiver_name,
          },
          {
            name: ["receiver_phone"],
            value: order?.receiver_phone,
          },
          {
            name: ["receiver_email"],
            value: order?.receiver_email,
          },
        ]}
      >
        <h2 className="font-medium text-center">Bên gửi</h2>
        <Form.Item
          label={<p className="font-medium text-sm">Họ và tên</p>}
          name="sender_name"
          rules={[
            {
              required: true,
              message: "Họ và tên không được bỏ trống.",
            },
            {
              type: "string",
              message: "Họ và tên phải là kí tự.",
            },
          ]}
          className="!mb-3"
        >
          <Input
            placeholder="Họ và tên người gửi"
            className="custom-search-sidebar"
          />
        </Form.Item>
        <div className="flex flex-col md:flex-row justify-between md:gap-5">
          <Form.Item
            label={<p className="font-medium text-sm">Số điện thoại</p>}
            validateTrigger="onBlur"
            name="sender_phone"
            rules={[
              {
                required: true,
                message: "Số điện thoại không được bỏ trống.",
              },
              {
                pattern: phoneNumberPattern,
                message: "Số điện thoại không đúng định dạng.",
              },
            ]}
            className="!mb-3 flex-1"
          >
            <Input
              placeholder="Nhập số điện thoại"
              className="custom-search-sidebar"
            />
          </Form.Item>

          <Form.Item
            label={<p className="font-medium text-sm">Email</p>}
            validateTrigger="onBlur"
            name="sender_email"
            rules={[
              {
                required: true,
                message: "Email không được bỏ trống.",
              },
              {
                type: "email",
                message: "Email không đúng định dạng.",
              },
            ]}
            className="!mb-3 flex-1"
          >
            <Input placeholder="Nhập email" className="custom-search-sidebar" />
          </Form.Item>
        </div>
        <Divider />

        <h2 className="font-medium text-center">Bên nhận</h2>

        <Form.Item
          label={<p className="font-medium text-sm">Họ và tên</p>}
          name="receiver_name"
          rules={[
            {
              required: true,
              message: "Họ và tên không được bỏ trống.",
            },
            {
              type: "string",
              message: "Họ và tên phải là kí tự.",
            },
          ]}
          className="!mb-3"
        >
          <Input
            placeholder="Họ và tên người nhận"
            className="custom-search-sidebar"
          />
        </Form.Item>
        <div className="flex flex-col md:flex-row justify-between md:gap-5">
          <Form.Item
            label={<p className="font-medium text-sm">Số điện thoại</p>}
            validateTrigger="onBlur"
            name="receiver_phone"
            rules={[
              {
                required: true,
                message: "Số điện thoại không được bỏ trống.",
              },
              {
                pattern: phoneNumberPattern,
                message: "Số điện thoại không đúng định dạng.",
              },
            ]}
            className="!mb-3 flex-1"
          >
            <Input
              placeholder="Nhập số điện thoại"
              className="custom-search-sidebar"
            />
          </Form.Item>

          <Form.Item
            label={<p className="font-medium text-sm">Email</p>}
            validateTrigger="onBlur"
            name="receiver_email"
            rules={[
              {
                required: true,
                message: "Email không được bỏ trống.",
              },
              {
                type: "email",
                message: "Email không đúng định dạng.",
              },
            ]}
            className="!mb-3 flex-1"
          >
            <Input placeholder="Nhập email" className="custom-search-sidebar" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default EditModal;

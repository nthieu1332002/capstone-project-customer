import useCancelModal from "@/hooks/useCancelModal";
import { emailPattern, phoneNumberPattern } from "@/lib/constants";
import { Form, Input, Modal } from "antd";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

type Props = {
  isModalOpen: boolean;
  handleCancel: () => void;
  code?: string;
};
type FieldType = {
  identifier: string;
};
const VerifyCancelModal = ({ isModalOpen, handleCancel, code }: Props) => {
  const { onOpen } = useCancelModal();
  const [form] = Form.useForm();

  return (
    <Modal
      title="Xác minh hủy đơn hàng"
      open={isModalOpen}
      onCancel={handleCancel}
      okText={<span className="text-red-500 border-red-500">Xác nhận</span>}
      onOk={() => {
        form.validateFields().then((fieldsValue) => {
          onOpen(code, fieldsValue["identifier"]);
          handleCancel();
        });
      }}
    >
      <Form
        form={form}
        name="verify-cancel-order-form"
        layout="vertical"
        autoComplete="off"
        style={{
          width: "100%",
        }}
      >
        <Form.Item<FieldType>
          label="Email / Số điện thoại"
          name="identifier"
          rules={[
            {
              required: true,
              message: "Email hoặc số điện thoại không được bỏ trống.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  emailPattern.test(value) ||
                  phoneNumberPattern.test(value)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Email hoặc số điện thoại không đúng định dạng."
                );
              },
            }),
          ]}
          className="my-4"
        >
          <Input
            prefix={<MdOutlineAlternateEmail className="text-zinc-300" />}
            placeholder="example@gmail.com hoặc 0123456789"
            className="custom-input"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default VerifyCancelModal;

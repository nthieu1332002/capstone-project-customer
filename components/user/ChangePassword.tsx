"use client";

import Button from "@/components/Button";
import { Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

type FieldType = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};
const ChangePassword = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (values: FieldType) => {
    setDisabled(true);

    try {
      const res = await axios.put("/api/user/changepassword", values);
      if (res.status === 200) {
        form.resetFields();
        toast.success("Đổi mật khẩu thành công!");
      }
    } catch (error: any) {
      // toast.error("Đổi mật khẩu thất bại!")
      toast.error(error.response.data);
    }
    setDisabled(false);
  };
  return (
    <div className="p-5 flex flex-col gap-3 bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Đổi mật khẩu</h1>
      <div className="w-full border rounded-lg flex flex-col p-5">
        <Form
          form={form}
          layout="vertical"
          name="change-password-form"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Mật khẩu hiện tại</p>}
            name="password"
            rules={[
              {
                required: true,
                message: "Mật khẩu hiện tại không được bỏ trống.",
              },
            ]}
            className="mb-4"
          >
            <Input.Password type="password" className="custom-input" />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Mật khẩu mới</p>}
            name="new_password"
            rules={[
              {
                required: true,
                message: "Mật khẩu mới không được bỏ trống.",
              },
              {
                min: 8,
                message: "Mật khẩu phải có ít nhất 8 ký tự.",
              },
            ]}
            className="mb-4"
          >
            <Input.Password type="password" className="custom-input" />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Nhập lại mật khẩu</p>}
            name="new_password_confirmation"
            dependencies={["new_password"]}
            rules={[
              {
                required: true,
                message: "Mật khẩu không được bỏ trống.",
              },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu bạn nhập không khớp!")
                  );
                },
              }),
            ]}
            className="mb-4"
          >
            <Input.Password type="password" className="custom-input" />
          </Form.Item>
          <Form.Item>
            <Button disabled={disabled} label="Cập nhật" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;

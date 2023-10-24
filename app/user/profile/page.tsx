"use client"

import Button from "@/components/Button";
import { Descriptions } from "antd";
import { Divider, Form, Input } from "antd";
import { MdOutlineAlternateEmail } from "react-icons/md";
type FieldType = {
  name: string;
  phone: number;
  email: string;
  status: string;
  created_at: string;
};
const Profile = () => {
  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Thông tin tài khoản</h1>
      <p className="text-gray-400 text-sm">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <div className="w-full border rounded-lg flex flex-col">
        <Form
          layout="vertical"
          name="login-form"
          // onFinish={handleSubmit}
          // requiredMark={false}
        >
          <Form.Item<FieldType>
            label="Họ và tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Họ và tên không được bỏ trống.",
              },
            ]}
            className="mb-4"
          >
            <Input
              placeholder="example@gmail.com hoặc 0123456789"
              className="custom-input"
            />
          </Form.Item>
          <Form.Item<FieldType>
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email hoặc số điện thoại không được bỏ trống.",
                    },
                    {
                      type: "email",
                      message: "Email hoặc số điện thoại không đúng định dạng."
                    }
                        
                  ]}
                  className="mb-4"
                >
                  <Input
                    prefix={
                      <MdOutlineAlternateEmail className="text-zinc-300" />
                    }
                    placeholder="example@gmail.com hoặc 0123456789"
                    className="custom-input"
                  />
                </Form.Item>
          <Form.Item>
            <Button label="Đăng nhập" htmlType="submit" />
            
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;

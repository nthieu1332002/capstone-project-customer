"use client";

import Button from "@/components/Button";
import { Divider, Form, Input } from "antd";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
type FieldType = {
  name: string;
  phone: number;
  email: string;
};
type Props = {
  user: any;
};
const phoneNumberPattern = /^[0-9]{10,12}$/;

const UserProfile = ({ user }: Props) => {
  return (
    <div className="p-5 flex flex-col gap-3 bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Thông tin tài khoản</h1>
      
      <div className="w-full border rounded-lg flex flex-col p-5">
        <Form
          layout="vertical"
          name="user-profile-form"
          // onFinish={handleSubmit}
          requiredMark={false}
          initialValues={{
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            status: user?.status,
          }}
        >
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Họ và tên</p>}
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
              prefix={<HiOutlineUser className="text-zinc-300" />}
              className="custom-input"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Email</p>}
            name="email"
            rules={[
              {
                required: true,
                message: "Email hoặc số điện thoại không được bỏ trống.",
              },
              {
                type: "email",
                message: "Email hoặc số điện thoại không đúng định dạng.",
              },
            ]}
            className="mb-4"
          >
            <Input
              prefix={<MdOutlineAlternateEmail className="text-zinc-300" />}
              className="custom-input"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Số điện thoại</p>}
            name="phone"
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
            className="mb-4"
          >
            <Input
              prefix={<AiOutlinePhone className="text-zinc-300" />}
              className="custom-input"
            />
          </Form.Item>
          <Form.Item>
            <Button label="Cập nhật" htmlType="submit" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;

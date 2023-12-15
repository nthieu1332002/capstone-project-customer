"use client";
import axios from "axios";

import Button from "@/components/Button";
import { phoneNumberPattern } from "@/lib/constants";
import { Form, Input } from "antd";
import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"

export type User  = {
  name: string;
  phone: string;
  email: string;
  status: number;
  created_at: string;
  updated_at: string;
}
type FieldType = {
  name: string;
  phone: number;
  email: string;
};
type Props = {
  user: User;
};

const UserProfile = ({ user }: Props) => {
  const [form] = Form.useForm();
  const { data: session, update} = useSession()
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = async (values: FieldType) => {
    setDisabled(true);

    try {
      const res = await axios.put("/api/user/update-profile", values);
      if (res.status === 200) {
        await update({
          ...session,
          user: {
            ...session,
            email: values.email,
            name: values.name,
            phone: values.phone,
          },
        });
        toast.success("Cập nhật thông tin thành công!");
        router.refresh();
      }
    } catch (error: any) {
      console.log("Error", error);
      toast.error("Cập nhật thông tin thất bại!");
      toast.error(error.response.data)
    }
    setDisabled(false);
  };
  return (
    <div className="p-5 flex flex-col gap-3 bg-white rounded-xl">
      <h1 className="text-2xl font-semibold">Thông tin tài khoản</h1>

      <div className="w-full border rounded-lg flex flex-col p-5">
        <Form
          form={form}
          layout="vertical"
          name="user-profile-form"
          onFinish={handleSubmit}
          requiredMark={false}
          initialValues={{
            name: user.name,
            email: user.email,
            phone: user.phone,
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
            <Button disabled={disabled} label="Cập nhật" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;

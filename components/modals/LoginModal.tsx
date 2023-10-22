"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { Divider, Form, Input } from "antd";
import { useCallback, useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import BrandName from "../BrandName";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "../SocialButton";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type FieldType = {
  email: string;
  password: string;
};
const phoneNumberPattern = /^[0-9]{10,12}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LoginModal = () => {
  const [form] = Form.useForm();
  const { isOpen, onClose, type, onOpen } = useAuthModal();
  const isModalOpen = isOpen && type === "login";
  const [showModal, setShowModal] = useState(isModalOpen);
  const router = useRouter();
  useEffect(() => {
    setShowModal(isModalOpen);
  }, [isModalOpen, isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    form.resetFields();
    setTimeout(onClose, 300);
  }, [form, onClose]);

  const handleSubmit = useCallback((values: FieldType) => {
    signIn("credentials", {
      email: "kminchelle",
      password: "0lelplR",
      // ...values,
      redirect: false,
    }).then((callback) => {

      if (callback?.ok) {
        toast.success("Đăng nhập thành công");
        router.refresh();
        setShowModal(false);
        form.resetFields();
        setTimeout(onClose, 300);

      }

      if (callback?.error) {
        toast.error("Sai thông tin đăng nhập");
        form.resetFields();
      }
    });
  }, [form, onClose, router]);
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="transition duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={cn(
            "translate duration-300 h-full",
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full p-2 bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="px-6 py-3 z-10 rounded-t justify-center relative ">
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute right-5"
                onClick={handleClose}
              >
                <IoMdClose size={25} />
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 py-3">
              <BrandName className="justify-start" />
              <h1 className="text-2xl font-bold mt-3">Chào mừng quay lại</h1>
              <p className="mt-1 mb-4">Đăng nhập vào tài khoản của bạn</p>
              <SocialButton
                // loading={isLoadingGG}
                onClick={() => signIn("google")}
                label="Đăng nhập với Google"
                icon={FcGoogle}
                outline
              />
              <Divider plain>hoặc</Divider>
              <Form
                form={form}
                layout="vertical"
                name="login-form"
                onFinish={handleSubmit}
                requiredMark={false}
              >
                <Form.Item<FieldType>
                  label="Email / Số điện thoại"
                  name="email"
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
                <Form.Item<FieldType>
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được bỏ trống.",
                    },
                  ]}
                  className="mb-4"
                >
                  <Input.Password
                    visibilityToggle={false}
                    placeholder="Mật khẩu"
                    type="password"
                    className="custom-input"
                    prefix={<HiOutlineLockClosed className="text-zinc-300" />}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    label="Đăng nhập"
                    htmlType="submit"
                  />
                  <p className="text-sm text-center mt-2">
                    Bạn chưa có tài khoản?{" "}
                    <span
                      className="text-primary-color font-bold cursor-pointer"
                      onClick={() => onOpen("register")}
                    >
                      Tạo ngay
                    </span>
                  </p>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

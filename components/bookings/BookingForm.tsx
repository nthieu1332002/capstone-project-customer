"use client";

import NoteText from "@/components/NoteText";
import BookingHeader from "@/components/bookings/BookingHeader";
import { Divider, Form, Input, InputNumber} from "antd";
import React, { useCallback } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbPackage, TbUserCircle } from "react-icons/tb";
import { PiNotePencil } from "react-icons/pi";
import Button from "@/components/Button";
import { Booking } from "@/hooks/useBookingStore";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import BookingSteps from "./BookingSteps";
const { TextArea } = Input;
type FieldType = {
  sender_name: string;
  sender_phone: number;
  sender_address?: string;
  sender_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  note?: string;
  total_price: number; //tổng tiền
  weight: number;
  height: number;
  length: number;
  width: number;
};
const phoneNumberPattern = /^[0-9]{10,12}$/;
type Props = {
  booking?: Booking;
  user?: Session | null;
};

const BookingForm = ({ booking, user }: Props) => {
  console.log("user", user);
  const router = useRouter();
  const handleSubmit = useCallback(
    (values: FieldType) => {
      router.push(`/booking/${booking?.lowest_price}/payment`);
    },
    [booking?.lowest_price, router]
  );
  return (
    <div className="px-1 md:px-5 lg:px-5 xl:px-32 py-8">
      <h1 className="text-center text-black font-bold text-2xl">
        Đơn hàng của bạn
      </h1>

      <div className="flex items-center justify-center px-5 md:px-32 my-4 md:my-10">
        <BookingSteps current={0} />
      </div>
      <div className="border-2 rounded-lg p-3 lg:p-10">
        <Form
          layout="vertical"
          name="booking-form"
          onFinish={handleSubmit}
          onFinishFailed={(error) => console.log("error", error)}
          autoComplete="on"
          initialValues={{
            sender_name: user?.user?.name,
            sender_phone: user?.user?.phone,
            sender_email: user?.user?.email,
          }}
        >
          <BookingHeader name="Thông tin người gửi" icon={RiErrorWarningLine} />

          <Form.Item<FieldType>
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
            <Form.Item<FieldType>
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

            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Email</p>}
              validateTrigger="onBlur"
              name="sender_email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập email"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </div>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Địa chỉ người gửi</p>}
            name="sender_address"
            className="!mb-3"
            tooltip={
              <p className="text-sm">
                Trong trường hợp đơn hàng gặp sự cố, CXMT sẽ trả hàng về địa chỉ
                này.
              </p>
            }
          >
            <Input
              placeholder="Nhập địa chỉ"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <Divider />
          <BookingHeader name="Thông tin người nhận" icon={TbUserCircle} />
          <NoteText text="Thông tin người nhận nên được cung cấp một cách chính xác. Điều này giúp đảm bảo rằng dịch vụ vận chuyển sẽ được cung cấp chính xác và hiệu quả." />
          <Form.Item<FieldType>
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
            <Form.Item<FieldType>
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

            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Email</p>}
              validateTrigger="onBlur"
              name="receiver_email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập email"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </div>
          <Divider />

          <BookingHeader name="Thông tin gói hàng" icon={TbPackage} />
          <div className="flex flex-col md:flex-row md:gap-5">
            <Form.Item<FieldType>
              label={
                <p className="font-medium text-sm">Tổng khối lượng (gam)</p>
              }
              name="weight"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Dài (cm)</p>}
              name="length"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Rộng (cm)</p>}
              name="width"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Cao (cm)</p>}
              name="height"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                min={0}
                style={{ width: "100%" }}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
          </div>

          <Divider />
          <BookingHeader name="Ghi chú - Lưu ý" icon={PiNotePencil} />
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Ghi chú</p>}
            name="note"
            className="!mb-3 flex-1"
          >
            <TextArea rows={2} placeholder="VD: Hàng dễ vỡ." />
          </Form.Item>
          <Form.Item>
            <Button label="Xác nhận" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;

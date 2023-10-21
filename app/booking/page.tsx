"use client";

import NoteText from "@/components/NoteText";
import BookingHeader from "@/components/bookings/BookingHeader";
import { Divider, Form, Input, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbPackage, TbUserCircle } from "react-icons/tb";
import { PiNotePencil } from "react-icons/pi";
import Button from "@/components/Button";
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
  value?: number; //giá trị hàng hóa
  cod_price?: number; //thu hộ
  total_price: number; //tổng tiền 
  weight: number;
  height: number;
  length: number;
  width: number;
};
const phoneNumberPattern = /^[0-9]{10,12}$/;

const Booking = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);

  const values = Form.useWatch([], form);
  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setDisabled(false);
      },
      () => {
        setDisabled(true);
      }
    );
  }, [form, values]);
  return (
    <div className="px-32 py-8">
      <h1 className="text-black font-bold text-2xl">Đơn hàng của bạn</h1>

      <div className="flex items-center justify-center px-32 my-10">
        <Steps
          size="small"
          progressDot
          current={0}
          className="font-semibold"
          items={[
            {
              title: <p className="text-primary text-sm"> Chi tiết đơn hàng</p>,
            },
            {
              title: <p className="text-black text-sm">Thanh toán</p>,
            },
            {
              title: <p className="text-black text-sm">Bước cuối cùng</p>,
            },
          ]}
        />
      </div>
      <div className="border-2 rounded-lg p-10">
        <Form
          form={form}
          layout="vertical"
          name="booking-form"
          // onFinish={handleSubmit}
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
          <div className="flex justify-between gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Số điện thoại</p>}
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
          <div className="flex justify-between gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Số điện thoại</p>}
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
              <Input
                placeholder="Nhập email"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </div>
          <Divider />

          <BookingHeader name="Thông tin gói hàng" icon={TbPackage} />
          <div className="flex gap-5">
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
              <Input placeholder="500" className="custom-search-sidebar" />
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
              <Input placeholder="10" className="custom-search-sidebar" />
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
              <Input placeholder="10" className="custom-search-sidebar" />
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
              <Input placeholder="10" className="custom-search-sidebar" />
            </Form.Item>
          </div>
          <div className="flex gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Phí thu hộ</p>}
              name="cod_price"
              tooltip={
                <p className="text-sm">
                  Là tiền bên gửi nhờ CXMT thu hộ của bên nhận và sẽ chuyển về
                  tài khoản ngân hàng của bên gửi
                </p>
              }
              className="!mb-3 flex-1"
            >
              <Input placeholder="10" className="custom-search-sidebar" />
            </Form.Item>
            <Form.Item<FieldType>
              label={
                <p className="font-medium text-sm">Tổng giá trị hàng hóa</p>
              }
              name="value"
              rules={[
                {
                  type: "number",
                  message: "",
                },
              ]}
              tooltip={
                <p className="text-sm w-full">
                  Giá trị hàng hóa là căn cứ xác định giá trị bồi thường nếu xảy
                  ra sự cố (giá trị bồi thường tối đa 10.000.000₫). Toàn bộ đơn
                  hàng của GHN bắt buộc đóng phi khai giá hàng hóa, mức phí như
                  sau:
                  <br />
                  + Giá trị hàng hóa &lt; 1.000.000đ: Miễn phí
                  <br />+ Giá trị hàng hóa &gt;= 1.000.000₫ (tối đa là
                  5.000.000đ): Phí khai giá hàng hóa là 0.5% giá trị hàng hóa.
                </p>
              }
              className="!mb-3 flex-1"
            >
              <Input placeholder="10,000" className="custom-search-sidebar" />
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
            <Button disabled={disabled} label="Đăng nhập" htmlType="submit" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Booking;

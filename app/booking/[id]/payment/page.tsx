"use client";
import BookingHeader from "@/components/bookings/BookingHeader";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

import React, { useCallback, useState } from "react";
import { PiCreditCard } from "react-icons/pi";
import Button from "@/components/Button";
import vnpay from "@/public/assets/vnpay.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
type FieldType = {
  sender_name: string;
};

const Payment = ({ params }: { params: { id: string } }) => {
  const [value, setValue] = useState(1);
  const handleSubmit = useCallback((values: FieldType) => {
    console.log("values", values);
  }, []);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <BookingHeader name="Phương thức thanh toán" icon={PiCreditCard} />
      <Radio.Group
        onChange={onChange}
        value={value}
        size="large"
        className="w-full"
      >
        <div className="w-full flex justify-between gap-5">
          <Radio
            value={1}
            className={cn(
              "!py-2 !px-3 border-2 rounded-md w-full max-h-[100px] flex !items-center",
              value === 1 && "border-primary-color bg-primary-color/10"
            )}
          >
            <Image src={vnpay} alt="logo" width={100} />
          </Radio>
          <Radio
            value={2}
            className={cn(
              "!py-2 !px-3 border-2 rounded-md w-full max-h-[100px] flex !items-center",
              value === 2 && "border-primary-color bg-primary-color/10"
            )}
          >
            <p className="text-lg">Tiền mặt</p>
          </Radio>
        </div>
      </Radio.Group>
      <Form
        layout="vertical"
        name="booking-payment-form"
        onFinish={handleSubmit}
        onFinishFailed={(error) => console.log("error", error)}
        autoComplete="on"
      >
        <Form.Item>
          <Button label="Xác nhận" htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default Payment;

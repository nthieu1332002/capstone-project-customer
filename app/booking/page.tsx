import BookingHeader from "@/components/bookings/BookingHeader";
import { Steps } from "antd";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbPackage, TbUserCircle } from "react-icons/tb";

const Booking = () => {
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

      <BookingHeader name="Thông tin chi tiết của bạn" icon={RiErrorWarningLine}/>
      <BookingHeader name="Thông tin người nhận" icon={TbUserCircle}/>
      <BookingHeader name="Thông tin gói hàng" icon={TbPackage}/>

      <p>h1</p>
    </div>
  );
};

export default Booking;

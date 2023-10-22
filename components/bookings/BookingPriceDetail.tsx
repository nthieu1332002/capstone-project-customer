"use client";

import { BsTruck } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { RiTruckFill } from "react-icons/ri";

type Props = {};

const BookingPriceDetail = (props: Props) => {
  return (
    <div className="p-4 sticky top-[80px]">
      <div className="mb-4 border rounded-md">
        <div className="p-4 flex items-center gap-2 text-lg font-bold border-b">
          <BsTruck className="text-primary-color" size={20} />
          <p>Chuyến đi của bạn</p>
        </div>
        <div className="px-4 py-3 flex flex-col gap-3 text-sm">
          <div className="flex-grow flex flex-col gap-2 justify-between ">
            <h2 className="flex items-center gap-1 text-base font-semibold text-primary-color">
              <div className="flex items-center justify-center p-2 bg-primary-color rounded-md">
                <RiTruckFill className="text-white" />
              </div>
              Phương Trang
            </h2>

            <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
              <li className="">Bến xe Miền Đông mới</li>
              <div className="ml-[1px] border-l-[3px] border-dotted pl-6">
                <p className="text-gray-600">112 km</p>
              </div>
              <li className="">Bến xe Vũng Tàu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border rounded-md">
        <div className="p-4 flex items-center gap-2 text-lg font-bold border-b">
          <PiMoney className="text-primary-color" size={20} />
          <p>Chi tiết giá</p>
        </div>
        <div className="px-4 py-3 flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <p>Giá cơ bản</p>
            <p> {new Intl.NumberFormat("en-Us").format(20000)}đ</p>
          </div>
          <div className="flex justify-between">
            <p>Giá theo khối lượng</p>
            <p> {new Intl.NumberFormat("en-Us").format(55000)}đ</p>
          </div>
          <div className="py-3 flex justify-between text-sm border-t font-bold">
            <p>Tổng cộng</p>
            <p className="text-primary-color">
              {new Intl.NumberFormat("en-Us").format(75000)}đ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPriceDetail;

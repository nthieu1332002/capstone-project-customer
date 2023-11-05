"use client";

import Image from "next/image";
import React from "react";
import vnpay from "@/public/assets/vnpay.png";

type Props = {};

const Result = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 h-full max-w-screen px-40 pt-8 pb-10">
      <h1 className="text-black font-bold text-2xl">Đơn hàng của bạn</h1>

      <div className="flex flex-col gap-7 text-sm">
        <h2 className="text-lg font-bold text-primary-color">
          Thông tin vận chuyển
        </h2>
        <div className="flex gap-24 w-full font-medium rounded-md border-primary-color bg-primary-color/10 p-8">
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Mã vận đơn</p>
            <b>DNSAJ132D21J8S</b>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Chành xe</p>
            <p>Công ty xe khách Hùng Cường</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Số tiền</p>
            <b>120,000 đ</b>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Phương thức thanh toán</p>
            {true ? (
              <div className="w-full max-h-[100px]">
                <Image src={vnpay} alt="logo" width={100} />
              </div>
            ) : (
              <p className="text-primary-color">VNPay</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Trạng thái</p>
            <b className="text-primary-color">Đã thanh toán</b>
          </div>
        </div>
        <h2 className="text-lg font-bold text-primary-color">
          Thông tin gói hàng
        </h2>
        <div className="flex gap-24 w-full">
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Tổng khối lượng</p>
            <p className="font-medium">10 kg</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Chiều dài</p>
            <p className="font-medium">10 cm</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Chiều rộng</p>
            <p className="font-medium">10 cm</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Chiều cao</p>
            <p className="font-medium">50 cm</p>
          </div>
        </div>
        <h2 className="text-lg font-bold text-primary-color">
          Thông tin người gửi
        </h2>
        <div className="flex gap-24 w-full">
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Họ và tên</p>
            <p className="font-medium">Nguyễn Trung Hiếu </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Số điện thoại</p>
            <p className="font-medium">0945023429</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Email</p>
            <p className="font-medium">nthieu1332002@gmail.com</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Địa chỉ</p>
            <p className="font-medium">
              Nguyễn Trung Hiếu Nguyễn Trung Hiếu Nguyễn Trung Hiếu
            </p>
          </div>
        </div>
        <h2 className="text-lg font-bold text-primary-color">
          Thông tin người nhận
        </h2>
        <div className="flex gap-24 w-full">
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Họ và tên</p>
            <p className="font-medium">Nguyễn Trung Hiếu </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Số điện thoại</p>
            <p className="font-medium">0945023429</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Email</p>
            <p className="font-medium"></p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500">Địa chỉ</p>
            <p className="font-medium"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

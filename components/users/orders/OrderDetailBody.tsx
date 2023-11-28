"use client";

import {
  OrderStatusMap,
  packageType,
} from "@/lib/constants";

import Image from "next/image";
import vnpay from "@/public/assets/vnpay.png";
import cash from "@/public/assets/cash.jpg";
import { Tag, Timeline } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type Props = {
  code: string;
  order: any;
};

const OrderDetailBody = ({ code, order }: Props) => {
  const router = useRouter();

  const items = order.status_history.map((item: any, index: number) => {
    const orderStatus = OrderStatusMap[item.type];
    return {
      children: (
        <div key={index}>
          <p className="uppercase font-medium text-sm text-gray-600 mb-1">
            Ngày {dayjs(item.achievedAt).format("DD/MM/YYYY lúc hh:mm:ss")}
          </p>
          <div className="bg-white p-3 py-2 rounded-md min-h-[70px] shadow-sm">
            <b className="font-semibold">Đơn hàng {orderStatus}</b>
            <p className="text-gray-500">{item.location}</p>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">
            {order.is_paid ? "Đã thanh toán" : "Chưa thanh toán"}
          </h2>

          <div className="flex gap-5 mt-4">
            <div className="relative flex-shrink-0 h-36 w-32 rounded-md overflow-hidden">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                src="https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/nu-cuoi-viet-du-lich-vung-tau-09_hifmbu.jpg"
                alt=""
                priority
              />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-bold">
                {order.start_station.name} - {order.end_station.name}
              </h1>
              <div className="flex flex-col gap-4 text-sm font-semibold text-gray-500">
                <p>
                  Đi từ:
                  <span className="ml-2 text-gray-800">
                    {order.start_station.address}
                  </span>
                </p>
                <p>
                  Đến:
                  <span className="ml-2 text-gray-800">
                    {order.end_station.address}
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">Thanh toán</h2>
          <div className="flex gap-5 mt-4">
            <div className="shadow-sm">
              <Image
                src={order.payment_method === 0 ? cash : vnpay}
                alt="logo"
                width={100}
              />
            </div>
            <div className="flex flex-col justify-between font-bold">
              <h3 className="text-black">
                {order.payment_method === 0 ? "Tiền mặt" : "VNPay"}
              </h3>
              <Tag
                bordered={false}
                className="tag font-medium"
                color={order.is_paid ? "green" : "red"}
              >
                {order.is_paid ? "Đã thanh toán" : "Chưa thanh toán"}
              </Tag>
            </div>

            <b className="ml-auto">
              {new Intl.NumberFormat("en-Us").format(order.delivery_price)}đ
            </b>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">Thông tin gói hàng</h2>
          <div className="flex gap-5 mt-4">
            <div className="flex whitespace-nowrap gap-16 w-full">
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Tổng khối lượng</p>
                <p className="font-medium">{order.weight} kg</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Chiều dài</p>
                <p className="font-medium">{order.length} cm</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Chiều rộng</p>
                <p className="font-medium">{order.width} cm</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Chiều cao</p>
                <p className="font-medium">{order.height} cm</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Trị giá</p>
                <p className="font-medium">
                  {new Intl.NumberFormat("en-Us").format(order.package_value)}đ
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            {order.package_types.map((value: number) => {
              {
                packageType.find((type) => type.value === value)?.label;
              }
              return (
                <Tag key={value} color="blue">
                  {packageType.find((type) => type.value === value)?.label}
                </Tag>
              );
            })}
          </div>
        </div>
        <h2 className="text-lg font-bold my-2">Hoạt động</h2>
        <Timeline items={items} />
      </div>
      <div className="w-[220px]">
        <div className="p-4 bg-white rounded-sm shadow-sm h-[530px] text-sm flex flex-col gap-3">
          <h2 className="text-lg font-bold">Khách hàng</h2>
          <div className="py-3">
            <p className="text-sm font-semibold mb-3">Người gửi</p>
            <div className="flex flex-col gap-1">
              <p>{order.sender_name}</p>
              <p>{order.sender_email}</p>
              <p>
                {order.sender_phone.replace(
                  /(\d{3})(\d{3})(\d{4})/,
                  "$1 $2 $3"
                )}
              </p>
            </div>
          </div>
          <div className="py-3 border-t-[1px]">
            <p className="text-sm font-semibold mb-3">Người nhận</p>
            <div className="flex flex-col gap-1">
              <p>{order.receiver_name}</p>
              <p>{order.receiver_email}</p>
              <p>
                {order.receiver_phone.replace(
                  /(\d{3})(\d{3})(\d{4})/,
                  "$1 $2 $3"
                )}
              </p>
            </div>
          </div>
          <div className="py-3 border-t-[1px]">
            <p className="text-sm font-semibold mb-3">Ghi chú</p>
            <p>{order.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailBody;

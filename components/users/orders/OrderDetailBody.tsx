"use client";

import { OrderStatusMap, packageType } from "@/lib/constants";
import { Image as ImageAntd, QRCode } from "antd";
import Image from "next/image";
import vnpay from "@/public/assets/vnpay.png";
import cash from "@/public/assets/cash.jpg";
import { Tag, Timeline } from "antd";
import dayjs from "dayjs";
import { OrderDetail } from "./OrderDetailHeader";
import { cn } from "@/lib/utils";
import { convertUnit } from "@/lib/transfer-unit";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

type Props = {
  code: string;
  order: OrderDetail;
};

const OrderDetailBody = ({ order }: Props) => {
  const [show, setShow] = useState(false);
  const items = order.checkpoints.map((item, index) => {
    const orderStatus = OrderStatusMap[item.status];
    return {
      children: (
        <div key={index}>
          <p className="uppercase font-medium text-sm text-gray-600 mb-1">
            Ngày {dayjs(item.achieved_at).format("DD/MM/YYYY lúc HH:mm:ss")}
          </p>
          <div className="bg-white p-3 py-2 rounded-md min-h-[70px] shadow-sm">
            <b className="font-semibold">
              Đơn hàng{" "}
              <span
                className={cn(
                  item.status === 5 ? "text-red-600" : "text-primary-color"
                )}
              >
                {orderStatus}{" "}
                {item.status === 5 && order.cancelled_reason ? (
                  <span>(Lý do: {order.cancelled_reason})</span>
                ) : null}
              </span>{" "}
              {item.name ? ` ${item.name}` : null}{" "}
            </b>
            <p className="text-gray-500">{item.address}</p>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="flex flex-col lg:flex-row md:justify-between gap-4">
      <div className="flex flex-col gap-4 w-full lg:w-[calc(100%-220px)]">
        <div className="bg-white min-h-[130px] rounded-sm shadow-sm px-5 py-4">
          <div className="flex gap-5">
            <div className="relative flex-shrink-0 hidden lg:block md:h-36 md:w-32 rounded-md overflow-hidden">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                src={
                  order.start_station.imageUrl ||
                  "https://res.cloudinary.com/dad0fircy/image/upload/v1702828398/capstone/icon_we9y8a.png"
                }
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
                    {order.start_station.address}.
                  </span>
                </p>
                <p>
                  Đến:
                  <span className="ml-2 text-gray-800">
                    {order.end_station.address}.
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

            <div className="ml-auto">
              <p className="font-normal">
                ({order.collect_on_delivery ? "Trả sau" : "Trả trước"})
              </p>

              <b>
                {new Intl.NumberFormat("en-Us").format(order.delivery_price)}đ
              </b>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">Thông tin gói hàng</h2>

          <div className="flex flex-wrap whitespace-nowrap gap-5 lg:gap-16 w-full mt-4">
            <div className="space-y-3">
              <p className="text-gray-500">Khối lượng</p>
              <p className="font-medium">{convertUnit(order.weight)} kg</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500">Chiều dài</p>
              <p className="font-medium">{convertUnit(order.length)} m</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500">Chiều rộng</p>
              <p className="font-medium">{convertUnit(order.width)} m</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500">Chiều cao</p>
              <p className="font-medium">{convertUnit(order.height)} m</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-500">Trị giá</p>
              <p className="font-medium">
                {new Intl.NumberFormat("en-Us").format(order.package_value)}đ
              </p>
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            {order.package_types.map((value: number) => {
              return (
                <Tag key={value} color="blue">
                  {packageType.find((type) => type.value === value)?.label}
                </Tag>
              );
            })}
          </div>
        </div>
        <h2 className="text-lg font-bold my-2">Hoạt động</h2>
        <Timeline reverse items={items} />
      </div>
      <div className="w-full md:w-[220px]">
        <div className="p-4 bg-white rounded-sm shadow-sm min-h-[500px] text-sm space-y-3 break-words">
          <div className="flex flex-col items-center justify-center gap-1">
            <QRCode value={order.receive_token} size={164} />
            <div className="flex gap-1 items-center">
              <p className="uppercase font-semibold">
                {show ? order.receive_token : "***********"}
              </p>
              <div onClick={() => setShow(!show)}>{show ? <FaRegEye /> : <FaRegEyeSlash />}</div>
            </div>
          </div>
          <h2 className="text-lg font-bold">Khách hàng</h2>
          <div className="py-3">
            <p className="text-sm font-semibold mb-3">Người gửi</p>
            <div className="space-y-1">
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
            <div className="space-y-1">
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
        <div className="mt-4 px-4 ">
          <h2 className="text-lg font-bold my-2">Hình ảnh</h2>
          <div className="flex gap-2">
            {order.package_image_url && (
              <div className="relative w-20 h-20 bg-red-50 cursor-pointer">
                <ImageAntd src={order.package_image_url} alt="" />
              </div>
            )}
            {order.delivered_image_url && (
              <div className="relative w-20 h-20 bg-red-50">
                <ImageAntd src={order.delivered_image_url} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailBody;

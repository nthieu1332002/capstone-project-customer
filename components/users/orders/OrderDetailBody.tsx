import {
  OrderStatus,
  OrderStatusMap,
  PaymentStatus,
  packageType,
} from "@/lib/constants";

import Image from "next/image";
import vnpay from "@/public/assets/vnpay.png";
import cash from "@/public/assets/cash.jpg";
import { Tag, Timeline } from "antd";
import dayjs from "dayjs";
import { Fragment } from "react";

type Props = {
  order: any;
};

const OrderDetailBody = ({ order }: Props) => {
  const items = order.status_history.map((item: any, index: number) => {
    const orderStatus = OrderStatusMap[item.status];

    return {
      children: (
        <div key={index}>
          <p className="uppercase font-medium text-sm text-gray-600 mb-1">
            Ngày {dayjs(item.created_at).format("DD/MM/YYYY lúc hh:mm:ss")}
          </p>
          <div className="bg-white p-3 py-2 rounded-md min-h-[70px] shadow-sm">
            <b className="font-semibold">Đơn hàng {orderStatus}</b>
            <p className="text-gray-500">
              {item.location} 126 le van huu, phuong 9 tuy hoa
            </p>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          {OrderStatus.map((item) => {
            return (
              <>
                {item.id === order.payment.status ? (
                  <h2 className="font-bold">{item.status}</h2>
                ) : null}
              </>
            );
          })}
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
            <div className="w-96 flex flex-col justify-between">
              <h1 className="font-bold">
                {order.start_station.name} {order.start_station.name}{" "}
                {order.start_station.name} - {order.end_station.name}{" "}
                {order.start_station.name}
              </h1>
              <div className="flex flex-col gap-2 text-sm font-semibold text-gray-500">
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
            <div className="ml-auto w-44">
              <p className="text-sm font-semibold text-gray-500">
                Ghi chú: <span className="text-gray-800">{order.note}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">Thanh toán</h2>
          <div className="flex gap-5 mt-4">
            <div className="shadow-sm">
              <Image
                src={order.payment.payment_method === 0 ? cash : vnpay}
                alt="logo"
                width={100}
              />
            </div>
            <div className="flex flex-col justify-between font-bold">
              <h3 className="text-black">
                {order.payment.payment_method === 0 ? "Tiền mặt" : "VNPay"}
              </h3>
              {PaymentStatus.map((item) => {
                return (
                  <Fragment key={item.id}>
                    {item.id === order.payment.status ? (
                      <p className="text-gray-500 text-sm font-medium">
                        {item.status}
                      </p>
                    ) : null}
                  </Fragment>
                );
              })}
            </div>
            <b className="ml-auto">
              {new Intl.NumberFormat("en-Us").format(order.payment.value)}đ
            </b>
          </div>
        </div>
        <div className="bg-white rounded-sm shadow-sm px-5 py-4">
          <h2 className="font-bold">Thông tin gói hàng</h2>
          <div className="flex gap-5 mt-4">
            <div className="flex gap-16 w-full">
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
                <p className="font-medium">{order.width} 10 cm</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Chiều cao</p>
                <p className="font-medium">{order.height} cm</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-500">Trị giá</p>
                <p className="font-medium">
                  {new Intl.NumberFormat("en-Us").format(order.package_price)}đ
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 mt-3">
            {order.package_type.map((value: number) => {
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
        <Timeline items={items} reverse />
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
        </div>
      </div>
    </div>
  );
};

export default OrderDetailBody;

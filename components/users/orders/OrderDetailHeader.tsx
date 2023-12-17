"use client";

import { OrderStatus } from "@/lib/constants";
import { Dropdown, MenuProps, Tag } from "antd";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FiCalendar } from "react-icons/fi";
import dayjs from "dayjs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import useCancelModal from "@/hooks/useCancelModal";
import useEditModal from "@/hooks/useEditModal";

export type OrderDetail = {
  start_station: {
    id: number;
    name: string;
    address: string;
    image_url: string;
  };
  end_station: {
    id: number;
    name: string;
    address: string;
    image_url: string;
  };
  code: string;
  sender_name: string;
  sender_phone: string;
  sender_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  note: string;
  package_value: number;
  delivery_price: number;
  weight: number;
  height: number;
  length: number;
  width: number;
  collect_on_delivery: boolean;
  payment_method: number;
  package_types: number[];
  is_paid: boolean;
  is_confirmed: boolean;
  is_cancelled: boolean;
  cancelled_at: string | null;
  cancelled_reason: string | null;
  checkpoints: Array<{
    name: string;
    address: string;
    status: number;
    achieved_at: string;
  }>;
};

type Props = {
  code: string;
  order: OrderDetail;
};

const OrderDetailHeader = ({ code, order }: Props) => {
  const router = useRouter();
  const { onOpen } = useCancelModal();
  const { onOpen: openEdit } = useEditModal();

  const items: MenuProps["items"] = [
    {
      disabled: order.is_paid || order.is_confirmed || order.is_cancelled,
      label: <div onClick={() => openEdit(code)}>Chỉnh sửa</div>,
      key: "0",
      icon: <AiOutlineEdit />,
    },
    {
      type: "divider",
    },
    {
      disabled: order.is_paid || order.is_confirmed || order.is_cancelled,
      label: <div onClick={() => onOpen(order.code)}>Hủy</div>,
      key: "1",
      danger: true,
      icon: <AiOutlineDelete className="delete" />,
    },
  ];

  const handlePayment = async () => {
    try {
      const res = await axios.get(
        `/api/customer/orders/${code}/payments/vnpay/url`
      );
      if (res.status === 400) {
        toast.error("Đơn hàng này đã được thanh toán.");
      }
      router.push(res.data.data);
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <div>
        <div className="inline-block">
          <p
            className="flex gap-2 text-slate-500 hover:text-black transition text-sm font-bold cursor-pointer"
            onClick={() => router.push("/user/order")}
          >
            <IoMdArrowRoundBack size={20} />
            Tất cả đơn hàng
          </p>
        </div>
      </div>

      <div className="flex whitespace-nowrap flex-col md:flex-row justify-between">
        <div className="flex gap-1 md:gap-2 items-start flex-col md:flex-row lg:items-center lg:flex-row ">
          <h1 className="text-base md:text-2xl font-bold text-slate-500">
            Đơn hàng <span className="text-black uppercase">#{code}</span>
          </h1>
          <div className="flex border-r-2 px-2">
            <Tag
              bordered={false}
              className="tag font-medium"
              color={order.is_paid ? "green" : "red"}
            >
              {order.is_paid ? "Đã thanh toán" : "Chưa thanh toán"}
            </Tag>
            
            {OrderStatus.map((item) => {
              return (
                <Fragment key={item.id}>
                  {item.id ===
                  order.checkpoints[order.checkpoints.length - 1].status ? (
                    <Tag
                      bordered={false}
                      className="tag font-medium"
                      color={item.color}
                    >
                      {item.status}
                    </Tag>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
          <div className="flex gap-2 items-center text-sm px-1 font-medium">
            <FiCalendar size={18} className="text-gray-400" />
            <p>
              {dayjs(
                order.checkpoints[order.checkpoints.length - 1].achieved_at
              ).format("DD/MM/YYYY lúc HH:mm")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePayment}
            type="button"
            disabled={
              order.is_paid ||
              !order.is_confirmed ||
              order.is_cancelled ||
              order.payment_method === 0
            }
            className={cn(
              " rounded-md text-white p-2 text-sm",
              order.is_paid ||
                !order.is_confirmed ||
                order.is_cancelled ||
                order.payment_method === 0
                ? "cursor-not-allowed bg-primary-color/30"
                : "bg-primary-color hover:bg-primary-color/80"
            )}
          >
            Thanh toán
          </button>

          <Dropdown
            placement="bottomRight"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <button
              onClick={(e: any) => e.preventDefault()}
              className="focus:border-primary-color focus:text-primary-color bg-white border-2 p-2 rounded-md transition"
            >
              <BsThreeDotsVertical />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailHeader;

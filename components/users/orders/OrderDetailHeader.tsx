"use client";

import { OrderStatus, PaymentStatus } from "@/lib/constants";
import { Dropdown, MenuProps, Tag } from "antd";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FiCalendar } from "react-icons/fi";
import dayjs from "dayjs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { axios } from "@/lib/axios";
import toast from "react-hot-toast";

type Props = {
  code: string;
  order: any;
};

const OrderDetailHeader = ({ code, order }: Props) => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      disabled:
        order.is_paid ||
        order.status_history[order.status_history.length-1].type === 6 ||
        order.status_history[order.status_history.length-1].type !== 0,
      label: <div>Chỉnh sửa</div>,
      key: "0",
      icon: <AiOutlineEdit />,
    },
    {
      disabled:
        order.is_paid ||
        order.status_history[order.status_history.length-1].type === 6 ||
        order.status_history[order.status_history.length-1].type === 0 ||
        order.payment_method === 0,
      label: <div onClick={() =>handlePayment()}>Thanh toán ngay</div>,
      key: "1",
      icon: <MdPayment />,
    },
    {
      type: "divider",
    },
    {
      disabled: order.is_paid ||
      order.status_history[order.status_history.length-1].type === 6 ||
      order.status_history[order.status_history.length-1].type !== 0,
      label: <div>Hủy</div>,
      key: "3",
      danger: true,
      icon: <AiOutlineDelete className="delete" />,
    },
  ];
  const handlePayment = async () => {
    try {
      const res = await axios.get(`/api/customer/orders/${code}/payments/vnpay/url`);
      if (res.status === 400) {
        toast.error("Đơn hàng này đã được thanh toán.");
      }
      router.push(res.data);
    } catch (error) {
      console.log(error);
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

      <div className="flex justify-between">
        <div className="flex gap-2 items-start lg:items-center flex-col lg:flex-row ">
          <h1 className="text-2xl font-bold text-slate-500">
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
                  {item.id === order.status_history[order.status_history.length-1].type ? (
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
              {dayjs(order.status_history[order.status_history.length-1].achievedAt).format(
                "DD/MM/YYYY lúc HH:mm"
              )}
            </p>
          </div>
        </div>
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
  );
};

export default OrderDetailHeader;

"use client";

import { OrderStatus, PaymentStatus } from "@/lib/constants";
import { Button, Dropdown, MenuProps, Tag } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FiCalendar } from "react-icons/fi";
import dayjs from "dayjs";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

type Props = {
  code: string;
  order: any;
};

const OrderDetailHeader = ({ code, order }: Props) => {
  console.log(order);
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      label: <div>Chỉnh sửa</div>,
      key: "0",
      icon: <AiOutlineEdit />,
    },
    {
      type: "divider",
    },
    {
      label: <div>Hủy</div>,
      key: "3",
      danger: true,
      icon: <AiOutlineDelete className="delete" />,
    },
  ];
  return (
    <div className="flex flex-col gap-1">
      <div >
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
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold text-slate-500">
            Đơn hàng <span className="text-black uppercase">#{code}</span>
          </h1>
          <div className="flex border-r-2 px-2">
            {PaymentStatus.map((item) => {
              return (
                <>
                  {item.id ===
                  order.status_history[
                    order.status_history.length - 1
                  ].status ? (
                    <Tag
                      bordered={false}
                      className="tag font-medium"
                      color={item.color}
                    >
                      {item.status}
                    </Tag>
                  ) : null}
                </>
              );
            })}
            {OrderStatus.map((item) => {
              return (
                <>
                  {item.id === order.payment.status ? (
                    <Tag
                      bordered={false}
                      className="tag font-medium"
                      color={item.color}
                    >
                      {item.status}
                    </Tag>
                  ) : null}
                </>
              );
            })}
          </div>
          <div className="flex gap-2 items-center text-sm px-1 font-medium">
            <FiCalendar size={18} className="text-gray-400" />
            <p>
              {dayjs(order.status_history[0].created_at).format(
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
            className="border-primary-color text-primary-color bg-white border-2 p-2 rounded-md"
          >
            <BsThreeDotsVertical />
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default OrderDetailHeader;

"use client";
import { Timeline } from "antd";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { cn } from "@/lib/utils";
import { OrderStatusMap } from "@/lib/constants";
import VerifyCancelModal from "../modals/VerifyCancelModal";
import { Session } from "next-auth";
import { axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useLoading from "@/hooks/useLoading";
dayjs.locale("vi");

export type Tracking = {
  can_be_cancelled?: boolean;
  can_be_paid?: boolean;
  checkpoints: Array<{
    name: string;
    address: string;
    status: number;
    achieved_at: string;
  }>;
};

type Props = {
  data: Tracking;
  code?: string;
  currentUser?: Session | null;
};

const TrackingContent = ({ data, code, currentUser }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const lastSegment = data.checkpoints[data.checkpoints.length - 1];
  const item = data.checkpoints.map((item, index) => {
    const orderStatus = OrderStatusMap[item.status];
    return {
      children: (
        <div key={index}>
          <p className="uppercase font-medium text-base text-gray-600 mb-1">
            Ngày {dayjs(item.achieved_at).format("DD/MM/YYYY lúc HH:mm:ss")}
          </p>
          <div className="bg-white p-3 py-2 text-lg rounded-md min-h-[70px] shadow-sm">
            <b className="font-semibold">
              Đơn hàng{" "}
              <span
                className={cn(
                  item.status === 5 ? "text-red-600" : "text-primary-color"
                )}
              >
                {orderStatus}
              </span>{" "}
              {item.name ? ` ${item.name}` : null}{" "}
            </b>

            <p className="text-gray-500">{item.address}</p>
          </div>
        </div>
      ),
    };
  });
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
    <>
      <div className="text-center">
        <h1 className="font-bold text-xl">
          Đơn hàng <span className="uppercase">#{code}</span>
        </h1>
        <p>
          Đơn hàng{" "}
          <b
            className={cn(
              lastSegment.status === 5 ? "text-red-600" : "text-primary-color"
            )}
          >
            {OrderStatusMap[lastSegment.status]}
          </b>{" "}
          vào lúc{" "}
          {dayjs(lastSegment.achieved_at).format("hh:mm dddd DD/MM/YYYY")}
        </p>
        {data.can_be_paid && !currentUser ? (
          <p className="italic mt-2">
            (Đơn hàng này chưa được thanh toán.{" "}
            <span
              onClick={handlePayment}
              className="text-primary-color cursor-pointer hover:underline"
            >
              Thanh toán ngay.
            </span>
            )
          </p>
        ) : null}
        {data.can_be_cancelled && !currentUser ? (
          <p className="italic mt-2">
            (Đơn hàng này đủ điều kiện hủy.{" "}
            <span
              onClick={() => setIsOpen(true)}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Hủy.
            </span>
            )
          </p>
        ) : null}
      </div>
      <div className="mt-8">
        <Timeline reverse items={item} />
      </div>
      <VerifyCancelModal
        isModalOpen={isOpen}
        handleCancel={() => setIsOpen(false)}
        code={code}
      />
    </>
  );
};

export default TrackingContent;

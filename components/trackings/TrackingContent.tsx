import { Timeline } from "antd";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { GoDotFill } from "react-icons/go";
import { cn } from "@/lib/utils";
import { OrderStatusMap } from "@/lib/constants";
dayjs.locale("vi");



export type Tracking = {
  details: Array<{
    status: number;
    created_at: string;
    location: string | null;
  }>;
  payment: {
    status: number;
    value: number;
  };
};

type Props = {
  data: Tracking;
  code?: string;
};

const TrackingContent = ({ data, code }: Props) => {
  const lastSegment = data.details[data.details.length - 1];
  const item = data.details.map((item, index) => {
    const orderStatus = OrderStatusMap[item.status];
    return {
      dot: (
        <GoDotFill
          size="20"
          className={cn(
            item.status !== 5 ? "text-red-600" : "",
            index !== data.details.length - 1
              ? "text-gray-500"
              : "text-primary-color animate-ping"
          )}
        />
      ),
      label: (
        <div className="text-center rounded-sm py-5">
          <p className="font-medium">
            {dayjs(item.created_at).format("DD/MM/YYYY")}
          </p>
          <p className="">{dayjs(item.created_at).format("hh:mm")}</p>
        </div>
      ),
      children: (
        <div className="bg-white p-5 rounded-md min-h-[89px]">
          <p className="font-semibold">Đơn hàng {orderStatus}</p>
          <p className="text-gray-500">{item.location}</p>
        </div>
      ),
    };
  });
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">Đơn hàng {code}</h1>
      <p>
        Đơn hàng{" "}
        <b
          className={cn(
            lastSegment.status === 5 ? "text-red-600" : "text-primary-color"
          )}
        >
          {OrderStatusMap[lastSegment.status]}
        </b>{" "}
        vào lúc {dayjs(lastSegment.created_at).format("hh:mm dddd DD/MM/YYYY")}
      </p>
      <div className="timeline_container mt-8 px-3 lg:px-40">
        <Timeline mode="left" reverse items={item} />
      </div>
    </div>
  );
};

export default TrackingContent;

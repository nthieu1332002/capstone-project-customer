import { Timeline } from "antd";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { cn } from "@/lib/utils";
import { OrderStatusMap } from "@/lib/constants";
dayjs.locale("vi");

export type Tracking = {
  milestones: Array<{
    type: number;
    achievedAt: string;
    location: string | null;
    address: string | null;
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
  const lastSegment = data.milestones[data.milestones.length - 1];
  const item = data.milestones.map((item, index) => {
    const orderStatus = OrderStatusMap[item.type];
    return {
      children: (
        <div key={index}>
          <p className="uppercase font-medium text-base text-gray-600 mb-1">
            Ngày {dayjs(item.achievedAt).format("DD/MM/YYYY lúc hh:mm:ss")}
          </p>
          <div className="bg-white p-3 py-2 text-lg rounded-md min-h-[70px] shadow-sm">
            <b className="font-semibold">Đơn hàng {orderStatus} {item.location ? (`tại ${item.location}`) : null} </b>
            <p className="text-gray-500">{item.address}</p>
          </div>
        </div>
      ),
    };
  });
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-xl">Đơn hàng {code}</h1>
        <p>
          Đơn hàng{" "}
          <b
            className={cn(
              lastSegment.type === 6 ? "text-red-600" : "text-primary-color"
            )}
          >
            {OrderStatusMap[lastSegment.type]}
          </b>{" "}
          vào lúc{" "}
          {dayjs(lastSegment.achievedAt).format("hh:mm dddd DD/MM/YYYY")}
        </p>
      </div>
      <div className="mt-8">
        <Timeline reverse items={item} />
      </div>
    </>
  );
};

export default TrackingContent;

import { Timeline } from "antd";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { cn } from "@/lib/utils";
import { OrderStatusMap } from "@/lib/constants";
dayjs.locale("vi");

export type Tracking = {
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
};

const TrackingContent = ({ data, code }: Props) => {
  console.log("dât", data);
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
                  item.status === 5
                    ? "text-red-600"
                    : "text-primary-color"
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
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-xl">
          Đơn hàng <span className="uppercase">{code}</span>
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
      </div>
      <div className="mt-8">
        <Timeline reverse items={item} />
      </div>
    </>
  );
};

export default TrackingContent;

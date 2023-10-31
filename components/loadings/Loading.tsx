import { cn } from "@/lib/utils";
import { Spin } from "antd";
import React from "react";

type Props = {
  className?: string;
};

const Loading = ({ className } : Props) => {
  return (
    <div
      className={cn(
        "h-[500px] w-full flex items-center justify-center",
        className
      )}
    >
      <Spin />
    </div>
  );
};

export default Loading;

import { Steps } from "antd";
import React from "react";

type Props = {
    current: number;
};

const BookingSteps = ({current}: Props) => {
  return (
    <Steps
      size="small"
      progressDot
      current={current}
      className="font-semibold"
      items={[
        {
          title: <p className="text-primary text-sm"> Chi tiết đơn hàng</p>,
        },
        {
          title: <p className="text-black text-sm">Thanh toán</p>,
        },
        {
          title: <p className="text-black text-sm">Bước cuối cùng</p>,
        },
      ]}
    />
  );
};

export default React.memo(BookingSteps);

import { Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

const TrackingOrderBar = (props: Props) => {
  const router = useRouter();

  const onSearch = (value: string) => {
    router.push(`/tracking?code=${value}`);
  };
  return (
    <div>
      <Input
        allowClear
        prefix={<BiSearchAlt size="18" className="text-zinc-500" />}
        placeholder="Tra cứu mã đơn hàng"
        className="custom-search-sidebar"
        onPressEnter={(e) => onSearch(e.currentTarget.value.replace(/ /g,''))}
      />
    </div>
  );
};

export default TrackingOrderBar;

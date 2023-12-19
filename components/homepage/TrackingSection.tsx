"use client";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Button from "../Button";

const TrackingSection = () => {
  const router = useRouter();
  const [value, setValue] = useState("")
  const onSearch = () => {
    router.push(`/tracking?code=${value}`);
  };
  return (
    <div className="mx-auto lg:px-60 px-4 py-5 md:py-10 min-h-[250px]">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">
        Tra cứu vận đơn
      </h1>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full bg-white p-5 rounded-lg shadow-md border">
        <Input
          allowClear
          prefix={<BiSearchAlt size="18" className="text-zinc-500" />}
          placeholder="Tra cứu mã đơn hàng"
          className="custom-search-sidebar h-14"
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/ /g, ""))}
        />
        <div className="w-24">
          <Button label="Tra cứu" onClick={() => onSearch()}/>
        </div>
      </div>
    </div>
  );
};

export default TrackingSection;

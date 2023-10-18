"use client";

import SearchItem from "@/components/search/SearchItem";
import { Select } from "antd";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

type Props = {};
const routes = [{}];
export default function Search() {
  return (
    <div className="py-8 px-10">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-sm font-medium">10 kết quả tìm được</p>
          <div className="flex gap-1 items-center">
            <small>Sắp xếp theo:</small>
            <Select
              defaultValue="Mặc định"
              style={{ width: "auto" }}
              bordered={false}
              options={[
                { value: "Mặc định", label: "Mặc định" },
                { value: "Giá thấp đến cao", label: "Giá thấp đến cao" },
                { value: "Giá cao đến thấp", label: "Giá cao đến thấp" },
              ]}
              dropdownStyle={{ width: "auto" }}
              suffixIcon={<BiChevronDown size="20" className="text-black" />}
            />
          </div>
        </div>
        {routes.map((route) => {
          return <SearchItem key={1}/>;
        })}
      </div>
    </div>
  );
}

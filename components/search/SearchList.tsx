"use client";

import { route } from "@/app/search/page";
import { Pagination, Select } from "antd";
import React, { useCallback } from "react";
import { BiChevronDown } from "react-icons/bi";
import SearchItem from "./SearchItem";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type Props = {
  routes: route[];
  data: any;
};

const SearchList = ({ routes, data }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleNavigation = (page: number, pageSize: number) => {
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { ...Object.fromEntries(params), skip: pageSize * (page - 1) },
      },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <>
      <div className="flex justify-end items-center">
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
      {routes.map((route) => {
        return <SearchItem key={route.id} route={route} />;
      })}
      <div className="flex items-center justify-center mt-3">
        <Pagination
          defaultCurrent={1}
          pageSize={data.limit}
          total={data.total}
          showSizeChanger={false}
          onChange={(page, pageSize) => handleNavigation(page, pageSize)}
        />
      </div>
    </>
  );
};

export default SearchList;

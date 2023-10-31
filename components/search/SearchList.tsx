"use client";

import { route } from "@/app/search/page";
import { Pagination, Select } from "antd";
import React, { useCallback } from "react";
import { BiChevronDown } from "react-icons/bi";
import SearchItem from "./SearchItem";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Booking } from "@/hooks/useBookingStore";

type Props = {
  data: Booking[];
  from?: string;
  to?: string;
};

const SearchList = ({ data, from, to }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  // const handleNavigation = (page: number, pageSize: number) => {
  //   const url = qs.stringifyUrl(
  //     {
  //       url: "/search",
  //       query: { ...Object.fromEntries(params), skip: pageSize * (page - 1) },
  //     },
  //     { skipNull: true }
  //   );
  //   router.push(url);
  // };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col mb-3">
        <p className="text-sm font-medium">
          {data.length} kết quả tìm được cho
        </p>
        {from && to ? (
          <p className="text-lg font-bold">
            {from}
            <span className="font-normal"> - </span>
            {to}
          </p>
        ) : null}
      </div>
      {data.map((route, index) => {
        return <SearchItem key={index} route={route} />;
      })}
      {/* <div className="flex items-center justify-center mt-3">
        <Pagination
          defaultCurrent={1}
          pageSize={data.limit}
          total={data.total}
          showSizeChanger={false}
          onChange={(page, pageSize) => handleNavigation(page, pageSize)}
        />
      </div> */}
    </div>
  );
};

export default SearchList;

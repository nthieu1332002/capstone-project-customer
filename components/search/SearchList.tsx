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
     
    </div>
  );
};

export default SearchList;

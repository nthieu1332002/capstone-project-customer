"use client";

import React from "react";
import SearchItem from "./SearchItem";
import { Booking } from "@/hooks/useBookingStore";
import { Badge } from "antd";

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
        return route.note ? (
          <Badge.Ribbon key={index} color="purple" text={route.note}>
            <SearchItem route={route} />
          </Badge.Ribbon>
        ) : (
          <SearchItem key={index} route={route} />
        );
      })}
    </div>
  );
};

export default SearchList;

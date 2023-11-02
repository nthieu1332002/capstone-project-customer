import SearchList from "@/components/search/SearchList";

import React from "react";
import qs from "query-string";
import { axios } from "@/lib/axios";
import { cache } from 'react'
export type route = {
  id: number;
  name: string;
  image: string;
  price: number;
  from: {
    name: string;
    location: string;
  };
  to: {
    name: string;
    location: string;
  };
  distance: number;
};

type SearchParams = {
  skip?: string;
  from?: string;
  to?: string;
  date?: string;
};

const getSearchList = cache(async ({ skip, from, to, date }: SearchParams) => {
  try {
    const url = qs.stringifyUrl(
      {
        url: "/api/customer/route/search",
        query: {
          skip: skip,
          limit: 10,
          start_address: from,
          end_address: to,
          date: date,
        },
      },
      { skipNull: true }
    );
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const from = searchParams?.from;
  const to = searchParams?.to;
  const date = searchParams?.date;
  const skip = searchParams?.skip;
  let data = [];
  if (from && to) {
    data = await getSearchList({ skip, from, to, date });
  }
  return (
    <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
      {data.length > 0 ? (
        <SearchList data={data} from={from} to={to}/>
      ) : (
        <p>Không có kết quả được tìm thấy.</p>
      )}
    </div>
  );
}

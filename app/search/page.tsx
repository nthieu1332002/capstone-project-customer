import SearchList from "@/components/search/SearchList";

import React from "react";
import qs from "query-string";
import { axios } from "@/lib/axios";
import { packageType } from "@/lib/constants";
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
  start_latitude?: string;
  start_longitude?: string;
  end_latitude?: string;
  end_longitude?: string;
  package_types?: string;
};

const getSearchList = async ({
  start_latitude,
  start_longitude,
  end_latitude,
  end_longitude,
  package_types,
}: SearchParams) => {
  try {
    const url = qs.stringifyUrl(
      {
        url: "/api/customer/route/search",
        query: {
          start_latitude,
          start_longitude,
          end_latitude,
          end_longitude,
          package_types,
        },
      },
      { skipNull: true }
    );
    console.log("url", url);
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const {
    from,
    to,
    start_latitude,
    start_longitude,
    end_latitude,
    end_longitude,
    package_types,
  } = searchParams || {};
  console.log("package_types", package_types);
  const filteredType = packageType
    .filter((item) => package_types?.includes(item.label))
    .map((item) => item.value)
    .toString();
  const data =
    from &&
    to &&
    start_latitude &&
    start_longitude &&
    end_latitude &&
    end_longitude &&
    filteredType
      ? await getSearchList({
          start_latitude,
          start_longitude,
          end_latitude,
          end_longitude,
          package_types: filteredType,
        })
      : [];
  console.log("dât", data);
  return (
    <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
      {data.length > 0 ? (
          <SearchList data={data} from={from} to={to} />
      ) : (
        <p>Không có kết quả được tìm thấy.</p>
      )}
    </div>
  );
}

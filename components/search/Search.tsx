"use client";

import React, { useCallback, useState } from "react";
import qs from "query-string";
import { GoLocation, GoPackage } from "react-icons/go";
import { TbLocation } from "react-icons/tb";

import { IoIosSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import DebouceInput from "./DebouceInput";
import { Select } from "antd";
import { packageType } from "@/lib/constants";
import axios from "axios";
import toast from "react-hot-toast";

const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
export const getCoordinates = async (location: string) => {
  try {
    const res = await axios.get(
      `https://rsapi.goong.io/geocode?address=${location}&api_key=${apiKey}`
    );
    return res.data.results[0].geometry.location;
  } catch (error) {
    toast.error("Có lỗi xảy ra với google maps apis!");
    console.log(error);
  }
};
const Search = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [packages, setPackages] = useState<string[]>();
  const router = useRouter();
  const handleSearch = async () => {
    if (!from || !to || !packages) {
      return;
    }
    try {
      const [start, end] = await Promise.all([
        getCoordinates(from),
        getCoordinates(to),
      ]);
      const url = qs.stringifyUrl(
        {
          url: "/search",
          query: {
            from,
            to,
            start_latitude: start.lat,
            start_longitude: start.lng,
            end_latitude: end.lat,
            end_longitude: end.lng,
            package_types: packages.toString(),
          },
        },
        { skipNull: true }
      );
      router.push(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = useCallback((value: string[]) => {
    setPackages(value);
  }, []);

  return (
    <div className="absolute flex gap-2 shadow-md bg-white rounded-md pl-8 pr-5 py-5 w-[1000px] bottom-4">
      <div className="border-[1px] w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex items-center justify-between text-sm font-semibold mx-1">
          <div className="flex items-center gap-2 px-6 w-full">
            <GoLocation size="18" />
            <div className="relative flex flex-col w-full">
              <label htmlFor="from"> Nơi xuất phát</label>
              <DebouceInput
                placeholder="Chọn điểm xuất phát"
                value={from}
                onChange={(e: any) => setFrom(e.target.value)}
                onChangeLocation={(value: string) => setFrom(value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 px-6 w-full border-x">
            <TbLocation size="18" />
            <div className="relative flex flex-col w-full">
              <label htmlFor="to">Điểm đến</label>
              <DebouceInput
                placeholder="Chọn điểm đến"
                value={to}
                onChange={(e: any) => setTo(e.target.value)}
                onChangeLocation={(value: string) => setTo(value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 px-6 w-full">
            <GoPackage size="18" />
            <div className="relative flex flex-col w-full">
              <label htmlFor="packages">Loại hàng</label>
              <Select
                id="packages"
                mode="multiple"
                options={packageType}
                filterOption={(input, option) =>
                  (option?.label.toLowerCase() ?? "").includes(
                    input.toLowerCase()
                  )
                }
                onChange={handleChange}
                maxTagCount="responsive"
                className="custom-search"
                placeholder="Chọn loại hàng"
                bordered={false}
                suffixIcon={null}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleSearch}
          className="rotate-12 p-3 rounded-full bg-primary-color shadow-primary-color/75 shadow-lg text-white active:translate-y-1"
        >
          <IoIosSend size={22} />
        </button>
      </div>
    </div>
  );
};

export default Search;

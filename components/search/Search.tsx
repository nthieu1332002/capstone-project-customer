"use client";

import React, { useCallback, useState } from "react";
import qs from "query-string";
import { GoLocation, GoPackage } from "react-icons/go";
import { TbLocation } from "react-icons/tb";

import { IoIosSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import DebouceInput from "./DebouceInput";
import { Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { LocationType, packageList } from "@/lib/constants";

const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
export const getCoordinates = async (location: string) => {
  try {
    if (!location) {
      return null;
    }
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

  const initialValue = {
    code: "",
    parent_code: "",
    path_with_type: "",
  };
  const [locationFrom, setLocationFrom] = useState<LocationType>(initialValue);
  const [locationTo, setLocationTo] = useState<LocationType>(initialValue);

  const [packages, setPackages] = useState<string[]>();
  const router = useRouter();
  const handleSearch = async () => {
    if (((!from || !to) && (!locationFrom || !locationTo)) || !packages) {
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
            from: from || locationFrom.path_with_type,
            to: to || locationTo.path_with_type,
            start_city_code: locationFrom.parent_code,
            start_district_code: locationFrom.code,
            end_city_code: locationTo.parent_code,
            end_district_code: locationTo.code,
            start_latitude: start?.lat,
            start_longitude: start?.lng,
            end_latitude: end?.lat,
            end_longitude: end?.lng,
            package_types: packages.toString(),
          },
        },
        { skipNull: true }
      );
      router.push(url);
    } catch (error) {
      console.error("error handle", error);
    }
  };

  const handleChange = useCallback((value: string[]) => {
    setPackages(value);
  }, []);

  return (
    <div className="absolute flex gap-2 shadow-md bg-white rounded-md pl-8 pr-5 py-5 w-[calc(100%-1rem)] lg:w-[1000px] bottom-4">
      <div className="md:border-[1px] w-full py-2 md:rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between text-sm font-semibold mx-1">
          <div className="flex items-center gap-2 px-3 md:px-6 w-full">
            <GoLocation size="18" className="text-black"/>
            <div className="relative flex flex-col w-full">
              <label htmlFor="from" className="text-black"> Nơi xuất phát</label>
              <DebouceInput
                placeholder="Chọn điểm xuất phát"
                value={from || locationFrom.path_with_type}
                onChange={(e) => setFrom(e.target.value)}
                onChangeAddress={(value) => {
                  setFrom(value);
                  setLocationFrom(initialValue);
                }}
                onChangeLocation={(value) => {
                  setFrom("");
                  setLocationFrom(value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 md:px-6 w-full md:border-x text-black">
            <TbLocation size="18" />
            <div className="relative flex flex-col w-full">
              <label htmlFor="to">Điểm đến</label>
              <DebouceInput
                placeholder="Chọn điểm đến"
                value={to || locationTo.path_with_type}
                onChange={(e) => setTo(e.target.value)}
                onChangeAddress={(value) => {
                  setTo(value);
                  setLocationTo(initialValue);
                }}
                onChangeLocation={(value) => {
                  setTo("");
                  setLocationTo(value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 md:px-6 w-full ">
            <GoPackage size="18" className="text-black"/>
            <div className="relative flex flex-col w-full">
              <label htmlFor="packages"className="text-black">Loại hàng</label>
              <Select
                id="packages"
                mode="multiple"
                options={packageList}
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

"use client";

import { Select } from "antd";
import React, { useCallback, useState, useTransition } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import qs from "query-string";

import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import Button from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import DebouceInputAntd from "./DebouceInputAntd";
import { LocationType, locationList, packageList } from "@/lib/constants";
import { getCoordinates } from "./Search";

const SearchSideBar = () => {
  const searchParams = useSearchParams();
  const initialValue = {
    code: "",
    parent_code: "",
    path_with_type: "",
  };
  const fromParam = searchParams.get("from");
  const toParam = searchParams.get("to");
  const start_city_code = searchParams.get("start_city_code");
  const start_district_code = searchParams.get("start_district_code");

  const end_city_code = searchParams.get("end_city_code");
  const end_district_code = searchParams.get("end_district_code");

  const package_types = searchParams.get("package_types");
  const [locationFrom, setLocationFrom] = useState<LocationType>(
    locationList.find(
      (location) =>
        location.code === start_district_code &&
        location.parent_code === start_city_code
    ) || initialValue
  );
  const [locationTo, setLocationTo] = useState<LocationType>(
    locationList.find(
      (location) =>
        location.code === end_district_code &&
        location.parent_code === end_city_code
    ) || initialValue
  );
  const [from, setFrom] = useState<string>(fromParam || "");
  const [to, setTo] = useState<string>(toParam || "");

  const [isPending, startTransition] = useTransition();
  const [packages, setPackages] = useState<string[] | undefined>(
    package_types?.split(",") || undefined
  );
  const router = useRouter();
  const handleSubmit = async () => {
    console.log("Submit");
    if (((!from || !to) && (!locationFrom || !locationTo)) || !packages) {
      return;
    }
    try {
      const [start, end] = await Promise.all([
        getCoordinates(from),
        getCoordinates(to),
      ]);
      console.log("start", start);
      console.log("end", end);
      startTransition(() => {
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
        console.log("url", url);
        router.replace(url);
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChange = useCallback((value: string[]) => {
    setPackages(value);
  }, []);
  return (
    <div className="px-12 pt-6 pb-3">
      <div className="flex flex-col gap-2">
        <div>
          <button
            onClick={() => router.push("/")}
            className="p-3 rounded-full text-black hover:bg-gray-200 transition"
          >
            <IoMdArrowRoundBack size={24} />
          </button>
        </div>
        <h1 className="text-lg font-bold">Tìm kiếm của bạn</h1>

        <label htmlFor="from" className="font-semibold text-sm">
          Nơi xuất phát
        </label>
        <DebouceInputAntd
          id="from"
          prefix={<FaLocationDot className="text-zinc-500" />}
          placeholder="Chọn điểm xuất phát"
          value={from || locationFrom.path_with_type}
          setValue={(e) => setFrom(e)}
          onChangeAddress={(value) => {
            setFrom(value);
            setLocationFrom(initialValue);
          }}
          onChangeLocation={(value) => {
            setFrom("");
            setLocationFrom(value);
          }}
        />
        <label htmlFor="to" className="font-semibold text-sm">
          Điểm đến
        </label>
        <DebouceInputAntd
          id="to"
          prefix={<FaLocationArrow className="text-zinc-500" />}
          placeholder="Chọn điểm đến"
          value={to || locationTo.path_with_type}
          setValue={(e) => setTo(e)}
          onChangeAddress={(value) => {
            setTo(value);
            setLocationTo(initialValue);
          }}
          onChangeLocation={(value) => {
            setTo("");
            setLocationTo(value);
          }}
        />
        <label htmlFor="packages" className="font-semibold text-sm">
          Loại hàng
        </label>
        <Select
          id="packages"
          mode="multiple"
          options={packageList}
          filterOption={(input, option) =>
            (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())
          }
          defaultValue={packages}
          onChange={handleChange}
          className="custom-search"
          placeholder="Chọn loại hàng"
          suffixIcon={null}
          allowClear
        />
        <Button
          disabled={
            isPending ||
            ((!from || !to) && (!locationFrom || !locationTo)) ||
            packages?.length === 0
          }
          onClick={handleSubmit}
          className="rounded-full mt-3"
          label="Tìm kiếm"
        />
      </div>
    </div>
  );
};

export default SearchSideBar;

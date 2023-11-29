"use client";

import { Form, Input, Select } from "antd";
import React, { useCallback, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import qs from "query-string";

import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import Button from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import DebouceInputAntd from "./DebouceInputAntd";
import { packageType } from "@/lib/constants";
import { getCoordinates } from "./Search";

type FieldType = {
  from: string;
  to: string;
};

const SearchSideBar = () => {
  const searchParams = useSearchParams();

  const fromParam = searchParams.get("from") || undefined;
  const toParam = searchParams.get("to") || undefined;
  const package_types = searchParams.get("package_types") || undefined;
  const [from, setFrom] = useState<string>(fromParam || "");
  const [to, setTo] = useState<string>(toParam || "");
  const [packages, setPackages] = useState<string[] | undefined>(
    package_types?.split(",") || undefined
  );
  const init = packageType
    .filter((item) => packages?.includes(item.value.toString()))
    .map((item) => item.label);
  const router = useRouter();

  const handleSubmit = async () => {
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
        console.log(url);
      router.push(url);
    } catch (error) {}
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
          value={from}
          setValue={(e) => setFrom(e)}
        />
        <label htmlFor="to" className="font-semibold text-sm">
          Điểm đến
        </label>
        <DebouceInputAntd
          id="to"
          prefix={<FaLocationArrow className="text-zinc-500" />}
          placeholder="Chọn điểm đến"
          value={to}
          setValue={(e) => setTo(e)}
        />
        <label htmlFor="packages" className="font-semibold text-sm">
          Loại hàng
        </label>
        <Select
          id="packages"
          mode="multiple"
          options={packageType}
          filterOption={(input, option) =>
            (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())
          }
          defaultValue={init}
          onChange={handleChange}
          className="custom-search"
          placeholder="Chọn loại hàng"
          suffixIcon={null}
          allowClear
        />
        <Button
          onClick={handleSubmit}
          className="rounded-full mt-3"
          label="Tìm kiếm"
        />
      </div>
    </div>
  );
};

export default SearchSideBar;

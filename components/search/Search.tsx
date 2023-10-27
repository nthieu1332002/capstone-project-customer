"use client";

import React, { useRef, useState } from "react";
import qs from "query-string";
import { DatePicker } from "antd";
import { GoLocation } from "react-icons/go";
import { TbLocation } from "react-icons/tb";

import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { MdOutlineDateRange } from "react-icons/md";
import locale from "antd/es/date-picker/locale/vi_VN";
import { IoIosSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Autocomplete, Libraries, LoadScript } from "@react-google-maps/api";

locale.lang.shortWeekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
locale.lang.shortMonths = [
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "T8",
  "T9",
  "T10",
  "T11",
  "T12",
];
const DATE_FORMAT = "DD/MM/YYYY";
const libraries: Libraries = ["places"];

const Search = () => {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState(dayjs(new Date()).format("DD-MM-YYYY"));
  const router = useRouter();
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const handleSearch = () => {
    if (!fromRef.current?.value || !toRef.current?.value || !date) {
      return;
    }
    const url = qs.stringifyUrl({
      url: "/search",
      query: {
        from: fromRef.current?.value,
        to: toRef.current?.value,
        date,
      }
    }, { skipNull: true });

    router.push(url);
  };

  return (
    <div className="absolute flex gap-2 shadow-md bg-white rounded-md pl-8 pr-5 py-5 w-[1000px] bottom-4">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
        libraries={libraries}
        region="vn"
      >
        <div className="border-[1px] w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center justify-between text-sm font-semibold mx-1">
            <div className="flex items-center gap-2 px-6 w-full">
              <GoLocation size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="from"> Nơi xuất phát</label>
                <Autocomplete>
                  <input
                    id="from"
                    type="text"
                    className="custom-search"
                    placeholder="Chọn điểm xuất phát"
                    ref={fromRef}
                  />
                </Autocomplete>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 w-full border-x">
              <TbLocation size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="to">Điểm đến</label>
                <Autocomplete>
                  <input
                    id="to"
                    type="text"
                    className="custom-search"
                    placeholder="Chọn điểm đến"
                    ref={toRef}
                  />
                </Autocomplete>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 w-full">
              <MdOutlineDateRange size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="date">Ngày đi</label>
                <DatePicker
                  id="date"
                  format={DATE_FORMAT}
                  value={date ? dayjs(date, DATE_FORMAT) : null}
                  disabledDate={disabledDate}
                  onChange={(value) =>
                    setDate(value?.format("DD-MM-YYYY") as string)
                  }
                  locale={locale}
                  suffixIcon={null}
                  placeholder="Chọn ngày đi"
                  bordered={false}
                  className="custom-search"
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
      </LoadScript>
    </div>
  );
};

export default Search;

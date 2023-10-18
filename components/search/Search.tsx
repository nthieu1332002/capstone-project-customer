"use client";

import React, { useRef, useState } from "react";

import { DatePicker } from "antd";
import { GoLocation } from "react-icons/go";
import { TbLocation } from "react-icons/tb";

import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { MdOutlineDateRange } from "react-icons/md";
import locale from "antd/es/date-picker/locale/vi_VN";
import { IoIosSend } from "react-icons/io";
import GoogleMapSearch from "../maps/GoogleMapSearch";

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

const Search = () => {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleSearch = async () => {
    if (!fromRef.current?.value || !toRef.current?.value) {
      return;
    }
    console.log("from:", fromRef.current?.value);
    console.log("to:", toRef.current?.value);
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: fromRef.current.value,
      destination: toRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    console.log(results);
  };
  return (
    <>
      <div className="absolute flex gap-2 shadow-md bg-white rounded-md pl-8 pr-5 py-5 w-[1000px] bottom-4">
        <div className="border-[1px] w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex items-center justify-between text-sm font-semibold mx-1">
            <div className="flex items-center gap-2 px-6 w-full">
              <GoLocation size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="from"> Nơi xuất phát</label>
                <GoogleMapSearch>
                  <input
                    id="from"
                    type="text"
                    className="custom-search"
                    placeholder="Chọn điểm xuất phát"
                    ref={fromRef}
                  />
                </GoogleMapSearch>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 w-full border-x">
              <TbLocation size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="to">Điểm đến</label>
                <GoogleMapSearch>
                  <input
                    id="to"
                    type="text"
                    className="custom-search"
                    placeholder="Chọn điểm đến"
                    ref={toRef}
                  />
                </GoogleMapSearch>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 w-full">
              <MdOutlineDateRange size="18" />
              <div className="relative flex flex-col w-full">
                <label htmlFor="date">Ngày đi</label>
                <DatePicker
                  id="date"
                  defaultValue={dayjs(new Date())}
                  format={DATE_FORMAT}
                  disabledDate={disabledDate}
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
      </div>
    </>
  );
};

export default Search;

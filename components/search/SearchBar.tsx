"use client";

import { DatePicker, Form, Input } from "antd";
import React, { memo, useCallback, useEffect, useState } from "react";
import { IoIosSend, IoMdArrowRoundBack } from "react-icons/io";
import locale from "antd/es/date-picker/locale/vi_VN";
import qs from "query-string";

import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import { Autocomplete, Libraries, LoadScript } from "@react-google-maps/api";
import Loading from "@/components/loadings/Loading";

import { TbArrowsExchange } from "react-icons/tb";
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
type Props = {};
const DATE_FORMAT = "DD/MM/YYYY";
type FieldType = {
  from: string;
  to: string;
  date: string;
};
const libraries: Libraries = ["places"];
const SearchBar = (props: Props) => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const router = useRouter();

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const handleSubmit = useCallback(
    (values: FieldType) => {
      const url = qs.stringifyUrl(
        {
          url: "/search",
          query: {
            from: values.from,
            to: values.to,
            date: dayjs(values.date).format("DD-MM-YYYY")
          },
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [router]
  );
  return (
    <div className="px-24 py-3 border-b">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
        libraries={libraries}
        region="vn"
        loadingElement={<Loading />}
      >
        <Form
          layout="vertical"
          name="search-sidebar-form"
          onFinish={handleSubmit}
          onFinishFailed={(error) => {
            console.log("error", error);
          }}
          requiredMark={false}
          initialValues={{
            from: from,
            to: to,
            date: date ? dayjs(date, DATE_FORMAT) : dayjs(new Date()),
          }}
          className="flex w-full gap-3"
        >
          <Autocomplete>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Nơi xuất phát</p>}
              name="from"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!pb-0 !mb-0 flex-1"
            >
              <Input
                allowClear
                prefix={<FaLocationDot className="text-zinc-500" />}
                placeholder="Chọn điểm xuất phát"
                className="custom-search-sidebar w-full"
              />
            </Form.Item>
          </Autocomplete>
          <div className="flex items-end">
            <button className="p-3 rounded-full hover:bg-zinc-300 text-black active:translate-y-1">
              <TbArrowsExchange size={22} />
            </button>
          </div>
          <Autocomplete>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Điểm đến</p>}
              name="to"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!pb-0 !mb-0 flex-1"
            >
              <Input
                allowClear
                prefix={<FaLocationArrow className="text-zinc-500" />}
                placeholder="Chọn điểm đến"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </Autocomplete>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Ngày đi</p>}
            name="date"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            className="!pb-0 !mb-0 ml-3"
          >
            <DatePicker
              id="date"
              format={DATE_FORMAT}
              disabledDate={disabledDate}
              locale={locale}
              suffixIcon={
                <BsFillCalendar2EventFill className="text-zinc-500" />
              }
              placeholder="Chọn ngày đi"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <div className="flex items-end">
            <button
              type="submit"
              className="rotate-12 p-3 rounded-full bg-primary-color shadow-primary-color/75 shadow-lg text-white active:translate-y-1"
            >
              <IoIosSend size={21} />
            </button>
          </div>
        </Form>
      </LoadScript>
    </div>
  );
};

export default memo(SearchBar);

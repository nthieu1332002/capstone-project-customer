"use client";

import { DatePicker, Form, Input } from "antd";
import React from "react";
import { GoLocation } from "react-icons/go";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbLocation } from "react-icons/tb";
import locale from "antd/es/date-picker/locale/vi_VN";

import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import Button from "../Button";
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
const SearchSideBar = (props: Props) => {
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };
  return (
    <div className="px-12 py-6 bg-[#f8f8f8] border-b">
      <div className="flex flex-col gap-2">
        <div className="flex justify-start">
          <button className="p-3 rounded-full text-black hover:bg-gray-200 transition">
            <IoMdArrowRoundBack size={24} />
          </button>
        </div>
        <h1 className="text-lg font-bold">Tìm kiếm của bạn</h1>
        <Form
          // form={form}
          layout="vertical"
          name="login-form"
          // onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Nơi xuất phát</p>}
            name="from"
            rules={[
              {
                required: true,
                message: "Email hoặc số điện thoại không được bỏ trống.",
              },
            ]}
          >
            <Input
              prefix={<FaLocationDot className="text-zinc-500" />}
              placeholder="Chọn điểm xuất phát"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Điểm đến</p>}
            name="to"
            rules={[
              {
                required: true,
                message: "Email hoặc số điện thoại không được bỏ trống.",
              },
            ]}
          >
            <Input
              prefix={<FaLocationArrow className="text-zinc-500" />}
              placeholder="Chọn điểm đến"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Ngày đi</p>}
            name="date"
            rules={[
              {
                required: true,
                message: "Email hoặc số điện thoại không được bỏ trống.",
              },
            ]}
          >
            <DatePicker
              defaultValue={dayjs(new Date())}
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
          <Form.Item>
            <Button
              disabled={true}
              className="rounded-full"
              label="Tìm kiếm"
              htmlType="submit"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SearchSideBar;

"use client";

import { DatePicker, Form, Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import locale from "antd/es/date-picker/locale/vi_VN";
import qs from "query-string";

import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import Button from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { Autocomplete, Libraries, LoadScript } from "@react-google-maps/api";
import Loading from "../Loading";
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
const SearchSideBar = (props: Props) => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  console.log("from", from);
  console.log("to", to);

  const [form] = Form.useForm();

  const [disabled, setDisabled] = useState(true);
  const values = Form.useWatch([], form);
  const router = useRouter();

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setDisabled(false);
      },
      () => {
        setDisabled(true);
      }
    );
  }, [form, values]);

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().startOf("day");
  };

  const handleSubmit = useCallback((values: FieldType) => {
    setDisabled(true);
    console.log("values", values);
    const url = qs.stringifyUrl({
      url: "/search",
      query: {
        from: values.from,
        to: values.to,
        date: values.date,
      }
    }, { skipNull: true });

    router.push(url);
    // route.push(
    //   `/search?from=${values.from}&to=${values.to}&date=${values.date}`
    // );
  }, [router]);
  return (
    <div className="px-12 py-6 bg-[#f8f8f8] border-b">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
        libraries={libraries}
        region="vn"
        loadingElement={<Loading />}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-start">
            <button className="p-3 rounded-full text-black hover:bg-gray-200 transition">
              <IoMdArrowRoundBack size={24} />
            </button>
          </div>
          <h1 className="text-lg font-bold">Tìm kiếm của bạn</h1>
          <Form
            form={form}
            layout="vertical"
            name="login-form"
            onFinish={handleSubmit}
            requiredMark={false}
            initialValues={{
              from: from,
              to: to,
              date: date ? dayjs(date, DATE_FORMAT) : dayjs(new Date()),
            }}
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
              >
                <Input
                  allowClear
                  prefix={<FaLocationDot className="text-zinc-500" />}
                  placeholder="Chọn điểm xuất phát"
                  className="custom-search-sidebar"
                />
              </Form.Item>
            </Autocomplete>
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
            >
              <DatePicker
                id="date"
                format={DATE_FORMAT}
                value={dayjs(date, DATE_FORMAT)}
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
                disabled={disabled}
                className="rounded-full"
                label="Tìm kiếm"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        </div>
      </LoadScript>
    </div>
  );
};

export default SearchSideBar;

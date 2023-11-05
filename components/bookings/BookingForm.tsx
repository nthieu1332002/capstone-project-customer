"use client";
import Cookies from "js-cookie";

import NoteText from "@/components/NoteText";
import BookingHeader from "@/components/bookings/BookingHeader";
import { Divider, Form, Input, InputNumber } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbPackage, TbUserCircle } from "react-icons/tb";
import { PiNotePencil } from "react-icons/pi";
import Button from "@/components/Button";
import { Booking } from "@/hooks/useBookingStore";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import BookingSteps from "./BookingSteps";
import { phoneNumberPattern } from "@/lib/constants";
import qs from "query-string";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

const { TextArea } = Input;
type FieldType = {
  sender_name: string;
  sender_phone: number;
  sender_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  note: string;
  package_price: number; // giá trị hàng hóa
  weight: number;
  height: number;
  length: number;
  width: number;
};
type Props = {
  booking: Booking;
  user?: Session | null;
  onChange: (value: number) => void;
  setSizePrice: (value: number) => void;

  totalPrice: number;
  sizePrice: number;
  insurance: number;
};

const BookingForm = ({
  booking,
  user,
  onChange,
  setSizePrice,
  totalPrice,
  sizePrice,
  insurance,
}: Props) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const length = Form.useWatch("length", form);
  const width = Form.useWatch("width", form);
  const height = Form.useWatch("height", form);
  const weight = Form.useWatch("weight", form);
  const debouncedHandleFetchPrice = useDebouncedCallback(async () => {
    try {
      if (length && width && height && weight) {
        const url = qs.stringifyUrl({
          url: "/api/booking/get-price",
          query: {
            length,
            width,
            height,
            weight,
            distance: 112,
          },
        });
        const res = await axios.get(url);
        setSizePrice(res.data);
      }
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
    }
  }, 500);

  useEffect(() => {
    debouncedHandleFetchPrice();
  }, [length, width, height, weight, debouncedHandleFetchPrice]);

  const handleSubmit = async (values: FieldType) => {
    console.log(values);
    try {
      const data = {
        ...values,
        start_station_id: 1,
        end_station_id: 2,
        delivery_price: totalPrice,
        order_routes: [
          {
            id: 1,
            is_selected: true,
          },
          {
            id: 2,
            is_selected: true,
          },
        ],
      };
      console.log("data", data);
      const res = await axios.post("/api/customer/orders", data);
      Cookies.set(
        "paymentDetail",
        JSON.stringify({
          insurance: insurance,
          sizePrice: sizePrice,
          totalPrice: totalPrice,
        }),
        { expires: 1 / 48, path: "" }
      );

      router.push(`/booking/${res.data.id}/payment`);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="px-1 md:px-5 lg:px-5 xl:px-32 py-8">
      <h1 className="text-center text-black font-bold text-2xl">
        Đơn hàng của bạn
      </h1>

      <div className="flex items-center justify-center px-5 md:px-32 my-4 md:my-10">
        <BookingSteps current={0} />
      </div>
      <div className="border-2 rounded-lg p-3 lg:p-10">
        <Form
          form={form}
          id="booking-form"
          layout="vertical"
          name="booking-form"
          onFinish={handleSubmit}
          onFinishFailed={(error) => console.log("error", error)}
          autoComplete="on"
          initialValues={{
            sender_name: user?.user?.name,
            sender_phone: user?.user?.phone,
            sender_email: user?.user?.email,
          }}
        >
          <BookingHeader name="Thông tin người gửi" icon={RiErrorWarningLine} />

          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Họ và tên</p>}
            name="sender_name"
            rules={[
              {
                required: true,
                message: "Họ và tên không được bỏ trống.",
              },
              {
                type: "string",
                message: "Họ và tên phải là kí tự.",
              },
            ]}
            className="!mb-3"
          >
            <Input
              placeholder="Họ và tên người gửi"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <div className="flex flex-col md:flex-row justify-between md:gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Số điện thoại</p>}
              validateTrigger="onBlur"
              name="sender_phone"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại không được bỏ trống.",
                },
                {
                  pattern: phoneNumberPattern,
                  message: "Số điện thoại không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập số điện thoại"
                className="custom-search-sidebar"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Email</p>}
              validateTrigger="onBlur"
              name="sender_email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập email"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </div>

          <Divider />
          <BookingHeader name="Thông tin người nhận" icon={TbUserCircle} />
          <NoteText text="Thông tin người nhận nên được cung cấp một cách chính xác. Điều này giúp đảm bảo rằng dịch vụ vận chuyển sẽ được cung cấp chính xác và hiệu quả." />
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Họ và tên</p>}
            name="receiver_name"
            rules={[
              {
                required: true,
                message: "Họ và tên không được bỏ trống.",
              },
              {
                type: "string",
                message: "Họ và tên phải là kí tự.",
              },
            ]}
            className="!mb-3"
          >
            <Input
              placeholder="Họ và tên người nhận"
              className="custom-search-sidebar"
            />
          </Form.Item>
          <div className="flex flex-col md:flex-row justify-between md:gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Số điện thoại</p>}
              validateTrigger="onBlur"
              name="receiver_phone"
              rules={[
                {
                  required: true,
                  message: "Số điện thoại không được bỏ trống.",
                },
                {
                  pattern: phoneNumberPattern,
                  message: "Số điện thoại không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập số điện thoại"
                className="custom-search-sidebar"
              />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Email</p>}
              validateTrigger="onBlur"
              name="receiver_email"
              rules={[
                {
                  type: "email",
                  message: "Email không đúng định dạng.",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <Input
                placeholder="Nhập email"
                className="custom-search-sidebar"
              />
            </Form.Item>
          </div>
          <Divider />

          <BookingHeader name="Thông tin gói hàng" icon={TbPackage} />
          <NoteText text="Thông tin gói hàng nên được cung cấp một cách chính xác để giúp tiết kiệm thời gian duyệt đơn và tránh tình trạng bị hủy đơn hàng khi kiểm chứng." />

          <div className="flex flex-col md:flex-row md:gap-5">
            <Form.Item<FieldType>
              label={
                <p className="font-medium text-sm">Tổng khối lượng (gam)</p>
              }
              name="weight"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Dài (cm)</p>}
              name="length"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Rộng (cm)</p>}
              name="width"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                style={{ width: "100%" }}
                min={0}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Cao (cm)</p>}
              name="height"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="!mb-3 flex-1"
            >
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                min={0}
                style={{ width: "100%" }}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
          </div>
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Tổng giá trị hàng hóa</p>}
            name="package_price"
            rules={[
              {
                type: "number",
                message: "",
              },
            ]}
            tooltip={
              <p className="text-sm w-full">
                Giá trị hàng hóa là căn cứ xác định giá trị bồi thường nếu xảy
                ra sự cố (giá trị bồi thường tối đa 10.000.000₫). Toàn bộ đơn
                hàng của GHN bắt buộc đóng phi khai giá hàng hóa, mức phí như
                sau:
                <br />
                + Giá trị hàng hóa &lt; 1.000.000đ: Miễn phí
                <br />+ Giá trị hàng hóa &gt;= 1.000.000₫ (tối đa là
                5.000.000đ): Phí khai giá hàng hóa là 0.5% giá trị hàng hóa.
              </p>
            }
            className="!mb-3 flex-1"
          >
            <InputNumber
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              min={0}
              onChange={(value: any) => onChange(value)}
              style={{ width: "100%" }}
              className="custom-search-sidebar"
            />
          </Form.Item>
          <Divider />
          <BookingHeader name="Ghi chú - Lưu ý" icon={PiNotePencil} />
          <Form.Item<FieldType>
            label={<p className="font-medium text-sm">Ghi chú</p>}
            name="note"
            className="!mb-3 flex-1"
          >
            <TextArea rows={2} placeholder="VD: Hàng dễ vỡ." />
          </Form.Item>
          <Form.Item>
            <Button label="Xác nhận" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;

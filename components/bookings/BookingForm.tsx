"use client";

import NoteText from "@/components/NoteText";
import BookingHeader from "@/components/bookings/BookingHeader";
import {
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Select,
} from "antd";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbPackage, TbUserCircle } from "react-icons/tb";
import Button from "@/components/Button";
import { Booking } from "@/hooks/useBookingStore";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { packageType, phoneNumberPattern } from "@/lib/constants";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";
import { PiCreditCard } from "react-icons/pi";
import Image from "next/image";
import vnpay from "@/public/assets/vnpay.png";
import { axios } from "@/lib/axios";
import toast from "react-hot-toast";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { TextArea } = Input;
type FieldType = {
  sender_name: string;
  sender_phone: number;
  sender_email: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_email: string;
  weight: number;
  height: number;
  length: number;
  width: number;
  package_value: number; // giá trị hàng hóa
  note: string;
  package_types: number[];
  payment_method: number;
  collect_on_delivery: boolean;
};
type Props = {
  booking: Booking;
  user?: Session | null;
  onChange: (value: number) => void;
  setSizePrice: (value: number) => void;
  sizePrice: number;
  insurance: number;
};

const BookingForm = ({ booking, user, onChange, setSizePrice }: Props) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const length = Form.useWatch("length", form);
  const width = Form.useWatch("width", form);
  const height = Form.useWatch("height", form);
  const weight = Form.useWatch("weight", form);
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const newPackageType = packageType.filter((item) =>
    booking.acceptable_package_types.includes(item.value)
  );
  const onChangePayment = useCallback((e: RadioChangeEvent) => {
    setValue(e.target.value);
  }, []);
  const onChangePayOnDelivery = useCallback((e: CheckboxChangeEvent) => {
    setValue(0);
    setChecked(e.target.checked);
  }, []);
  const debouncedHandleFetchPrice = useDebouncedCallback(async () => {
    try {
      setError("");
      if (length && width && height && weight) {
        const url = qs.stringifyUrl({
          url: "/api/customer/package-price",
          query: {
            height: height * 10,
            width: width * 10,
            length: length * 10,
            weight: weight * 1000,
            distance: booking.total_distance,
          },
        });
        const res = await axios.get(url);
        setSizePrice(res.data.data.total_price);
      }
    } catch (error: any) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }, 500);

  useEffect(() => {
    debouncedHandleFetchPrice();
  }, [length, width, height, weight, debouncedHandleFetchPrice]);

  const handleSubmit = async (values: FieldType) => {
    setLoading(true);
    try {
      const data = {
        ...values,
        height: values.height * 10,
        width: values.width * 10,
        length: values.length * 10,
        weight: values.weight * 1000,
        order_route_id: booking.id,
      };
      const res = await axios.post("/api/customer/orders", data);
      if (res.data.data) {
        const url = qs.stringifyUrl({
          url: "booking/success",
          query: {
            code: res.data.data.code,
            email: res.data.data.email,
          },
        });
        router.replace(url);
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, tạo đơn hàng thất bại!");
    }
    setLoading(false);
  };

  return (
    <div className="px-1 md:px-5 lg:px-5 xl:px-32 py-8">
      <h1 className="text-center text-black font-bold text-2xl mb-3">
        Đơn hàng của bạn
      </h1>
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
            package_value: 0,
            package_type: 0,
            payment_method: value,
            collect_on_delivery: checked,
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
                  required: true,
                  message: "Email không được bỏ trống.",
                },
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
                  required: true,
                  message: "Email không được bỏ trống.",
                },
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
                <p className="font-medium text-sm">Tổng khối lượng (kg)</p>
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
                max={50}
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
                max={100}
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
                max={100}
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
                max={100}
                style={{ width: "100%" }}
                placeholder="10"
                className="custom-input-number"
              />
            </Form.Item>
          </div>
          <p className="text-center text-sm text-red-500">{error}</p>
          <div className="flex flex-col md:flex-row justify-between md:gap-5">
            <Form.Item<FieldType>
              label={
                <p className="font-medium text-sm">Tổng giá trị hàng hóa</p>
              }
              name="package_value"
              rules={[
                {
                  type: "number",
                  message: "",
                },
              ]}
              tooltip={
                <p className="text-sm w-full">
                  Giá trị hàng hóa là căn cứ xác định giá trị bồi thường nếu xảy
                  ra sự cố (giá trị bồi thường tối đa 10.000.000₫). Phí khai giá
                  hàng hóa (nếu có) được tính như sau:
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
                max={5000000}
                onChange={(value: any) => onChange(value)}
                style={{ width: "100%" }}
                className="custom-search-sidebar"
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="package_types"
              label={<p className="font-medium text-sm">Loại hàng hóa</p>}
              className="flex-1 custom-search-sidebar"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn loại hàng hóa",
                },
              ]}
            >
              <Select
                mode="multiple"
                options={newPackageType}
                filterOption={(input, option) =>
                  (option?.label.toLowerCase() ?? "").includes(
                    input.toLowerCase()
                  )
                }
              />
            </Form.Item>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:gap-5">
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Ghi chú</p>}
              name="note"
              className="!mb-3 flex-1"
            >
              <TextArea rows={2} placeholder="VD: Hàng dễ vỡ." />
            </Form.Item>
            <Form.Item<FieldType>
              label={<p className="font-medium text-sm">Tùy chọn thanh toán</p>}
              name="collect_on_delivery"
              className="!mb-3 flex-1"
              valuePropName="checked"
            >
              <Checkbox onChange={onChangePayOnDelivery}>
                Bên nhận trả phí?
              </Checkbox>
            </Form.Item>
          </div>

          <Divider />
          <BookingHeader name="Phương thức thanh toán" icon={PiCreditCard} />
          <Form.Item name="payment_method">
            <Radio.Group
              onChange={onChangePayment}
              size="large"
              className="w-full"
            >
              <div className="w-full flex justify-between gap-5">
                <Radio
                  value={0}
                  className={cn(
                    "!py-2 !px-3 border-2 rounded-md w-full max-h-[100px] flex !items-center",
                    value === 0 && "border-primary-color bg-primary-color/10"
                  )}
                >
                  <p className="text-lg">Tiền mặt</p>
                </Radio>

                <Radio
                  value={1}
                  className={cn(
                    "!py-2 !px-3 border-2 rounded-md w-full max-h-[100px] flex !items-center",
                    value === 1 && "border-primary-color bg-primary-color/10",
                    checked && "border-gray-300 bg-gray-300"
                  )}
                  disabled={checked}
                >
                  <Image src={vnpay} alt="logo" width={100} />
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button disabled={loading} label="Xác nhận" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;

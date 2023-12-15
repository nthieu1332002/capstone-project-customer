import OrderContent from "@/components/users/orders/OrderContent";
import { axios } from "@/lib/axios";
import { Metadata } from "next";
import qs from "query-string";

export const metadata: Metadata = {
  title: "Đơn hàng",
  description:
    "Chành xe miền tây là hệ thống kết nối, vận chuyển hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là thành phố Hồ Chí Minh và các tỉnh miền tây.",
  alternates: {
    canonical: "/user/order",
  },
};

type SearchParams = {
  code?: string;
  receiver_name?: string;
  payment_status?: string;
  delivery_price_between?: string;
  created_between?: string;
  status?: string;
  page?: string;
  per_page?: string;
};

const getAllOrders = async ({
  code,
  receiver_name,
  payment_status,
  delivery_price_between,
  created_between,
  status,
  page,
  per_page,
}: SearchParams) => {
  try {
    const url = qs.stringifyUrl(
      {
        url: "/api/customer/orders",
        query: {
          "filter[code]": code,
          "filter[receiver_name]": receiver_name,
          "filter[payment_status]": payment_status,
          "filter[delivery_price_between]": delivery_price_between,
          "filter[created_between]": created_between,
          "filter[status]": status,
          page: page,
          per_page: 10,
        },
      },
      { skipNull: true }
    );
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return null;
  }
};
const Order = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const {
    code,
    receiver_name,
    payment_status,
    delivery_price_between,
    created_between,
    status,
    page,
    per_page,
  } = searchParams || {};
  const data = await getAllOrders({
    code,
    receiver_name,
    payment_status,
    delivery_price_between,
    created_between,
    status,
    page,
    per_page,
  });
  return (
    <div className="p-1 md:p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Đơn hàng của bạn</h1>
      <p className="text-sm">Theo dõi và quản lý đơn hàng của bạn</p>
      <OrderContent data={data} status={status} />
    </div>
  );
};

export default Order;

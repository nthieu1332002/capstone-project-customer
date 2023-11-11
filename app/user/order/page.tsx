import OrderContent from "@/components/users/orders/OrderContent";
import { axios } from "@/lib/axios";
import qs from "query-string";

type SearchParams = {
  code?: string;
  payment_method?: string;
  delivery_price_between?: string;
  page?: string;
  per_page?: string;
};

const getAllOrders = async ({
  code,
  payment_method,
  delivery_price_between,
  page,
  per_page,
}: SearchParams) => {
  try {
    const url = qs.stringifyUrl(
      {
        url: "/api/customer/orders",
        query: {
          "filter[code]": code,
          "filter[payment_method]": payment_method,
          "filter[delivery_price_between]": delivery_price_between,
          page: page,
          per_page: 10,
        },
      },
      { skipNull: true }
    );
    const res = await axios.get(url);
    return res;
  } catch (error) {
    return null;
  }
};
const Order = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const { code, payment_method, delivery_price_between, page, per_page } =
    searchParams || {};
  const data = await getAllOrders({
    code,
    payment_method,
    delivery_price_between,
    page,
    per_page,
  });
  console.log(data);
  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Đơn hàng của bạn</h1>
      <p className=" text-sm">
        Theo dõi và quản lý đơn hàng của bạn
      </p>
      <OrderContent data={data} />
    </div>
  );
};

export default Order;

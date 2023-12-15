import PaymentContent from "@/components/users/payments/PaymentContent";
import { axios } from "@/lib/axios";
import React from "react";
import qs from "query-string";

const getPaymentList = async (page?: string) => {
  try {
    const url = qs.stringifyUrl(
      {
        url: "/api/customer/payments",
        query: {
          page,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    const res = await axios.get(url);
    return res.data;
  } catch (error) {}
};

const Payment = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const page = searchParams?.page;
  const data = await getPaymentList(page);
  return (
    <div className="p-1 md:p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Thanh toán của bạn</h1>
      <p className="text-sm">Theo dõi và quản lý các thanh toán của bạn</p>
      <PaymentContent data={data} />
    </div>
  );
};

export default Payment;

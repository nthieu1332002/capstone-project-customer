import getServerUser from "@/actions/getServerUser";
import OrderDetailBody from "@/components/users/orders/OrderDetailBody";
import OrderDetailHeader from "@/components/users/orders/OrderDetailHeader";
import { axios } from "@/lib/axios";
import { redirect } from "next/navigation";

const getOrderDetail = async (code: string) => {
  try {
    const res = await axios.get(`/api/customer/orders/${code}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get order detail");
  }
};

type Props = {
  params: {
    code: string;
  };
};

const OrderDetail = async ({ params }: Props) => {
  const profile = await getServerUser();
  if (!profile) redirect("error");
  const order = await getOrderDetail(params.code);
  console.log("order", order);
  if (!order) redirect("error");
  const data = order.attributes;
  return (
    <div className="p-3 flex flex-col gap-4">
      <OrderDetailHeader code={params.code} order={data} />
      <OrderDetailBody order={data} />
    </div>
  );
};

export default OrderDetail;

import getServerUser from "@/actions/getServerUser";
import BookingStatus from "@/components/bookings/BookingStatus";
import OrderDetailBody from "@/components/users/orders/OrderDetailBody";
import OrderDetailHeader from "@/components/users/orders/OrderDetailHeader";
import { axios } from "@/lib/axios";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

const getOrderDetail = async (code: string) => {
  try {
    const res = await axios.get(`/api/customer/orders/${code}`);

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get order detail");
  }
};

type Props = {
  params: {
    code: string;
  };
  searchParams?: { [key: string]: string | undefined };
};

const OrderDetail = async ({ params, searchParams }: Props) => {
  const profile = await getServerUser();
  const { vnp_TransactionStatus } = searchParams || {};
  
  if (vnp_TransactionStatus) {
    revalidatePath('/user/oder/[slug]', 'layout')

  }
  if (!profile) redirect("error");
  const order = await getOrderDetail(params.code);
  if (!order) redirect("error");
  const data = order.attributes;
  return (
    <div className="p-3 flex flex-col gap-4">
      {vnp_TransactionStatus === "00" ? (
        <BookingStatus content="Thanh toán thành công" status="success" />
      ) : null}
      <OrderDetailHeader code={params.code} order={data} />
      <OrderDetailBody code={params.code} order={data} />
    </div>
  );
};

export default OrderDetail;

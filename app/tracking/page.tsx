import getServerUser from "@/actions/getServerUser";
import BookingStatus from "@/components/bookings/BookingStatus";
import TrackingContent from "@/components/trackings/TrackingContent";
import { axios } from "@/lib/axios";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
  title: "Tra cứu đơn hàng",
  description:
    "Chành xe miền tây cung cấp tính năng theo dõi đơn hàng, quý khách có thể theo dõi đơn hàng của mình tại đây.",
  alternates: {
    canonical: "/tracking",
  },
};

const getTracking = async ({ code }: { code: string }) => {
  try {
    const res = await axios.get(`/api/customer/orders/${code}/tracking/`);
    return res.data.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data", error);
  }
};

export default async function Tracking({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const code = searchParams.code;
  const vnp_TransactionStatus = searchParams.vnp_TransactionStatus
  
  if (vnp_TransactionStatus) {
    revalidatePath('/tracking', 'layout')
    console.log("re");
  }
  const data = code ? await getTracking({ code }) : {};
  const currentUser = await getServerUser();
  return (
    <div className="min-h-screen pt-[68px] bg-slate-50">
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-40">
      {vnp_TransactionStatus === "00" ? (
        <BookingStatus content="Thanh toán thành công" status="success" />
      ) : null}
        {Object.keys(data).length !== 0 ? (
          <TrackingContent data={data} code={code} currentUser={currentUser} />
        ) : (
          <p className="text-center text-lg font-bold">Không có kết quả được tìm thấy.</p>
        )}
      </div>
    </div>
  );
}

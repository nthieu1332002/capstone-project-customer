import BookingPriceDetail from "@/components/bookings/BookingPriceDetail";
import axios from "axios";
import qs from "query-string";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import BookingSteps from "@/components/bookings/BookingSteps";
import { Divider } from "antd";

const BookingIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const url = qs.stringifyUrl(
    {
      url: "https://dummyjson.com/products",
      query: {
        limit: 10,
      },
    },
    { skipNull: true }
  );
  const data = await axios.get(url);
  const cookieStore = cookies();
  const booking = cookieStore.get("booking")?.value || "";
  const paymentDetail = cookieStore.get("paymentDetail")?.value || "";
  if (!data || !booking) {
    return redirect("/404");
  }
  const parsedBooking = JSON.parse(booking);
  const { insurance, sizePrice, totalPrice } = JSON.parse(paymentDetail);

  return (
    <div className="flex h-full max-w-screen px-5">
      <main className="flex-grow">
        <div className="px-32 py-8">
          <h1 className="text-black font-bold text-2xl">Đơn hàng của bạn</h1>

          <div className="flex items-center justify-center px-32 my-10">
            <BookingSteps current={1} />
          </div>
          {children}
        </div>
      </main>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail
          booking={parsedBooking}
          insurance={insurance}
          sizePrice={sizePrice}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default BookingIdLayout;

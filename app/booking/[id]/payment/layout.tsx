import BookingForm from "@/components/bookings/BookingForm";
import BookingPriceDetail from "@/components/bookings/BookingPriceDetail";
import axios from "axios";
import qs from "query-string";
import { redirect } from "next/navigation";
import { Steps } from "antd";

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
  if (!data) {
    return redirect("/404");
  }
  return (
    <div className="flex h-full max-w-screen px-5">
      <main className="flex-grow">
        <div className="px-32 py-8">
          <h1 className="text-black font-bold text-2xl">Đơn hàng của bạn</h1>

          <div className="flex items-center justify-center px-32 my-10">
            <Steps
              size="small"
              progressDot
              current={1}
              className="font-semibold"
              items={[
                {
                  title: (
                    <p className="text-primary text-sm"> Chi tiết đơn hàng</p>
                  ),
                },
                {
                  title: <p className="text-black text-sm">Thanh toán</p>,
                },
                {
                  title: <p className="text-black text-sm">Bước cuối cùng</p>,
                },
              ]}
            />
          </div>
          {children}
        </div>
      </main>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail />
      </div>
    </div>
  );
};

export default BookingIdLayout;

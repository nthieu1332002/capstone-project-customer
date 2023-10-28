"use client";

import BookingForm from "@/components/bookings/BookingForm";
import BookingPriceDetail from "@/components/bookings/BookingPriceDetail";
import useBookingStore from "@/hooks/useBookingStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Booking = () => {
  const { booking } = useBookingStore();
  console.log(booking);
  const route = useRouter();

  useEffect(() => {
    if (!booking) {
      route.push("/");
    }
  }, [booking, route]);
  return (
    <>
      {booking ? (
        <div className="flex h-full max-w-screen px-5">
          <main className="flex-grow">
            <BookingForm booking={booking} />
          </main>
          <div className="hidden lg:flex w-[500px] flex-col">
            <BookingPriceDetail />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Booking;

"use client";

import BookingForm from "@/components/bookings/BookingForm";
import BookingPriceDetail from "@/components/bookings/BookingPriceDetail";
import useBookingStore from "@/hooks/useBookingStore";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Booking = () => {
  const {booking} = useBookingStore()
  console.log(booking);
  const route = useRouter()
  if (!booking) return route.back()
  return (
    <div className="flex h-full max-w-screen px-5">
      <main className="flex-grow">
        <BookingForm booking={booking}/>
      </main>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail booking={booking}/>
      </div>
    </div>
  );
};

export default Booking;

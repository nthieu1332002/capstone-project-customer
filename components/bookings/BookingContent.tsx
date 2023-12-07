"use client";
import React, { useCallback, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import BookingPriceDetail from "./BookingPriceDetail";
import { Booking } from "@/hooks/useBookingStore";
import { Session } from "next-auth";
type Props = {
  user?: Session | null;
  booking: Booking;
};

const MIN_INSURANCE = 1000000;
const PERCENT_INSURANCE = 0.005;
const BookingContent = ({ user, booking }: Props) => {
  const [insurance, setInsurance] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const totalPrice = insurance + sizePrice;

  const onChange = useCallback((value: number) => {
    setInsurance(
      value >= MIN_INSURANCE ? Math.round(value * PERCENT_INSURANCE) : 0
    );
  }, []);
  return (
    <div className="flex h-full max-w-screen">
      <div className="flex-grow">
        <BookingForm
          booking={booking}
          user={user}
          onChange={onChange}
          setSizePrice={setSizePrice}
          sizePrice={sizePrice}
          insurance={insurance}
        />
      </div>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail
          booking={booking}
          insurance={insurance}
          sizePrice={sizePrice}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default BookingContent;

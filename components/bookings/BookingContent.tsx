"use client";
import React, { useCallback, useState } from "react";
import BookingForm from "./BookingForm";
import BookingPriceDetail from "./BookingPriceDetail";
import { Booking } from "@/hooks/useBookingStore";
import { Session } from "next-auth";
type Props = {
  user?: Session | null;
  booking: Booking;
  pricing: any;
};

const MIN_INSURANCE = 1000000;
const PERCENT_INSURANCE = 0.005;
const BookingContent = ({ user, booking, pricing }: Props) => {
  console.log("pricing", pricing);
  console.log("booking", booking);
  const [insurance, setInsurance] = useState(0);
  const sizePrice = 50000;
  const totalPrice = booking.lowest_price + insurance + sizePrice;
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
          totalPrice={totalPrice}
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

"use client";
import React from "react";
import BookingForm from "./BookingForm";
import BookingPriceDetail from "./BookingPriceDetail";
import { Booking } from "@/hooks/useBookingStore";
import { Session } from "next-auth";
type Props = {
  user?: Session | null;
  booking?: Booking;
};

const BookingContent = ({ user, booking }: Props) => {
  return (
    <div className="flex h-full max-w-screen">
      <div className="flex-grow">
        <BookingForm booking={booking} user={user} />
      </div>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail booking={booking} />
      </div>
    </div>
  );
};

export default BookingContent;

"use client";

import BookingForm from "@/components/bookings/BookingForm";
import BookingPriceDetail from "@/components/bookings/BookingPriceDetail";
import React, { useCallback, useEffect, useState } from "react";

const Booking = () => {
  return (
    <div className="flex h-full max-w-screen px-5">
      <main className="flex-grow">
        <BookingForm />
      </main>
      <div className="hidden lg:flex w-[500px] flex-col">
        <BookingPriceDetail />
      </div>
    </div>
  );
};

export default Booking;

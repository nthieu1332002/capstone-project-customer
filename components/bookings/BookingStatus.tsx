"use client"
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {
  status?: "success" | "error" | "warning" | "processing";
  content: string;
};

const BookingStatus = ({ status, content }: Props) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={cn(
        "relative border-[1px] px-8 py-7 w-full flex items-center gap-5 font-bold text-lg bg-red-50 rounded-md",
        status == "success" ? "border-primary-color bg-primary-color/10" : "",
        !show ? "hidden": null
      )}
    >
      {status == "success" && (
        <FaRegCheckCircle size={28} className="text-primary-color" />
      )}
      <p>{content}</p>
      <div onClick={() => setShow(false)} className="absolute right-4 text-slate-600 hover:bg-slate-300 rounded-full cursor-pointer p-2 transition">
        <IoMdClose />
      </div>
    </div>
  );
};

export default BookingStatus;

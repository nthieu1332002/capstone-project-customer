import { cn } from "@/lib/utils";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {
  status?: "success" | "error" | "warning" | "processing";
  content: string;
};

const BookingStatus = ({ status, content}: Props) => {
  return (
    <div
      className={cn(
        "border-[1px] px-8 py-7 w-full flex items-center gap-5 font-bold text-lg bg-red-50 rounded-md",
        status == "success"
          ? "border-primary-color bg-primary-color/10"
          : ""
      )}
    >
        {status == "success" && <FaRegCheckCircle size={28} className="text-primary-color" />}
      <p>{content}</p>
    </div>
  );
};

export default BookingStatus;

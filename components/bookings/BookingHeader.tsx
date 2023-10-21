import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  className?: string;
};

const BookingHeader = ({ name, icon: Icon, className }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center my-2 gap-1 text-lg font-semibold tracking-tight text-primary-color",
        className
      )}
    >
      <Icon size={22} />
      {name}
    </div>
  );
};

export default BookingHeader;

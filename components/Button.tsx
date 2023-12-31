"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
};

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "relative whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full border-[1px]",
        outline
          ? "bg-white border-black text-black"
          : "bg-primary-color text-white",
        small ? "text-sm py-1 font-light" : "text-md py-2 font-semibold",
        className
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-2" />}
      {label}
    </button>
  );
};

export default Button;

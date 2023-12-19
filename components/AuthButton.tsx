"use client";

import { cn } from "@/lib/utils";

type Props = {
  name: string;
  type?: "normal" | "text" | "outline" | "button";
  onClick: () => void;
};

const AuthButton = ({ name, type = "text", onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex justify-center whitespace-nowrap text-sm font-medium py-1 px-3 md:py-2 md:px-4 rounded-md transition cursor-pointer ",
        type === "normal" && "text-black hover:bg-neutral-100",
        type === "text" && "text-primary-color bg-primary-color/10 hover:bg-primary-color/20",
        type === "outline" && "text-primary-color border-primary-color border-[1px] hover:text-white hover:bg-primary-color",
        type === "button" && "bg-primary-color text-white hover:bg-primary-color/80"
      )}
    >
      {name}
    </div>
  );
};

export default AuthButton;

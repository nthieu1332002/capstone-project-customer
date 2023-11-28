"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  type?: "normal" | "text" | "outline" | "button";
};

const NavLink = ({ name, href, type = "text" }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex justify-center whitespace-nowrap text-sm font-medium py-2 px-4 rounded-md transition cursor-pointer ",
        type === "normal" && "text-black hover:bg-neutral-100",
        type === "text" &&
          "text-primary-color bg-primary-color/10 hover:bg-primary-color/20",
        type === "outline" &&
          "text-primary-color border-primary-color border-[1px] hover:text-white hover:bg-primary-color",
        type === "button" &&
          "bg-primary-color text-white hover:bg-primary-color/80"
      )}
    >
      {name}
    </Link>
  );
};

export default NavLink;

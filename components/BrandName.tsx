import React from "react";
import name from "@/public/assets/ChanhXeMienTay.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
}

const BrandName = ({className} : Props) => {
  return (
    <div className={cn("md:flex items-center justify-center", className)}>
      <Image src={name} alt="logo" width={260} priority/>
    </div>
  );
};

export default BrandName;

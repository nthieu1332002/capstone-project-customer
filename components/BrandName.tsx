import React from "react";
import name from "@/public/assets/ChanhXeMienTay.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
}

const BrandName = ({className} : Props) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image src={name} alt="logo" height={40} width={260}/>
    </div>
  );
};

export default BrandName;

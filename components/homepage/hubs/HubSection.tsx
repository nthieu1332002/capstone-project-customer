"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const HubSection = () => {
  return (
    <div className="mx-auto md:px-40 sm:px-2 px-4 py-5 md:py-10 bg-slate-100">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">
        Bưu cục Chành xe
      </h1>
      <Image
        src="https://res.cloudinary.com/dad0fircy/image/upload/v1702368755/capstone/hubs.png"
        height={100}
        width={100}
        sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
        quality={100}
        priority
        className="object-cover w-full h-auto"
        alt="hubs-map"
      />
    </div>
  );
};

export default HubSection;

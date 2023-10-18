import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

type Props = {
    route: any
};

const RouteSuggestionItem = ({route}: Props) => {
  return (
    <div className={cn("relative flex flex-col gap-2", route.key % 2 === 0 && "translate-y-5")}>
      <div className="relative h-64 w-52 rounded-2xl overflow-hidden">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          src={
            route.image
          }
          alt=""
          priority
        />
      </div>
      <div className="absolute top-1 right-2 flex items-center gap-1 px-2 py-1 bg-white rounded-full capitalize text-xs font-semibold">
        <MdOutlineLocationOn size="10" />
        {route.route}
      </div>
    </div>
  );
};

export default RouteSuggestionItem;

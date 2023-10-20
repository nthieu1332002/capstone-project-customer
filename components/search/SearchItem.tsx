"use client"

import { Tooltip } from "antd";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { route } from "@/app/search/page";
import { useRouter } from "next/navigation";

type Props = {
  route: route
};

const SearchItem = ({ route }: Props) => {
  const router = useRouter();
  const chooseBooking= (route: route) => {
    
  }
  return (
    <div className="rounded-3xl border shadow-md p-4 mb-3">
      <div className="flex gap-5">
        <div className="relative h-36 w-36 rounded-2xl overflow-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            src={route.image}
            alt=""
            priority
          />
        </div>
        <div className="flex-grow flex flex-col justify-between ">
          <h2 className="font-semibold text-lg">{route.name}</h2>
          <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
            <li className="font-semibold">
              <Tooltip placement="right" title={route.from.location}>
                {route.from.name}
              </Tooltip>
            </li>
            <div className="ml-[1px] border-l-[3px] border-dotted pl-6">
              <p className="text-sm text-gray-600">{route.distance} km</p>
            </div>
            <li className="font-semibold">
              <Tooltip placement="right" title={route.to.location}>
                {route.to.name}
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="text-lg font-bold text-primary-color">
            {new Intl.NumberFormat("en-Us").format(route.price)}đ
          </p>
          <Button
            onClick={() => chooseBooking(route)}
            className="rounded-full text-xs px-4"
            label="Chọn chuyến"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

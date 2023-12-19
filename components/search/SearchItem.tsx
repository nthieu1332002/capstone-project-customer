"use client";

import { Tooltip } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
import useBookingStore, { Booking } from "@/hooks/useBookingStore";
import { convertUnit } from "@/lib/transfer-unit";
import Link from "next/link";
import useLoading from "@/hooks/useLoading";

type Props = {
  route: Booking;
};

const SearchItem = ({ route }: Props) => {
  const router = useRouter();
  const { onOpen } = useLoading();

  const { set, booking } = useBookingStore();
  const chooseBooking = (route: Booking) => {
    onOpen()
    set(route);
    if (booking) {
      router.push("/booking");
    }
  };
  return (
    <div className="rounded-3xl border p-4 mb-3">
      <div className="flex gap-5">
        <div className="relative flex-shrink-0 h-36 w-36 rounded-2xl overflow-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            src={
              route.start_station.partner.avatar ||
              "https://res.cloudinary.com/dad0fircy/image/upload/v1702828398/capstone/icon_we9y8a.png"
            }
            alt={route.start_station.partner.name}
            priority
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h2><Link href={`/partner/${route.start_station.id}`} target="_blank" className="font-semibold text-blue-600">{route.start_station.partner.name}</Link></h2>
          <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
            <li className="font-medium">
              <Tooltip placement="right" title={route.start_station.address}>
                {route.start_station.name}{" "}
                <span className="text-sm italic text-gray-400">
                  {route.start_station.distance_to_sender
                    ? `cách bạn ${convertUnit(
                        route.start_station.distance_to_sender
                      )} km`
                    : null}
                </span>
              </Tooltip>
            </li>
            <div className="ml-[1px] border-l-[3px] border-dotted pl-6">
              <p className="text-sm text-gray-600">
                {convertUnit(route.total_distance)} km
              </p>
            </div>
            <li className="font-medium">
              <Tooltip placement="right" title={route.end_station.address}>
                {route.end_station.name}{" "}
                <span className="text-sm italic text-gray-400">
                  {route.end_station.distance_to_receiver
                    ? `cách điểm đến ${convertUnit(
                        route.end_station.distance_to_receiver
                      )} km`
                    : null}
                </span>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="font-medium">Giá chỉ từ</p>
          <p className="text-lg font-bold text-primary-color">
            {new Intl.NumberFormat("en-Us").format(route.lowest_price)}đ
          </p>
          <Button
            onClick={() => chooseBooking(route)}
            className="rounded-full text-xs px-4 mt-3"
            label="Chọn chuyến"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

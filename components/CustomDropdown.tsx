"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LiaFilterSolid } from "react-icons/lia";
import { Slider } from "antd";
import Button from "./Button";
import qs from "query-string";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {};

const CustomDropdown = ({}: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const between = params.get("delivery_price_between")
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(between ? between.split(',').map(Number): [0]);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const onAfterChange = (value: number[]) => {
    console.log(value);
    setPrice(value);
  };
  const onFilter = () => {
    const url = qs.stringifyUrl(
      {
        url: "/user/order",
        query: { ...Object.fromEntries(params), delivery_price_between: price.toString() },
      },
      { skipNull: true }
    );
    console.log(url);
    router.push(url);
  };
  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={toggleOpen}
        className="flex items-center gap-1 flex-wrap border-[1px] p-3 py-1 rounded hover:bg-gray-50 cursor-pointer"
      >
        <LiaFilterSolid />
        Bộ lọc
      </div>
      <div
        className={cn(
          "absolute z-[200] rounded-xl shadow-sm border w-64 bg-white overflow-hidden right-0 bottom-11 text-sm transition",
          isOpen
            ? "transition -translate-y-0 visible opacity-100"
            : "opacity-0 invisible transition translate-y-1"
        )}
      >
        <div className="flex flex-col">
          <div className="px-5 py-4">
            <p className="text-base">Giá tiền</p>
            <Slider
              range
              defaultValue={price}
              step={50000}
              max={1000000}
              marks={{
                0: 0,
                1000000: {
                  label: "1tr",
                },
              }}
              tooltip={
                {
                    formatter: (value: number | undefined) => {
                        if (value === undefined) {
                            return "";
                        }
                        return `${value.toLocaleString()}đ`;
                    },
                }
              }
              onAfterChange={onAfterChange}
            />

            <Button onClick={onFilter} label="Lọc" className="py-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;

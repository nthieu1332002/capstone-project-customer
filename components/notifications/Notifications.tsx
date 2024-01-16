import { axios } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { Avatar } from "antd";
import React, { cache, useCallback, useEffect, useRef, useState } from "react";
import { FaBell, FaRegBell } from "react-icons/fa6";

export type Notification = {
  id: string;
  type: string;
  attributes: {
    type: string;
    data: {
      content: string;
      order_code: string;
    };
    read_at: string;
    created_at: string;
  };
};

const Notifications = () => {
  const [data, setData] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchNoti = cache(async () => {
    try {
      const res = await axios.get("/api/customer/notifications");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    fetchNoti();
  }, []);

  const notiRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (notiRef.current && !notiRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative" ref={notiRef}>
      <div className="w-10 h-10 border-[1px] text-white border-neutral-200 flex flex-row items-center justify-center rounded-full cursor-pointer hover:shadow-md transition">
        <Avatar
          style={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          size="large"
          onClick={toggleOpen}
        >
          {isOpen ? <FaBell color="black" /> : <FaRegBell color="black" />}
        </Avatar>
      </div>

      <div
        className={cn(
          "absolute rounded-xl shadow-md w-80 max-h-72 bg-white right-0 top-12 text-sm transition overflow-y-scroll",
          isOpen
            ? "transition translate-y-0 visible opacity-100"
            : "opacity-0 invisible transition -translate-y-1"
        )}
      >
        <p className="font-bold px-5 py-3">Thông báo</p>
        <div className="flex flex-col">
          {data.map((item) => (
            <div className="px-5 py-4 border-t-[1px]" key={item.id}>
              <p className="font-bold">
                Trạng thái đơn hàng{" "}
                <span className="uppercase">
                  {item.attributes.data.order_code}
                </span>
              </p>
              <p>{item.attributes.data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

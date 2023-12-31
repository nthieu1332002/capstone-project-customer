"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import NavMenuItem from "./NavMenuItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineHistory, MdOutlineLogout, MdPayment } from "react-icons/md";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { Avatar } from "antd";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import AuthButton from "../AuthButton";

type NavMenuProps = {
  currentUser?: Session | null;
};

const NavMenu = ({ currentUser }: NavMenuProps) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const menuRef = useRef<HTMLDivElement>(null);

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
  return (
    <>
      {currentUser ? (
        <div className="relative" ref={menuRef}>
          <div
            onClick={toggleOpen}
            className="w-10 h-10 border-[1px] text-white border-neutral-200 flex flex-row items-center justify-center rounded-full cursor-pointer hover:shadow-md transition"
          >
            <Avatar
              style={{ backgroundColor: "#3ebde0", verticalAlign: "middle" }}
              size="large"
            >
              {currentUser.user.email?.substring(0, 5)}
            </Avatar>
          </div>

          <div
            className={cn(
              "absolute rounded-xl shadow-md w-64 bg-white overflow-hidden right-0 top-12 text-sm transition",
              isOpen
                ? "transition translate-y-0 visible opacity-100"
                : "opacity-0 invisible transition -translate-y-1"
            )}
          >
            <div className="flex flex-col">
              <div className="px-5 py-4">
                <strong className="text-base">{currentUser.user.name}</strong>
                <span className="flex gap-2">
                  <BsFillTelephoneFill /> {currentUser.user.phone}
                </span>
              </div>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="p-2">
                <NavMenuItem
                  onClick={() => router.push("/user")}
                  icon={<FaRegCircleUser />}
                  name="Tài khoản"
                />
                <NavMenuItem
                  onClick={() => router.push("/user/order")}
                  icon={<MdOutlineHistory />}
                  name="Đơn hàng của tôi"
                />
                <NavMenuItem
                  onClick={() => router.push("/user/payment")}
                  icon={ <MdPayment />}
                  name="Thanh toán của tôi"
                />
                <NavMenuItem
                  onClick={() => onOpen("logout")}
                  icon={<MdOutlineLogout />}
                  type="active"
                  name="Đăng xuất"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center md:gap-5 gap-3">
          <AuthButton name="Đăng nhập" onClick={() => onOpen("login")} />
          <AuthButton
            name="Đăng ký"
            onClick={() => onOpen("register")}
            type="button"
          />
        </div>
      )}
    </>
  );
};

export default NavMenu;

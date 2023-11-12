"use client";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import NavMenuItem from "../headers/NavMenuItem";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "antd";
import { RiErrorWarningLine, RiVerifiedBadgeLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import useAuthModal from "@/hooks/useAuthModal";

const sidebarList = [
  {
    id: 1,
    name: "Tài khoản",
    path: "/user",
    icon: <FaRegCircleUser />,
  },
  {
    id: 2,
    name: "Đơn hàng của tôi",
    path: "/user/order",
    icon: <FaRegCircleUser />,
  },
  {
    id: 3,
    name: "Danh sách yêu thích",
    path: "/user/favorite",
    icon: <AiOutlineHeart />,
  },
  {
    id: 4,
    name: "Đăng xuất",
    icon: <MdOutlineLogout />,
  },
];

type Props = {
  user: any;
};

const UserSidebar = ({ user }: Props) => {
  const { onOpen } = useAuthModal();
  const router = useRouter();
  const pathname = usePathname();
  const verified = user?.phone_verified_at || user?.email_verified_at;
  return (
    <div className="hidden md:block w-[335px] mr-2">
      <div className="flex flex-col rounded-lg border py-3 bg-white w-full">
        <div className="flex gap-2 p-4">
          <div className="w-12 h-12 border-[1px] text-white border-neutral-200 flex flex-row items-center justify-center rounded-full">
            <Avatar
              style={{ backgroundColor: "#3ebde0", verticalAlign: "middle" }}
              size="large"
            >
              {user?.email?.substring(0, 5)}
            </Avatar>
          </div>
          <div className="">
            <strong className="text-base">{user?.name}</strong>
            <span
              className={cn(
                "flex gap-2 items-center",
                verified ? "text-primary-color" : "text-red-500"
              )}
            >
              {verified ? (
                <>
                  <RiVerifiedBadgeLine size={15} /> Đã xác thực
                </>
              ) : (
                <>
                  <RiErrorWarningLine size={15} /> Chưa xác thực
                </>
              )}
            </span>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="p-2">
          {sidebarList.map((item) => {
            return (
              <NavMenuItem
                key={item.id}
                onClick={() =>
                  item.path ? router.push(item.path) : onOpen("logout")
                }
                icon={item.icon}
                name={item.name}
                type={pathname === item.path ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;

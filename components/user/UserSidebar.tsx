"use client";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineHistory, MdOutlineLogout } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import NavMenuItem from "../headers/NavMenuItem";
import { useRouter } from "next/navigation";
import { Avatar } from "antd";
import { signOut } from "next-auth/react";
import { RiErrorWarningLine, RiVerifiedBadgeLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

type Props = {
  user: any;
};

const UserSidebar = ({ user }: Props) => {
  const router = useRouter();
  const verified = user?.phone_verified_at || user?.email_verified_at
  return (
    <div className="w-[500px]">
      <div className="flex flex-col rounded-lg border  py-3">
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
            <span className={cn("flex gap-2 items-center", verified ? "text-primary-color" : "text-red-500")}>
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
          <NavMenuItem
            onClick={() => router.push("/")}
            icon={<FaRegCircleUser />}
            name="Tài khoản"
          />
          <NavMenuItem
            onClick={() => router.push("/")}
            icon={<MdOutlineHistory />}
            name="Đơn hàng của tôi"
          />
          <NavMenuItem
            onClick={() => router.push("/")}
            icon={<AiOutlineHeart />}
            name="Danh sách yêu thích"
          />
          <NavMenuItem
            onClick={() => signOut()}
            icon={<MdOutlineLogout />}
            type="active"
            name="Đăng xuất"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;

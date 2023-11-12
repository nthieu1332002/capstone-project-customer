"use client";
import React from "react";
import BrandName from "../BrandName";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { Session } from "next-auth";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { Dropdown, MenuProps } from "antd";
import TrackingOrderBar from "./TrackingOrderBar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import mobile from "@/public/assets/icon-removebg.png";

type Props = {
  currentUser: Session | null;
};

const Header = ({ currentUser }: Props) => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      label: (
        <NavLink
          name="Về chúng tôi"
          type="normal"
          onClick={() => router.push("/about")}
        />
      ),
      key: "0",
    },
    {
      label: (
        <NavLink
          name="Bảng giá"
          type="normal"
          onClick={() => router.push("/pricing")}
        />
      ),
      key: "1",
    },
    {
      label: (
        <NavLink
          name="Hỏi đáp"
          type="normal"
          onClick={() => router.push("/questions")}
        />
      ),
      key: "2",
    },
  ];

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    padding: "2px 20px",
  };
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-8 md:px-10 sm:px-2 px-4">
          <div className="flex items-center lg:justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-3">
              <Link href="/">
                <BrandName className="hidden" />
                <div
                  className="md:hidden flex items-center justify-center"
                >
                  <Image src={mobile} alt="logo" height={30} width={100} />
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex ">
              <NavLink
                name="Về chúng tôi"
                type="normal"
                onClick={() => router.push("/about")}
              />
              <NavLink
                name="Bảng giá"
                type="normal"
                onClick={() => router.push("/pricing")}
              />
              <NavLink
                name="Hỏi đáp"
                type="normal"
                onClick={() => router.push("/questions")}
              />
            </div>
            <div className="flex gap-3 items-center ml-auto lg:ml-0">
              <TrackingOrderBar />
              <NavMenu currentUser={currentUser} />
            </div>
            <div className="flex lg:hidden px-3 lg:order-2">
              <Dropdown
                dropdownRender={(menu) => (
                  <div className="lg:hidden">
                    {React.cloneElement(menu as React.ReactElement, {
                      style: menuStyle,
                    })}
                  </div>
                )}
                menu={{ items }}
                trigger={["click"]}
              >
                <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-slate-300">
                  <BiMenu size={20} aria-hidden="true" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

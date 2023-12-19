"use client";
import React from "react";
import BrandName from "../BrandName";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { Session } from "next-auth";
import NavLink from "./NavLink";
import { BiMenu } from "react-icons/bi";
import { Dropdown, MenuProps } from "antd";
import TrackingOrderBar from "./TrackingOrderBar";
import Image from "next/image";
import mobile from "@/public/assets/icon-removebg.png";
import tablet from "@/public/assets/ChanhXeMienTay.png";

type Props = {
  currentUser: Session | null;
};

const Header = ({ currentUser }: Props) => {
  const items: MenuProps["items"] = [
    {
      label: <NavLink name="Về chúng tôi" type="normal" href="/about" />,
      key: "0",
    },
    {
      label: <NavLink name="Bảng giá" type="normal" href="/pricing" />,
      key: "1",
    },
    {
      label: <NavLink name="Chính sách" type="normal" href="/policy" />,
      key: "2",
    },
    {
      label: <NavLink name="Nhà chành" type="normal" href="/partner" />,
      key: "3",
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
            <Link href="/" className="relative w-24 h-10 md:w-64 md:h-8 flex items-center justify-center">
                <Image
                  src={mobile}
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={30}
                  className="block md:hidden"
                />
                <Image
                  src={tablet}
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={30}
                  className="hidden md:block"
                />
            </Link>

            <div className="hidden lg:flex ">
              <NavLink name="Về chúng tôi" type="normal" href="/about" />
              <NavLink name="Bảng giá" type="normal" href="/pricing" />
              <NavLink name="Chính sách" type="normal" href="/policy" />
              <NavLink name="Nhà chành" type="normal" href="/partner" />
            </div>
            
            <div className="flex lg:hidden px-3 ml-auto lg:ml-0">
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
            <div className="flex gap-3 items-center">
              <TrackingOrderBar />
              <NavMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

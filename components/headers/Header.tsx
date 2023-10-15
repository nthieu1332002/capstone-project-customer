"use client"
import React from "react";
import BrandName from "../BrandName";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { Session } from "next-auth";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";
type Props = {
    currentUser: Session | null;
};

const Header = ({currentUser}: Props) => {
  const router = useRouter();
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-8 md:px-10 sm:px-2 px-4">
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center gap-3">
              <Link href="/">
                <BrandName />
              </Link>
            </div>
            <div className="flex">
            <NavLink name="Về chúng tôi" type="normal" onClick={() => router.push("/")} />
            <NavLink name="Bảng giá" type="normal" onClick={() => router.push("/")} />
            <NavLink name="Hỏi đáp" type="normal" onClick={() => router.push("/")} />

            </div>
            <div className="flex items-center gap-5">
              <NavMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

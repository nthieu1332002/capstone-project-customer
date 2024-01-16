import React from "react";
import BrandName from "../BrandName";

import Link from "next/link";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bottom-0 w-full bg-black z-10 shadow-sm">
      <div className="md:px-10 xl:px-40 sm:px-2 px-4 py-5 md:py-10 pt-10 pb-4 flex flex-col flex-wrap md:flex-row lg:flex-nowrap gap-5 lg:gap-14">
        <div className="flex flex-col gap-3 max-w-xs text-white text-sm">
          <BrandName className="bg-white rounded-md" />
          <p>
            Chành xe miền Tây là dự án thuộc đồ án tốt nghiệp năm 2023 của nhóm
            sinh viên đại học FPT.
          </p>
          <div className="flex gap-2 items-center">
            <MdOutlineAlternateEmail />
            nthieu1332002@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <h2 className="text-base font-bold">Về Chành xe miền Tây</h2>
          <Link href="/about" className="hover:underline">
            Về chúng tôi
          </Link>
          <Link href="/pricing" className="hover:underline">
            Bảng giá
          </Link>
          <Link href="/policy" className="hover:underline">
            Chính sách
          </Link>
          <Link href="/partner" className="hover:underline">
            Danh sách nhà chành
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <h2 className="text-base font-bold">Chính sách</h2>
          <Link href="/policy" className="hover:underline">
            Chính sách trả hàng
          </Link>
          <Link href="/policy" className="hover:underline">
            Công nghệ
          </Link>
          <Link href="/policy" className="hover:underline">
            Quy định chung
          </Link>
          <Link href="/policy" className="hover:underline">
            Quy trình giao hàng
          </Link>
          <Link href="/policy" className="hover:underline">
            Quy trình gửi hàng
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-white text-sm">
          <h2 className="text-base font-bold">Khác</h2>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdEI60gkhOhuKPodWYpHaimMozVaxTuXaNbJR5tQkGwnBq_YQ/viewform?usp=sf_link"
            target="_blank"
            className="hover:underline"
          >
            Chành xe dành cho đối tác
          </Link>
        </div>
        <div className="flex gap-5">
          <Link href="/" target="_blank">
            <BsFacebook className="rounded-full text-[#0866ff] w-12 h-12" />
          </Link>
          <Link href="/" target="_blank">
            <BsMessenger className="rounded-full text-[#009ef7] w-12 h-12" />
          </Link>
          <Link href="/" target="_blank">
            <SiZalo className="rounded-full text-[#0065f7] bg-white w-12 h-12 p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

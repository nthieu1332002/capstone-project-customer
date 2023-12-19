import { axios } from "@/lib/axios";
import Image from "next/image";
import React from "react";
import { MdMyLocation } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { Divider } from "antd";
import dayjs from "dayjs";

type Props = {
  params: {
    id: string;
  };
};
const getPartnerDetail = async (id: string) => {
  try {
    const res = await axios.get(`/api/customer/partners/${id}`);

    return res.data.data.attributes;
  } catch (error: any) {
    throw new Error("failed to get order detail", error);
  }
};
const PartnerProfile = async ({ params }: Props) => {
  const data = await getPartnerDetail(params.id);
  return (
    <div className="min-h-screen bg-[#f5f5f5] bg-fixed bg-center bg-[url('https://res.cloudinary.com/dad0fircy/image/upload/v1702369136/capstone/homepage_lqrszq.jpg')]">
      <div className="pt-[68px] h-full max-w-screen py-8 mx-auto px-2 md:px-12 lg:px-40">
        <div className="rounded-sm bg-white w-full p-8">
          <div className="flex flex-col md:flex-row gap-5 md:gap-7">
            <div className="relative bg-primary-color/30 border flex-shrink-0 h-32 w-32 rounded-xl overflow-hidden">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                src={
                  data.avatar ||
                  "https://res.cloudinary.com/dad0fircy/image/upload/v1702828398/capstone/icon_we9y8a.png"
                }
                alt={data.name}
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{data.name}</h1>
              <div className="items-center font-medium flex flex-wrap gap-2 mt-4">
                <AiOutlinePhone size="20" className="text-gray-400" />
                {data.phones.map((item: string, index: number) => (
                  <span key={index}>
                    {index > 0 && " - "} {item}
                  </span>
                ))}
              </div>
              <div className="items-center font-medium flex gap-2 mt-2">
                <MdMyLocation size="20" className="text-primary-color" />
                {data.stations.length} trạm đang hoạt động
              </div>
            </div>
            <div className="ml-auto mt-auto font-medium">
              Ngày tham gia: <b>{dayjs(data.created_at).format("DD/MM/YYYY")}</b>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white w-full p-5 md:p-7 mt-7">
          <h2 className="text-xl md:text-2xl font-bold">Giới thiệu</h2>
          <Divider />
          <p>{data.description}</p>
        </div>
        <div className="rounded-lg bg-white w-full p-5 md:p-7 mt-5">
          <h2 className="text-xl md:text-2xl font-bold">Danh sách cách trạm</h2>
          <Divider />
          <ul className="list-disc list-inside font-medium ml-2 space-y-1">
            {data.stations.map((item: any) => (
              <li key={item.id}>{item.name}. <span className="italic text-sm text-gray-400">({item.address})</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;

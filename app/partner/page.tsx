import { axios } from "@/lib/axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danh sách nhà chành",
  description:
    "Danh sách nhà chành của chành xe miền tây, với sự uy tín và đa dạng, chúng tôi cung cấp cho khách hàng sự đa dạng, đầy đủ và tiện nghi.",
  alternates: {
    canonical: "/partner",
  },
  openGraph: {
    title: "Danh sách nhà chành",
    description:
      "Danh sách nhà chành của chành xe miền tây, với sự uy tín và đa dạng, chúng tôi cung cấp cho khách hàng sự đa dạng, đầy đủ và tiện nghi.",
  },
};
const getPartnerList = async () => {
  try {
    const res = await axios.get("/api/customer/partners");
    return res.data.data;
  } catch (error: any) {
    throw new Error("Failed to fetch data", error);
  }
};
const Partner = async () => {
  const data = await getPartnerList();
  return (
    <div className="min-h-screen">
      <div className="pt-[68px] h-full max-w-screen py-8 mx-auto px-4 md:px-12 lg:px-40">
        <h1 className="py-5 text-4xl font-bold text-center bg-primary-color text-white">
          DANH SÁCH NHÀ CHÀNH
        </h1>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            Danh sách các chành xe đang hợp tác
          </h2>
          <div className="ml-3 space-y-4">
            {data.map((item: any, index: number) => {
              return (
                <p key={item.id}>
                  <Link
                    href={`/partner/${item.id}`}
                    target="_blank"
                    className="italic text-blue-600 hover:underline"
                  >
                    {index + 1}. {item.attributes.name}
                  </Link>
                </p>
              );
            })}
          </div>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">
            một số hình ảnh thực tế của chành xe
          </h2>
          <div className="space-y-4">
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702782521/capstone/Screenshot_2023-12-17_100657_sprhax.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="anh1"
            />
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702782521/capstone/Screenshot_2023-12-17_100436_r95u8a.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="anh1"
            />
          </div>
        </section>
        <p className="text-end mb-3">Hết.</p>
      </div>
    </div>
  );
};

export default Partner;

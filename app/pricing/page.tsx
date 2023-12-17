import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export const metadata: Metadata = {
  title: "Bảng giá cước",
  description:
    "Chành xe Miền Tây - Hệ thống vận chuyển hàng hóa và đặt vé chành xe từ TP.Hồ Chí Minh đến các tỉnh Miền Tây. Dịch vụ uy tín, chi phí rẻ nhất.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Bảng giá cước",
    description:
      "Chành xe Miền Tây - Hệ thống vận chuyển hàng hóa và đặt vé chành xe từ TP.Hồ Chí Minh đến các tỉnh Miền Tây. Dịch vụ uy tín, chi phí rẻ nhất.",
  },
};
const Pricing = (props: Props) => {

  return (
    <div className="min-h-screen">
      <div className="pt-[68px] h-full max-w-screen py-8 mx-auto px-4 md:px-12 lg:px-40">
        <h1 className="py-5 text-4xl font-bold text-center bg-primary-color text-white">
          BẢNG GIÁ CƯỚC CƠ BẢN CHÀNH XE
        </h1>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">bảng giá cước cơ bản</h2>
          <div className="space-y-4">
            
            <p>
              Công thức tính giá sẽ được tính theo khối lượng riêng của từng loại hàng, dưới đây là tất cả kích thước, khối lượng của từng loại hàng để khách hàng tham khảo:
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702782146/capstone/weight_table_v2sp1m.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="bảng giá"
            />

            <p>Để xem giá cước chi tiết, quý khách vui lòng tham khảo <Link href="/search" target="_blank" className="text-primary-color">tại đây</Link>.</p>
          </div>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">một số hình ảnh thực tế của chành xe</h2>
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
}
export default Pricing
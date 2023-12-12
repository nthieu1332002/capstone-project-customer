import { Metadata } from "next";
import Image from "next/image";

type Props = {};

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Chành xe miền tây là hệ thống kết nối, vận chuyển hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là thành phố Hồ Chí Minh và các tỉnh miền tây.",
  alternates: {
    canonical: "/about",
  },
};
const About = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="pt-[68px] h-full max-w-screen py-8 mx-auto px-4 md:px-12 lg:px-40">
        <h1 className="py-5 text-4xl font-bold text-center bg-primary-color text-white">
          GIỚI THIỆU CHÀNH XE MIỀN TÂY
        </h1>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            I. Giới thiệu dự án
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Chành xe miền Tây</strong> là hệ thống kết nối, vận chuyển
              hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là
              thành phố Hồ Chí Minh và các tỉnh miền tây.
            </p>
            <p>
              Không chỉ mang đến cho người dùng đa dạng lựa chọn về hãng xe,
              dòng xe và giải pháp đặt vé nhanh chóng, tiện lợi, CXMT còn có rất
              nhiều ưu đãi hàng tháng, giúp khách hàng đặt được vé xe khách chất
              lượng cao với giá thấp nhất thị trường.
            </p>
          </div>
        </section>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            II. Vì sao chọn chành xe miền Tây
          </h2>
          <div className="space-y-4">
            <p>
              Đáp ứng tốt nhất mong đợi của khách hàng trong từng chuyến hàng mà
              chúng tôi vận chuyển – Mang đến lợi ích thiết thực và sự hài lòng
              cho khách hàng, làm cầu nối trọn vẹn giữa khách hàng và khách
              hàng.
            </p>
            <p>
              Mọi cam kết phải được cụ thể hóa bằng hành động, dịch vụ giao hàng
              của <strong>CXMT</strong> sẽ không chỉ là tại một tỉnh thành mà
              còn là toàn quốc và vươn ra quốc tế, sẽ gắn liền với mọi vấn đề
              của các doanh nghiệp thương mại điện tử, và mọi đối tượng khách
              hàng.
            </p>
            <p>
              Hi vọng rằng với những tiện ích trong việc giao hàng mà{" "}
              <strong>CXMT</strong> mang đến sẽ phần nào giúp quý khách hàng an
              tâm khi vận chuyển hàng hóa đến tận tay những người thân yêu, đối
              tác và khách hàng của quý khách. Và mong rằng với một ngày không
              xa <strong>CXMT</strong> sẽ cùng san sẻ gánh nặng và đồng hành với
              quý khách trong bước đường phát triển doanh nghiệp.
            </p>
            <p>
              <strong>
                Chúng tôi đảm bảo chi phí rẻ nhất có thể cho quý khách.
              </strong>
            </p>
          </div>
        </section>
        <section className="py-3 w-full">
          <h2 className="text-2xl font-bold uppercase mb-3">
            III. Chiến lược Phát triển
          </h2>
          <p>
            Với chính sách phát triển bền vững, lâu dài <strong>CXMT</strong> đã
            lên kế hoạch chi tiết cho phương hướng phát triển trong tương lai
            của công ty. Giúp công ty ngày càng phát triển vững mạnh và trở
            thành sự lựa chọn hàng đầu của khách hàng khi có nhu cầu vận chuyển
            hàng hóa.
          </p>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">IV. Vận hành</h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2">
              4.1. Quy trình và cách thức giao nhận hàng hóa
            </h3>
            <p>
              Khách hàng sẽ chọn lựa cho mình nhà xe phù hợp và mang hàng đến
              địa điểm của nhà xe đó. Sau đó nhà xe sẽ vận chuyển hàng hóa đến
              địa điểm của khách hàng.
            </p>
            <Image
              src="https://res.cloudinary.com/dad0fircy/image/upload/v1702367194/capstone/flow-van-chuyen.png"
              height={100}
              width={100}
              sizes="(max-width: 50px) 2vw, (max-width: 425px) 50vw, 75vw"
              quality={100}
              priority
              className="object-cover w-full h-auto"
              alt="van-chuyen"
            />
          </div>
        </section>
        <section className="py-3 w-full mb-3">
          <h2 className="text-2xl font-bold uppercase mb-3">
            V. Chành xe có gốc từ đâu và ý nghĩa gì?
          </h2>
          <div className="space-y-4">
            <p>
              Chành xe là thuật ngữ để nói về dịch vụ vận tải hàng hóa. Thuật
              ngữ này có nguồn gốc từ tiếng Triều Châu – Trung Quốc, được sử
              dụng nhiều ở miền Tây, miền Nam của Việt Nam. Chành xe có thể được
              hiểu đơn giản là:
            </p>
            <p>Chành xe có thể được hiểu đơn giản là:</p>
            <ul className="list-disc list-outside pl-10">
              <li>
                Nơi kinh doanh vận chuyển hàng hóa và hành khách, có điểm giao
                và nhận rõ ràng chính xác. Thông thường điểm giao nhận chính là
                địa chỉ chành xe ở hai đầu vận chuyển.
              </li>
              <li>
                Là công ty kinh doanh dịch vụ vận chuyển hàng hóa và hành khách.
              </li>
            </ul>
          </div>
        </section>
        <p className="text-end mb-3">Hết.</p>
      </div>
    </div>
  );
};
export default About;

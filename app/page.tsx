import Search from "@/components/search/Search";
import RouteSuggestion from "@/components/homepage/routes/RouteSuggestion";
import HubSection from "@/components/homepage/hubs/HubSection";
import WhyChoosing from "@/components/homepage/WhyChoosing";
import { Metadata } from "next";
import TrackingSection from "@/components/homepage/TrackingSection";
export const metadata: Metadata = {
  title: "Trang chủ | Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
  description:
    "Chành xe Miền Tây - Hệ thống vận chuyển hàng hóa và đặt vé chành xe từ TP.Hồ Chí Minh đến các tỉnh Miền Tây. Dịch vụ uy tín, chi phí rẻ nhất.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trang chủ | Chành Xe Miền Tây - Vận chuyển siêu nhanh, Giá siêu tốt",
    description:
      "Chành xe Miền Tây - Hệ thống vận chuyển hàng hóa và đặt vé chành xe từ TP.Hồ Chí Minh đến các tỉnh Miền Tây. Dịch vụ uy tín, chi phí rẻ nhất.",
  },
};
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] w-full bg-blue-200 flex items-center justify-center bg-fixed bg-center bg-[url('https://res.cloudinary.com/dad0fircy/image/upload/v1702369136/capstone/homepage_lqrszq.jpg')]">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center text-3xl md:text-5xl font-bold text-white">
          <h1>Đặt chành xe với</h1>
          <h2>
            ChanhXe<span className="text-primary-color">MienTay</span>
          </h2>
        </div>
        <Search />
      </div>
      <TrackingSection />
      <RouteSuggestion />
      <WhyChoosing/>
      <HubSection />
    </div>
  );
};

export default Home;
import DebouceSelect from "@/components/search/DebouceSelect";
import Image from "next/image";
import name from "@/public/assets/bg.png";
import Search from "@/components/search/Search";
// import GoogleMapView from "@/components/maps/GoogleMapView";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <div className="relative h-[500px] w-full bg-blue-200 flex items-center justify-center">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center text-3xl md:text-5xl font-bold text-white">
          <h1>Đặt chành xe với</h1>
          <h2>
            ChanhXe<span className="text-primary-color">MienTay.com</span>
          </h2>
        </div>

        <Search />
      </div>
      {/* <GoogleMapView /> */}
    </main>
  );
}

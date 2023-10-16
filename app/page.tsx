import DebouceSelect from "@/components/search/DebouceSelect";
import Image from "next/image";
import name from "@/public/assets/bg.png";
import Search from "@/components/search/Search";

export default function Home() {
  return (
    <main className="flex h-[1000px] flex-col items-center justify-between">
      <div className="relative h-1/2 w-full bg-blue-200 flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center text-5xl font-bold text-white">
          <h1>Đặt chành xe với</h1>
          <h2>
            ChanhXe<span className="text-primary-color">MienTay.com</span>
          </h2>
        </div>

        <Search />
      </div>
    </main>
  );
}

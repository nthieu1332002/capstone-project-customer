import Search from "@/components/search/Search";
import RouteSuggestion from "@/components/homepage/routes/RouteSuggestion";
import HubSection from "@/components/homepage/hubs/HubSection";
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] w-full bg-blue-200 flex items-center justify-center">
        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center text-3xl md:text-5xl font-bold text-white">
          <h1>Đặt chành xe với</h1>
          <h2>
            ChanhXe<span className="text-primary-color">MienTay.com</span>
          </h2>
        </div>
        <Search />
      </div>
      <HubSection />
      <RouteSuggestion />
    </div>
  );
};

export default Home;
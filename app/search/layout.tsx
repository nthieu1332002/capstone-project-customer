import SearchSideBar from "@/components/search/SearchSideBar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="flex pt-[68px] h-full max-w-screen">
        <div className="hidden lg:flex h-[1000px] w-[500px] flex-col  border-x">
          <SearchSideBar />
        </div>
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};
export default MainLayout;

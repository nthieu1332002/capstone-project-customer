
const BookingLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen pt-[68px]">
        <div className="flex h-full max-w-screen">
          <main className="flex-grow">{children}</main>
          <div className="hidden lg:flex h-[1000px] w-[350px] flex-col border-x">
            {/* <SearchSideBar /> */}
          </div>
        </div>
      </div>
    );
  };
  export default BookingLayout;
  
import SearchSideBar from "@/components/search/SearchBar";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="flex pt-[68px] h-full max-w-screen">
        <div className="hidden lg:flex h-[1000px] w-[500px] flex-col  border-x">
          <SearchSideBar />
        </div>
      </div>
    </div>
  );
};
export default About;

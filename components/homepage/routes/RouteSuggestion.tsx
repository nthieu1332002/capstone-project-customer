import React from "react";
import RouteSuggestionItem from "./RouteSuggestionItem";

type Props = {};

const routes = [
  {
    key: 1,
    route: "Sài Gòn - Cần Thơ",
    image: "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/du-lich-can-tho-1_1624439842_cv30c8.jpg"
  },
  {
    key: 2,
    route: "Sài Gòn - An Giang",
    image: "https://res.cloudinary.com/dad0fircy/image/upload/v1702368915/capstone/chaudoc_hzatuo.jpg"
  },
  {
    key: 3,
    route: "Sài Gòn - Bến Tre",
    image: "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/bat-mi-kinh-nghiem-di-ben-tre-lan-dau-cho-nhung-doi-chan-nghien-xe-dich-01-1665404937_mmxf9v.jpg"
  },
  {
    key: 4,
    route: "Sài Gòn - Cà Mau",
    image: "https://res.cloudinary.com/dad0fircy/image/upload/v1702369020/capstone/dulichCaMau01-1649220925-3009-1649240147_cm1lye.jpg"
  },
];

const RouteSuggestion = (props: Props) => {
  return (
    <div className="mx-auto lg:px-40 md:px-32 sm:px-2 px-4 py-5 md:py-10 bg-slate-100">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">
        Các tuyến đường phổ biến
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 w-full">
        {routes.map((route) => {
          return <RouteSuggestionItem key={route.key} route={route} />;
        })}
      </div>
    </div>
  );
};

export default RouteSuggestion;

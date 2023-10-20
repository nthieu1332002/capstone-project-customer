
import SearchList from "@/components/search/SearchList";
import axios from "axios";
import React from "react";
import qs from "query-string";

type Props = {};
export type route = {
  id: number;
  name: string;
  image: string;
  price: number;
  from: {
    name: string;
    location: string;
  };
  to: {
    name: string;
    location: string;
  };
  distance: number;
};
const routes: route[] = [
  {
    id: 1,
    name: "Phương Trang",
    image:
      "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/du-lich-can-tho-1_1624439842_cv30c8.jpg",
    price: 200000,
    from: {
      name: "Bến xe Miền Đông mới",
      location: "123 Lê Văn Việt, phường 9, TP. Thủ Đức",
    },
    to: {
      name: "Bến xe Vũng Tàu",
      location: "125 Lê Lai, phường 7, Vũng Tàu",
    },
    distance: 112,
  },
  {
    id: 2,
    name: "Mạnh Hùng",
    image:
      "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/nu-cuoi-viet-du-lich-vung-tau-09_hifmbu.jpg",
    price: 50000,
    from: {
      name: "Bến xe Miền Đông mới",
      location: "123 Lê Văn Việt, phường 9, TP. Thủ Đức",
    },
    to: {
      name: "Bến xe Vũng Tàu",
      location: "125 Lê Lai, phường 7, Vũng Tàu",
    },
    distance: 60,
  },
  {
    id: 3,
    name: "Mạn Thái",
    image:
      "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/bat-mi-kinh-nghiem-di-ben-tre-lan-dau-cho-nhung-doi-chan-nghien-xe-dich-01-1665404937_mmxf9v.jpg",
    price: 23000,
    from: {
      name: "Bến xe Miền Đông mới",
      location: "123 Lê Văn Việt, phường 9, TP. Thủ Đức",
    },
    to: {
      name: "Bến xe Vũng Tàu",
      location: "125 Lê Lai, phường 7, Vũng Tàu",
    },
    distance: 40,
  },
  {
    id: 4,
    name: "Phương Trang",
    image:
      "https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/nu-cuoi-viet-du-lich-vung-tau-09_hifmbu.jpg",
    price: 42000,
    from: {
      name: "Bến xe Miền Đông mới",
      location: "123 Lê Văn Việt, phường 9, TP. Thủ Đức",
    },
    to: {
      name: "Bến xe Vũng Tàu",
      location: "125 Lê Lai, phường 7, Vũng Tàu",
    },
    distance: 43,
  },
];
export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const from = searchParams?.from;
  const to = searchParams?.to;
  const date = searchParams?.date;
  const skip = searchParams?.skip
  const url = qs.stringifyUrl({
    url: "https://dummyjson.com/products",
    query: {
      skip: skip,
      limit: 10
    }
  }, { skipNull: true });
  const data = await axios.get(url);
  return (
    <div className="py-8 px-16">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <p className="text-sm font-medium">
            {routes.length} kết quả tìm được cho
          </p>
          {from && to ? (
            <p className="text-lg font-bold">
              {from && from.length > 21
                ? from.substring(0, 33)
                : from}

              <span className="font-normal"> - </span>
              {to && to.length > 21
                ? to.substring(0, 33)
                : to}
            </p>
          ) : null}
        </div>
        <SearchList routes={routes} data={data.data} />
      </div>
    </div>
  );
}

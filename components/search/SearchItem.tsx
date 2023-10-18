import Image from "next/image";
import React from "react";

type Props = {};

const SearchItem = (props: Props) => {
  return (
    <div className="rounded-3xl border shadow-md p-4">
      <div className="flex gap-4">
        <div className="relative h-44 w-44 rounded-2xl overflow-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            src="https://res.cloudinary.com/dad0fircy/image/upload/v1697609388/capstone/nu-cuoi-viet-du-lich-vung-tau-09_hifmbu.jpg"
            alt=""
            priority
          />
        </div>
        <h2 className="font-semibold text-lg">Phương Trang</h2>
      </div>
    </div>
  );
};

export default SearchItem;

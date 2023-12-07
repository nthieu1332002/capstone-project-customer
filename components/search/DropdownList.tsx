import React from "react";
import { LocationType, locationList } from "@/lib/constants";
import { MdOutlineLocationOn } from "react-icons/md";

export interface Option {
  id: number;
  name: string;
}
type Props = {
  isOpen: boolean;
  option?: Option[];
  location?: typeof locationList;
  onChangeAddress: (value: string) => void;
  onChangeLocation: (item: LocationType) => void;
};

const DropdownList = ({
  isOpen,
  option,
  onChangeAddress,
  onChangeLocation,
  location,
}: Props) => {
  return (
    <div className={`dropdown-list ${isOpen ? "active" : ""}`}>
      {location ? (
        <>
          <div className="dropdown-list__header cursor-default">
            <p>Quận huyện</p>
          </div>
          {location.map((item) => (
            <div
              key={item.code}
              className="dropdown-list__item truncate flex items-center gap-1"
              onClick={() => onChangeLocation(item)}
            >
              <MdOutlineLocationOn size={18} className="text-gray-300" />{" "}
              {item.path_with_type}
            </div>
          ))}
        </>
      ) : null}
      {option ? (
        <>
          <div className="dropdown-list__header cursor-default">
            <p>Địa điểm</p>
          </div>
          {option.map((item) => (
            <div
              key={item.id}
              className="dropdown-list__item truncate"
              onClick={() => onChangeAddress(item.name)}
            >
              {item.name}
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default DropdownList;

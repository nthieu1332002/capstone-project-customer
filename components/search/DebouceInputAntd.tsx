"use client";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import DropdownList, { Option } from "./DropdownList";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { LocationType, locationList } from "@/lib/constants";

type Props = {
  id: string;
  value: string;
  placeholder: string;
  prefix?: React.ReactNode;
  setValue: (value: string) => void;
  onChangeAddress: (value: string) => void;
  onChangeLocation: (item: LocationType) => void;
};
const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
const DebouceInputAntd = ({
  value,
  placeholder,
  prefix,
  id,
  setValue,
  onChangeAddress,
  onChangeLocation,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>();
  const [location, setLocation] = useState(locationList);
  const fetchAutocomplete = useDebouncedCallback(async (address: string) => {
    try {
      if (!address) {
        return;
      }
      const res = await axios.get(
        `https://rsapi.goong.io/Place/AutoComplete?api_key=${apiKey}&input=${address}`
      );
      const options = res.data.predictions.map((item: any, index: number) => {
        return {
          id: index,
          name: item.description,
        };
      });
      setOptions(options);
      const filteredLocations = locationList.filter((loc) =>
        loc.path_with_type.toLowerCase().includes(address.toLowerCase())
      );
      setLocation(filteredLocations);
    } catch (error) {
      console.log(error);
    }
  }, 500);

  const openDropdownList = (e: any) => {
    e.stopPropagation();
    e.target.select();
    setIsOpen(true);
  };

  const onChange = async (e: any) => {
    setValue(e.target.value);
    await fetchAutocomplete(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        allowClear
        prefix={prefix}
        value={value}
        placeholder={placeholder}
        className="custom-search-sidebar mb-3"
        onChange={onChange}
        onFocus={openDropdownList}
        onBlur={() => {
          setIsOpen(false);
        }}
      />

      <DropdownList
        isOpen={isOpen}
        option={options}
        onChangeAddress={onChangeAddress}
        onChangeLocation={onChangeLocation}
        location={value.length > 0 ? location.slice(0, 6) : locationList.slice(0, 6)}
      />
    </div>
  );
};

export default DebouceInputAntd;

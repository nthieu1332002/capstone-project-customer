import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DropdownList, { Option } from "./DropdownList";
import { LocationType, locationList } from "@/lib/constants";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
  onChangeAddress: (value: string) => void;
  onChangeLocation: (item: LocationType) => void;

};
const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
const DebouceInput = ({
  value,
  placeholder,
  onChange,
  onChangeAddress,
  onChangeLocation
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
      const filteredLocations = locationList
        .filter((loc) =>
          loc.path_with_type.toLowerCase().includes(address.toLowerCase())
        )
      setLocation(filteredLocations);
    } catch (error) {
      console.log(error);
    }
  }, 500);

  useEffect(() => {
    fetchAutocomplete(value);
  }, [fetchAutocomplete, value]);

  const openDropdownList = (e: any) => {
    e.stopPropagation();
    e.target.select();
    setIsOpen(true);
  };
  return (
    <>
      <input
        type="text"
        className="custom-search"
        placeholder={placeholder}
        value={value}
        onFocus={openDropdownList}
        onBlur={() => {
          setIsOpen(false);
        }}
        onChange={onChange}
      />

      <DropdownList
        isOpen={isOpen}
        option={options}
        onChangeAddress={onChangeAddress}
        onChangeLocation={onChangeLocation}
        location={value.length > 0 ? location.slice(0, 6) : locationList.slice(0, 6)}
      />
    </>
  );
};

export default DebouceInput;

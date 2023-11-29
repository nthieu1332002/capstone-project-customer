import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DropdownList, { Option } from "./DropdownList";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
  onChangeLocation: (value: string) => void;
};
const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
const DebouceInput = ({
  value,
  placeholder,
  onChange,
  onChangeLocation,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>();
  const fetchAutocomplete = useDebouncedCallback(async (location: string) => {
    try {
      if (!location) {
        return;
      }
      const res = await axios.get(
        `https://rsapi.goong.io/Place/AutoComplete?api_key=${apiKey}&input=${location}`
      );
      const options = res.data.predictions.map((item: any, index: number) => {
        return {
          id: index,
          name: item.description,
        };
      });
      setOptions(options);
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

      {options && (
        <DropdownList
          isOpen={isOpen}
          option={options}
          onChange={onChangeLocation}
        />
      )}
    </>
  );
};

export default DebouceInput;

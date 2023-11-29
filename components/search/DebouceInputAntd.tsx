"use client";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import DropdownList, { Option } from "./DropdownList";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

type Props = {
  id: string;
  value?: string;
  placeholder: string;
  prefix?: React.ReactNode;
  setValue: (value: string) => void;
};
const apiKey = process.env.NEXT_PUBLIC_GOONG_API_KEY;
const DebouceInputAntd = ({ value, placeholder, prefix, id, setValue }: Props) => {
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
      {options && (
        <DropdownList
          isOpen={isOpen}
          option={options}
          onChange={(e: string) => setValue(e)}
        />
      )}
    </div>
  );
};

export default DebouceInputAntd;

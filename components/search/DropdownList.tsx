import React from "react";

export interface Option {
  id: number
  name: string
}
type Props = {
  isOpen: boolean;
  option: Option[];
  onChange: (value: string) => void;
};

const DropdownList = ({ isOpen, option, onChange }: Props) => {
  return (
    <div className={`dropdown-list ${isOpen ? "active" : ""}`}>
      <div className="dropdown-list__header cursor-default">
        <p>Địa điểm</p>
      </div>
      {option.map((item) => (
        <div key={item.id} className="dropdown-list__item" onClick={() => onChange(item.name)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;

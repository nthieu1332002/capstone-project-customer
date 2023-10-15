import React from "react";
import { IconType } from "react-icons";
type Props = {
  onClick: () => void;
  icon: React.ReactElement;
  name: string;
  type?: string;
};

const NavMenuItem = ({ onClick, icon, name, type }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-start gap-3 px-3 py-3 hover:bg-neutral-100
    transition cursor-pointer text-sm rounded-md
    font-semibold ${type == "active" && "text-main-color"}`}
    >
      <span>{icon}</span> {name}
    </div>
  );
};

export default NavMenuItem;

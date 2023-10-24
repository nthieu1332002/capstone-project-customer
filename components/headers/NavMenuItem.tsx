import { cn } from "@/lib/utils";
import React from "react";
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
      className={cn(
        "flex items-center justify-start gap-3 px-3 py-3 hover:bg-neutral-200 transition cursor-pointer text-sm rounded-md font-semibold",
        type == "active" && "text-primary-color"
      )}
    >
      <span>{icon}</span> {name}
    </div>
  );
};

export default NavMenuItem;

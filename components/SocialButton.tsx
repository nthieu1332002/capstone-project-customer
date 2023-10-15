import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string;
};

const SocialButton = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex items-center justify-center gap-2 hover:bg-gray-200 w-full p-2 active:translate-y-[1px] text-sm mb-[10px] border-[1px] rounded-md border-gray-300"
    >
      {Icon && <Icon size={20} className="" />}
      {label}
    </button>
  );
};

export default SocialButton;

import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  content: string;
};

const ListItem = ({ icon: Icon, title, content }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center text-center text-lg">
      {Icon && <Icon size={50} className="text-primary-color" />}
      <strong>{title}</strong>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default ListItem;

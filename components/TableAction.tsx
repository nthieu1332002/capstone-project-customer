import React from "react";
import { Dropdown, MenuProps } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import useCancelModal from "@/hooks/useCancelModal";

interface ITableActionProps {
  disabled?: boolean;
  code: string;
  editable: boolean;
  cancelable: boolean;
}

const TableAction = ({
  disabled,
  code,
  editable,
  cancelable,
}: ITableActionProps) => {
  const { onOpen } = useCancelModal();

  const items: MenuProps["items"] = [
    {
      key: 0,
      label: <Link href={`/user/order/${code}`}>Xem chi tiết</Link>,
      icon: <AiOutlineEye />,
    },
    {
      key: 1,
      label: <div onClick={() => handleDelete()}>Chỉnh sửa</div>,
      icon: <AiOutlineEdit />,
      disabled: !editable,
    },
    {
      key: 2,
      type: "divider",
    },
    {
      label: (
        <div className="delete" onClick={() => onOpen(code)}>
          Hủy
        </div>
      ),
      key: 3,
      danger: true,
      icon: <AiOutlineDelete className="delete" />,
      disabled: !cancelable,
    },
  ];

  const handleDelete = () => {
    console.log("cancel");
  };

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      disabled={disabled}
    >
      <BsThreeDots onClick={(e: any) => e.preventDefault()} />
    </Dropdown>
  );
};

export default TableAction;

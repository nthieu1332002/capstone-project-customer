import React from "react";
import {  Dropdown, MenuProps } from "antd";
import { BsThreeDots } from "react-icons/bs";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineEye,
} from "react-icons/ai";

interface ITableActionProps {
  disabled?: boolean;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickDetail?: () => void;
}

const TableAction = ({
  disabled,
  onClickEdit,
  onClickDelete,
  onClickDetail,
}: ITableActionProps) => {
  const items: MenuProps['items'] = [
    {
      label: <div onClick={onClickDetail}>Xem chi tiết</div>,
      key: "0",
      icon: <AiOutlineEye />,
    },
    {
      label: <div onClick={onClickEdit}>Chỉnh sửa</div>,
      key: "1",
      icon: <AiOutlineEdit />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="delete" onClick={onClickDelete}>
          Hủy
        </div>
      ),
      key: "3",
      danger: true,
      icon: <AiOutlineDelete className="delete" />,
    },
  ];

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

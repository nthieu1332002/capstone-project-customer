"use client";
import { Input, Pagination, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import qs from "query-string";
import React from "react";
import dayjs from "dayjs";
import { OrderStatus, PaymentStatus } from "@/lib/constants";
import { useSearchParams, useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import CustomDropdown from "@/components/CustomDropdown";

type Order = {
  code: string;
  created_at: string;
  value: number;
  payment_status: number;
  payment_method: number;
  status: number;
};

type Props = {
  data: any;
};

const OrderContent = ({ data }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const orders: Order[] = data.data;
  const meta = data.meta;
  const columns: ColumnsType<Order> = [
    {
      title: "#",
      key: "index",
      align: "center",
      render: (value, item, index) => (meta.current_page - 1) * 10 + index + 1,
    },
    {
      title: "Mã đơn hàng",
      key: "code",
      dataIndex: "code",
      render: (text) => <b className="uppercase">{text}</b>,
    },
    {
      title: "Ngày",
      key: "created_at",
      dataIndex: "created_at",
      sorter: (a, b) => a.created_at.localeCompare(b.created_at),
      render: (text) => <p> {dayjs(text).format("DD/MM/YYYY")}</p>,
    },
    {
      title: "Số tiền",
      key: "value",
      dataIndex: "value",
      render: (text) => <p>{new Intl.NumberFormat("en-Us").format(text)}đ</p>,
    },
    {
      title: "Thanh toán",
      key: "payment_status",
      dataIndex: "payment_status",
      render: (text) => (
        <>
          {PaymentStatus.map((item) => {
            return (
              <>
                {item.id === text ? (
                  <Tag
                    bordered={false}
                    className="tag font-medium"
                    color={item.color}
                  >
                    {item.status}
                  </Tag>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </>
      ),
    },
    {
      title: "Phương thức",
      align: "center",
      key: "payment_method",
      dataIndex: "payment_method",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (text) => (
        <>
          {OrderStatus.map((item) => {
            return (
              <>
                {item.id === text ? (
                  <Tag
                    bordered={false}
                    className="tag font-medium"
                    color={item.color}
                  >
                    {item.status}
                  </Tag>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </>
      ),
    },
  ];

  const handleNavigation = (page: number, pageSize: number) => {
    console.log("page", page);
    const url = qs.stringifyUrl(
      {
        url: "/user/order",
        query: { ...Object.fromEntries(params), page },
      },
      { skipNull: true }
    );
    router.push(url);
  };

  const onSearch = (value: string) => {
    const url = qs.stringifyUrl(
      {
        url: "/user/order",
        query: { ...Object.fromEntries(params), code: value },
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="flex flex-col mt-3 bg-blue-50">
      <div className="p-5 flex flex-col gap-3 bg-white rounded-xl">
        <div className="flex justify-between">
          <Input
            allowClear
            prefix={<BiSearchAlt size="18" className="text-zinc-500" />}
            placeholder="Tra cứu mã đơn hàng"
            className="custom-search-sidebar"
            onPressEnter={(e) => onSearch(e.currentTarget.value)}
            style={{ width: 230 }}
          />
          <CustomDropdown/>
        </div>
        <Table
          size="middle"
          dataSource={orders}
          columns={columns}
          pagination={false}
        />
        <Pagination
          current={meta.current_page}
          pageSize={meta.per_page}
          total={meta.total}
          showSizeChanger={false}
          onChange={(page, pageSize) => handleNavigation(page, pageSize)}
        />
      </div>
    </div>
  );
};

export default OrderContent;

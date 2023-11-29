"use client";
import { Input, Pagination, Space, Table, Tabs, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import qs from "query-string";
import React, { Fragment } from "react";
import dayjs from "dayjs";
import { OrderStatus, PaymentStatus } from "@/lib/constants";
import { useSearchParams, useRouter } from "next/navigation";
import { BiSearchAlt } from "react-icons/bi";
import CustomFilter from "@/components/CustomFilter";
import TableAction from "@/components/TableAction";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
locale.lang.shortWeekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
locale.lang.shortMonths = [
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "T6",
  "T7",
  "T8",
  "T9",
  "T10",
  "T11",
  "T12",
];
const { RangePicker } = DatePicker;
type Order = {
  code: string;
  created_at: string;
  delivery_price: number;
  payment_status: number;
  receiver_name: string;
  latest_order_status: number;
};

type Props = {
  data: any;
  status?: string;
};

const OrderContent = ({ data, status }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const orders: Order[] = data.data;
  const meta = data.meta;
  const columns: ColumnsType<Order> = [
    {
      title: "Mã đơn hàng",
      key: "code",
      dataIndex: "code",
      fixed: "left",
      width: 130,
      render: (text) => <b className="uppercase">#{text}</b>,
    },
    {
      title: "Ngày",
      key: "created_at",
      dataIndex: "created_at",
      width: 120,
      sorter: (a, b) => a.created_at.localeCompare(b.created_at),
      render: (text) => <p> {dayjs(text).format("DD/MM/YYYY")}</p>,
    },
    {
      title: "Người nhận",
      key: "receiver_name",
      dataIndex: "receiver_name",
      sorter: (a, b) => a.receiver_name.localeCompare(b.receiver_name),

      width: 200,
      render: (text) => <p className="font-semibold">{text}</p>,
    },
    {
      title: "Số tiền",
      key: "delivery_price",
      dataIndex: "delivery_price",
      width: 120,
      sorter: (a, b) => a.delivery_price - b.delivery_price,
      render: (text) => <b>{new Intl.NumberFormat("en-Us").format(text)}đ</b>,
    },
    {
      title: "Thanh toán",
      key: "payment_status",
      dataIndex: "payment_status",
      sorter: (a, b) =>
        a.payment_status.toString().localeCompare(b.payment_status.toString()),

      width: 150,
      render: (text) => (
        <>
          {PaymentStatus.map((item) => {
            return (
              <Fragment key={item.id}>
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
              </Fragment>
            );
          })}
        </>
      ),
    },

    {
      title: "Trạng thái",
      key: "latest_order_status",
      dataIndex: "latest_order_status",
      sorter: (a, b) =>
        a.latest_order_status
          .toString()
          .localeCompare(b.latest_order_status.toString()),

      width: 150,
      render: (text) => (
        <>
          {OrderStatus.map((item) => {
            return (
              <Fragment key={item.id}>
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
              </Fragment>
            );
          })}
        </>
      ),
    },
    {
      dataIndex: "action",
      fixed: "right",
      width: 40,
      render: (_, record) => {
        return (
          <TableAction
            onClickDetail={() => router.push(`/user/order/${record.code}`)}
          />
        );
      },
    },
  ];

  const handleNavigation = (page: number, pageSize: number) => {
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

  const tabItems = [
    {
      key: "",
      label: <p className="text-sm font-semibold">Tất cả</p>,
    },
    ...OrderStatus.map((item) => ({
      key: item.id.toString(),
      label: <p className="text-sm font-semibold">{item.status}</p>,
    })),
  ];
  const onChangeStatus = (key: string) => {
    const url = qs.stringifyUrl(
      {
        url: "/user/order",
        query: { ...Object.fromEntries(params), status: key },
      },
      { skipNull: true }
    );
    router.push(url);
  };
  const onChangeDate = (date: any, dateString: any) => {
    const format = dateString.toString() === "," ? "" : dateString.toString();
    const url = qs.stringifyUrl(
      {
        url: "/user/order",
        query: {
          ...Object.fromEntries(params),
          created_between: format,
        },
      },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="flex flex-col mt-3">
      <div className="px-5 py-1 bg-white rounded-xl">
        <Tabs
          defaultActiveKey={status || ""}
          items={tabItems}
          onChange={onChangeStatus}
        />
        <div className="flex justify-between mb-3">
          <Input
            allowClear
            prefix={<BiSearchAlt size="18" className="text-zinc-500" />}
            placeholder="Tra cứu mã đơn hàng"
            className="custom-search-sidebar !w-auto lg!w-60"
            onPressEnter={(e) => onSearch(e.currentTarget.value)}
          />
          <Space size={12}>
            <RangePicker
              className="!w-20 lg:!w-64"
              onChange={onChangeDate}
              locale={locale}
              placeholder={["Từ", "Đến"]}
            />
            <CustomFilter />
          </Space>
        </div>
        <Table
          size="middle"
          dataSource={orders}
          columns={columns}
          pagination={false}
          scroll={{ x: 500 }}
        />
        <div className="mt-3 flex justify-end">
          <Pagination
            current={meta.current_page}
            pageSize={meta.per_page}
            total={meta.total}
            showSizeChanger={false}
            onChange={(page, pageSize) => handleNavigation(page, pageSize)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderContent;

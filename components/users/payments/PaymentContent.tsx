"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ColumnsType } from "antd/es/table";
import { Pagination, Table } from "antd";
import dayjs from "dayjs";

import React from "react";
import Link from "next/link";
type Payment = {
  id: number;
  order_code: string;
  payment_method: number;
  value: number;
  vnpay_transaction_code: string;
  created_at: string;
};

type Props = {
  data: any;
};

const PaymentContent = ({ data }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const payments: Payment[] = data.data.map(
    (item: {
      id: any;
      attributes: {
        order_code: string;
        payment_method: any;
        value: any;
        vnpay_transaction_code: any;
        created_at: any;
      };
    }) => ({
      id: item.id,
      order_code: item.attributes.order_code,
      payment_method: item.attributes.payment_method,
      value: item.attributes.value,
      vnpay_transaction_code: item.attributes.vnpay_transaction_code,
      created_at: item.attributes.created_at,
    })
  );

  const meta = data.meta;
  const columns: ColumnsType<Payment> = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      fixed: "left",
      width: 130,
      sorter: (a, b) => a.value - b.value,
      render: (text) => <b className="uppercase">{text}</b>,
    },
    {
      title: "Mã thanh toán",
      key: "vnpay_transaction_code",
      dataIndex: "vnpay_transaction_code",
      fixed: "left",
      width: 130,
      sorter: (a, b) => a.value - b.value,
      render: (text) => <b className="uppercase">{text}</b>,
    },
    {
      title: "Mã đơn hàng",
      key: "order_code",
      dataIndex: "order_code",
      render: (text) => (
        <Link href={`/user/order/${text}`} className="uppercase">
          #{text}
        </Link>
      ),
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
      title: "Giá trị",
      key: "value",
      dataIndex: "value",
      sorter: (a, b) => a.value - b.value,
      width: 200,
      render: (text) => <b>{new Intl.NumberFormat("en-Us").format(text)}đ</b>,
    },
    {
      title: "Phương thức thanh toán",
      key: "payment_method",
      dataIndex: "payment_method",
      render: (text) => <p>{text}</p>,
    },
  ];
  return (
    <div className="flex flex-col mt-3">
      <div className="px-5 py-1 bg-white rounded-xl">
        <Table
          size="middle"
          dataSource={payments}
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
            // onChange={(page, pageSize) => handleNavigation(page, pageSize)}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;

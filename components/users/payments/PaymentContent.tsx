"use client";
import { ColumnsType } from "antd/es/table";
import { Pagination, Table } from "antd";
import dayjs from "dayjs";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import vnpay from "@/public/assets/vnpay.png";
import cash from "@/public/assets/cash.jpg";
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
      title: "Giao dịch",
      key: "order_code",
      dataIndex: ["order_code", "vnpay_transaction_code"],
      fixed: "left",
      width: 230,
      render: (text, record) => (
        <>
          <p className="font-bold text-sm">
            Đơn hàng{" "}
            <Link href={`/user/order/${record.order_code}`} target="_blank" className="uppercase">
              #{record.order_code}
            </Link>
          </p>
          {record.vnpay_transaction_code ? (
            <p className="text-sm">Mã VNPay: {record.vnpay_transaction_code}</p>
          ) : null}
        </>
      ),
    },
    {
      title: "Giá trị",
      key: "value",
      dataIndex: "value",
      sorter: (a, b) => a.value - b.value,
      width: 150,
      render: (text) => <b>{new Intl.NumberFormat("en-Us").format(text)}đ</b>,
    },
    {
      title: "Thời gian",
      key: "created_at",
      dataIndex: "created_at",
      sorter: (a, b) => a.created_at.localeCompare(b.created_at),
      render: (text) => <b> {dayjs(text).format("hh:mm:ss ngày DD/MM/YYYY")}</b>,
    },
    {
      title: "Phương thức thanh toán",
      key: "payment_method",
      dataIndex: "payment_method",
      render: (text) => (
        <Image
          src={text=== 0 ? cash : vnpay}
          alt="logo"
          width={100}
          priority
        />
      ),
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
          scroll={{ x: 800 }}
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

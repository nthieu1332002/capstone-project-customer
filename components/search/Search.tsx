"use client";

import React, { useEffect, useState } from "react";
import DebouceSelect from "./DebouceSelect";
import { Form } from "antd";
import Button from "../Button";

type Props = {};
type FieldType = {
  from?: string;
  // to?: string;
};
const Search = (props: Props) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const values = Form.useWatch([], form);
  console.log(values);
  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setDisabled(false);
      },
      () => {
        setDisabled(true);
      }
    );
  }, [form, values]);
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="absolute shadow-md bg-white rounded-md p-10 w-[1000px] -bottom-3">
      <div className="">
        <Form
          form={form}
          layout="vertical"
          name="search"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item<FieldType> label="Từ" name="from" className="mb-4">
            <DebouceSelect />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={disabled}
              label="Đăng nhập"
              onClick={handleSubmit}
            />
          </Form.Item>
        </Form>
        <DebouceSelect />
      </div>
    </div>
  );
};

export default Search;

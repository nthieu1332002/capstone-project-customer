"use client";
import {
  Collapse,
  Form,
  Radio,
  RadioChangeEvent,
  Slider,
  Space,
  theme,
} from "antd";
import React, { useCallback, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { BsFilter } from "react-icons/bs";
import { LiaFilterSolid } from "react-icons/lia";
import { SliderMarks } from "antd/es/slider";
type Props = {};

const FilterSideBar = (props: Props) => {
  const { token } = theme.useToken();
  const [value, setValue] = useState("a");
  const [form] = Form.useForm();

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const onChangeSlide = (value: number | number[]) => {
    console.log("onChange: ", value);
  };

  const onAfterChange = (value: number | number[]) => {
    console.log("onAfterChange: ", value);
  };
  return (
    <div className="px-12 py-3 border-b">
      <div className="rounded-md">
        <Form
          name="filter-form"
          initialValues={{ price: "a", range: [0, 100000] }}
        >
          <div className="flex items-center py-3 gap-2 border-b-2">
            <LiaFilterSolid size={20} className="text-primary-color" />
            <h1 className="font-semibold text-lg">Bộ lọc</h1>
            <p
              onClick={() => form.resetFields()}
              className="text-primary-color hover:text-primary-color/70 text-sm font-medium cursor-pointer ml-auto"
            >
              Đặt lại
            </p>
          </div>
          <Collapse
            bordered={false}
            defaultActiveKey={["1", "2"]}
            expandIcon={({ isActive }) => (
              <DownOutlined
                size={21}
                className="!text-primary-color"
                rotate={isActive ? -180 : 0}
              />
            )}
            style={{ background: token.colorBgContainer }}
            expandIconPosition="end"
            items={[
              {
                key: "1",
                label: <h1 className="font-semibold">Giá cơ bản</h1>,
                children: (
                  <Form.Item name="price">
                    <Radio.Group onChange={onChange} value={value}>
                      <Space direction="vertical">
                        <Radio value="a">Giá thấp đến cao</Radio>
                        <Radio value="b">Giá cao đến thấp</Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                ),
              },
              {
                key: "2",
                label: <h1 className="font-semibold">Khoảng giá</h1>,
                children: (
                  <Form.Item name="range">
                    <Slider
                      range
                      step={50000}
                      defaultValue={[0, 500000]}
                      max={500000}
                      marks={{
                        0: 0,
                        500000: {
                          label: 500000,
                        },
                      }}
                      onChange={onChangeSlide}
                      onAfterChange={onAfterChange}
                    />
                  </Form.Item>
                ),
              },
            ]}
          />
        </Form>
      </div>
    </div>
  );
};

export default FilterSideBar;

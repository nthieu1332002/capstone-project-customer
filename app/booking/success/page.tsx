"use client";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";
type Props = {};
const { Paragraph, Text } = Typography;
const BookingSuccess = ({}: Props) => {
  return (
    <div className="flex flex-col gap-5 h-full max-w-screen px-40 pt-8 pb-10">
      <Result
        status="success"
        title="Tạo đơn hàng thành công!"
        subTitle={
          <p className="text-black">
            Mã vận đơn: <span className="font-bold">2017182818828182881</span>
          </p>
        }
      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              Đơn hàng của bạn đã được tạo thành công, vui lòng thực hiện các
              bước cuối cùng để hoàn thành đơn hàng của bạn:
            </Text>
          </Paragraph>
          <Paragraph>
            <ExclamationCircleOutlined className="site-result-demo-error-icon" />{" "}
            Mang hàng ra chành xe để thực hiện việc gửi hàng.
          </Paragraph>
          <Paragraph>
            <ExclamationCircleOutlined className="site-result-demo-error-icon" />{" "}
            Thanh toán đơn hàng.
          </Paragraph>
        </div>
      </Result>
      <Button type="primary" key="console">
        Về trang chủ
      </Button>
      <Button key="buy">Đặt đơn mới</Button>,
    </div>
  );
};

export default BookingSuccess;

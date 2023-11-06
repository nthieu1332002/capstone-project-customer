"use client";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";
type Props = {
  params: any;
};
const { Paragraph, Text } = Typography;
const BookingSuccessContent = ({ params }: Props) => {
  return (
    <div className="flex flex-col gap-5 h-full max-w-screen px-40 pt-8 pb-10">
      <Result
        status="success"
        title={<p className="font-bold">Tạo đơn hàng thành công!</p>}
        subTitle={
          <div className="text-black">
            <p>
              Mã vận đơn: <span className="font-bold">{params.code}</span>
            </p>
            <p>Xác nhận đang được gửi tới <span className="font-bold">{params.email}</span></p>
            <p>Bạn có thể <a>chỉnh sửa hoặc hủy</a> cho đến khi chành xe xác nhận đơn hàng</p>
          </div>
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
            <CheckCircleOutlined className="!text-primary-color" />{" "}
            Mang hàng ra chành xe để thực hiện việc gửi hàng.
          </Paragraph>
          <Paragraph>
            <CheckCircleOutlined className="!text-primary-color" />{" "}
            Thanh toán đơn hàng sau khi chành xe đã xác nhận kích cỡ và loại của đơn hàng.
          </Paragraph>
        </div>
      </Result>
    </div>
  );
};

export default BookingSuccessContent;

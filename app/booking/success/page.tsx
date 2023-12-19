"use client";
import { CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
export default function BookingSuccess() {
  const searchParams = useSearchParams();
  const { data } = useSession()
  const code = searchParams.get("code");
  const email = searchParams.get("email");
  return (
    <div className="flex flex-col gap-5 h-full max-w-screen px-5 md:px-40 pt-5 md:pt-8 pb-10">
      <div className="text-center">
        <div className="flex items-center justify-center my-3">
          <BsFillCheckCircleFill size="100" className="text-primary-color" />
        </div>
        <h1 className="text-2xl font-bold">Tạo đơn hàng thành công!</h1>

        <div className="text-black flex flex-col gap-1 my-3">
          <p>
            Mã vận đơn: <span className="font-bold">{code}</span>
          </p>
          <p>
            Xác nhận đang được gửi tới{" "}
            <span className="font-bold">{email}</span>
          </p>
          <p>
            Bạn có thể{" "}
            <Link href="#" className="text-blue-600">
              chỉnh sửa hoặc hủy
            </Link>{" "}
            cho đến khi chành xe xác nhận đơn hàng.
          </p>
          {data ? <Link href={`/user/order/${code}`} className="text-blue-600">Xem chi tiết đơn hàng tại đây</Link>: <p className="text-yellow-600">Hãy tạo tài khoản để dễ dàng theo dõi và quản lý đơn hàng của bạn.</p>}
        </div>
      </div>

      <div className="bg-slate-500/10 px-5 py-4 md:px-10 md:py-7 rounded-md flex flex-col gap-3">
        <p className="font-semibold">
          Đơn hàng của bạn đã được tạo thành công, vui lòng thực hiện các bước
          cuối cùng để hoàn thành đơn hàng của bạn:
        </p>

        <p>
          <CheckCircleOutlined className="!text-primary-color" /> Mang hàng ra
          chành xe để thực hiện việc gửi hàng.
        </p>
        <p>
          <CheckCircleOutlined className="!text-primary-color" /> Thanh toán đơn
          hàng sau khi chành xe đã xác nhận kích cỡ và loại của đơn hàng.
        </p>
        <p className="text-red-500">
          <b className="underline">Lưu ý:</b>{" "}
          Thanh toán chỉ có thể được thực hiện sau khi nhà xe xác nhận đơn hàng.
        </p>
      </div>
    </div>
  );
}

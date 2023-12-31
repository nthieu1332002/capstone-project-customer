import ChangePassword from "@/components/users/profiles/ChangePassword";
import UserProfile from "@/components/users/profiles/UserProfile";
import { axios } from "@/lib/axios";
import { Tabs } from "antd";
import { Metadata } from "next";
import { getProfile } from "../layout";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Tài khoản",
  description:
    "Chành xe miền tây là hệ thống kết nối, vận chuyển hàng hóa thông qua hệ thống kết nối nhà chành mà vị trí chính là thành phố Hồ Chí Minh và các tỉnh miền tây.",
  alternates: {
    canonical: "/user/profile",
  },
};

const Profile = async () => {
  const data = await getProfile()
  if (!data) return redirect("/");
  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Cài đặt</h1>
      <p className="text-sm">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: <p className="font-semibold">Thông tin tài khoản</p>,
            key: "1",
            children: <UserProfile user={data} />,
          },
          {
            label: <p className="font-semibold">Mật khẩu & bảo mật</p>,
            key: "2",
            children: <ChangePassword />,
          },
        ]}
      />
    </div>
  );
};

export default Profile;

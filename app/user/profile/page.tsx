import ChangePassword from "@/components/users/profiles/ChangePassword";
import UserProfile from "@/components/users/profiles/UserProfile";
import { axios } from "@/lib/axios";
import { Tabs } from "antd";

const Profile = async () => {
  const data = await axios.get("/api/user");

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

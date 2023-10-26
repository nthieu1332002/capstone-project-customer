import UserProfile from "@/components/user/UserProfile";
import { authAxios } from "@/lib/axios";

const Profile = async () => {
  const data = await authAxios.get("/api/user");

  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Thông tin tài khoản</h1>
      <p className="text-gray-400 text-sm">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <UserProfile user={data} />
    </div>
  );
};

export default Profile;

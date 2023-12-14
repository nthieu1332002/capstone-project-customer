import getServerUser from "@/actions/getServerUser";
import UserSidebar from "@/components/users/UserSidebar";

import { axios } from "@/lib/axios";
import { redirect } from "next/navigation";

export const getProfile = async () => {
  try {
    const res = await axios.get("/api/customer/profile/me");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getServerUser();

  if (!user) return redirect("/");
  const data = await getProfile();
  if (!data) return redirect("/");
  return (
    <div className="min-h-screen pt-[68px] bg-[#d5d9e6]">
      <div className="flex py-4 md:py-5 xl:px-20 md:px-10 px-0">
        <UserSidebar user={data.attributes} />

        <div className="w-full md:w-[calc(100%-343px)] rounded-lg">{children}</div>
      </div>
    </div>
  );
};
export default ProfileLayout;

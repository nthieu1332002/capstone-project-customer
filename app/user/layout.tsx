import getServerUser from "@/actions/getServerUser";
import UserSidebar from "@/components/users/UserSidebar";

import { axios } from "@/lib/axios";
import { redirect } from "next/navigation";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getServerUser();

  if (!user) return redirect("/");
  const data = await axios.get("/api/user");
  if (!data) return redirect("/");
  return (
    <div className="min-h-screen pt-[68px] bg-[#eff1f7]">
      <div className="flex gap-8 py-5 xl:px-40 md:px-10 sm:px-2 px-4">
        <UserSidebar user={data} />

        <div className="w-full rounded-lg">{children}</div>
      </div>
    </div>
  );
};
export default ProfileLayout;

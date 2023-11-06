import { axios } from "@/lib/axios";
import qs from "query-string";
import { cache } from "react";

const getSearchList = cache(async ({ code }: { code: string }) => {
  try {
    const res = await axios.get(`/api/customer/orders/tracking/${code}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

export default async function Search({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const code = searchParams?.code;
  const data = code ? await getSearchList({ code }) : {};
    console.log("dât", data);
  return (
    <div className="min-h-screen pt-[68px]">
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-16">
        {Object.keys(data).length === 0 ? <p>Có</p> : <p>Không có kết quả được tìm thấy.</p>}
      </div>
    </div>
  );
}

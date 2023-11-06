import TrackingContent from "@/components/trackings/TrackingContent";
import { axios } from "@/lib/axios";
import qs from "query-string";
import { cache } from "react";

const getSearchList = cache(async ({ code }: { code: string }) => {
  try {
    const res = await axios.get(`/api/customer/orders/tracking/${code}`);
    console.log("res", res.data);
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
  // const data = code ? await getSearchList({ code }) : {};
  const data = {
    details: [
      {
        status: 0,
        created_at: "2023-11-06T04:34:48.000000Z",
        location: "Hà Nội",
      },
      {
        status: 1,
        created_at: "2023-11-08T05:34:48.000000Z",
        location: "Hà Nội",
      },
      {
        status: 2,
        created_at: "2023-11-16T06:34:48.000000Z",
        location: "Hà Nội",
      },
    ],
    payment: {
      status: 0,
      value: 0,
    },
  };
  console.log("dât", data);
  return (
    <div className="min-h-screen pt-[68px] bg-slate-50">
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-40">
        {Object.keys(data).length !== 0 ? (
          <TrackingContent data={data} code={code} />
        ) : (
          <p className="text-center text-lg font-bold">Không có kết quả được tìm thấy.</p>

        )}
      </div>
    </div>
  );
}

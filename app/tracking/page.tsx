import TrackingContent from "@/components/trackings/TrackingContent";
import { axios } from "@/lib/axios";
import { cache } from "react";

const getTracking = cache(async ({ code }: { code: string }) => {
  try {
    const res = await axios.get(`/api/customer/orders/${code}/tracking/`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

export default async function Tracking({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const code = searchParams?.code;
  const data = code ? await getTracking({ code }) : {};
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

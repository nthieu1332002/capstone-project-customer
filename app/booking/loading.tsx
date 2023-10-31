import { Divider } from "antd";

export default function Loading() {
  return (
    <div className="animate-pulse flex h-full max-w-screen px-5">
      <div className="flex-grow">
        <div className="px-1 space-y-6 md:px-5 lg:px-5 xl:px-32 py-8">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded"></div>

          <div className="space-y-6 flex items-center justify-center px-5 md:px-32 my-4 md:my-10">
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
          <div className="space-y-6 border-2 rounded-lg p-3 lg:p-10">
            <div className="h-4 bg-slate-200 rounded"></div>

            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="flex flex-col md:flex-row justify-between md:gap-5">
              <div className="h-4 bg-slate-200 rounded"></div>

              <div className="h-4 bg-slate-200 rounded"></div>
            </div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <Divider />
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="flex flex-col md:flex-row justify-between md:gap-5">
              <div className="h-4 bg-slate-200 rounded"></div>

              <div className="h-4 bg-slate-200 rounded"></div>
            </div>
            <Divider />

            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="flex flex-col md:flex-row md:gap-5">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded"></div>
            </div>

            <Divider />
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[500px] flex-col">
        <div className="p-2 md:p-4 sticky top-[80px]">
          <div className=" mb-4 border rounded-md">
            <div className="p-4 flex items-center gap-2 text-lg font-bold border-b">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
            </div>
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">
              <div className="flex-grow flex flex-col gap-2 justify-between ">
                <div className="flex items-center gap-1 text-base font-semibold text-primary-color">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                </div>

                <ul className="flex flex-col gap-2 mt-2 list-disc list-inside">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>

                  <div className="ml-[1px] border-l-[3px] border-dotted pl-6">
                    <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                </ul>
              </div>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="p-4 flex items-center gap-2 text-lg font-bold border-b">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
            </div>
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">
              <div className="h-4 bg-slate-200 rounded col-span-2"></div>

              <div className="h-4 bg-slate-200 rounded col-span-2"></div>

              <div className="h-4 bg-slate-200 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

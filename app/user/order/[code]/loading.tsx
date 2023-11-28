export default function Loading() {
  return (
    <div className="animate-pulse bg-white px-5 py-4 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="h-5 bg-slate-200 rounded mb-5"></div>

        <div className="h-10 bg-slate-200 rounded"></div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4 w-[calc(100%-220px)]">
            <div className=" rounded-sm shadow-sm px-5 py-4">
              <div className="flex flex-col gap-5">
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-5 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

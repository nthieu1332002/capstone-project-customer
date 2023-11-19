
export default function Loading() {
  return (
    <div className="animate-pulse py-8 mx-auto px-4 md:px-8 lg:px-16">
      <div className="h-10 bg-slate-200 rounded mb-5"></div>

      <div className="flex flex-col gap-5">
        <div className="h-40 bg-slate-200 rounded"></div>
        <div className="h-40 bg-slate-200 rounded"></div>
        <div className="h-40 bg-slate-200 rounded"></div>
        <div className="h-40 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="animate-pulse min-h-screen pt-[68px] bg-slate-200 ">
      <div className="py-8 mx-auto px-4 md:px-8 lg:px-40 flex flex-col gap-3">
        <div className="h-5 bg-white rounded"></div>
        <div className="h-10 bg-white rounded"></div>
        <div className="h-5 bg-white rounded"></div>
        <div className="h-8 bg-white rounded"></div>
        <div className="h-7 bg-white rounded"></div>
        <div className="h-8 bg-white rounded"></div>
        <div className="h-5 bg-white rounded"></div>
        <div className="h-10 bg-white rounded"></div>
      </div>
    </div>
  );
}

"use client";

export default function Error() {
  const data = {};
  return (
    <div className="p-1 md:p-3 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Đơn hàng của bạn</h1>
      <p className="text-sm">Theo dõi và quản lý đơn hàng của bạn</p>
      <div className="flex flex-col mt-3">
        <div className="px-5 py-1 bg-white rounded-xl">
          Không có kết quả được tìm thấy.
        </div>
      </div>
    </div>
  );
}

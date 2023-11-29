export const phoneNumberPattern = /^[0-9]{10,11}$/;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const packageType = [
    { value: 0, label: 'Hàng phổ thông' },
    { value: 1, label: 'Thực phẩm' },
    { value: 2, label: 'Hóa chất' },
    { value: 3, label: 'Giấy tờ' },
    { value: 4, label: 'Điện tử' },
    { value: 5, label: 'Hàng dễ vỡ' },
];

export const PaymentStatusType = [
    { value: 0, label: 'Chưa thanh toán' },
    { value: 1, label: 'Đã thanh toán' },
];
export const PaymentMethod = [
    { value: 0, label: 'tiền mặt' },
    { value: 1, label: 'vnpay' },
];

const paidColor = "success";
const unpaidColor = "warning";

export const OrderStatus = [
    {
        id: 0,
        status: "Đã tạo",
        color: "gold",
    },
    {
        id: 1,
        status: "Đã xác nhận",
        color: "lime",
    },
    {
        id: 2,
        status: "Đã nhận",
        color: "magenta",
    },
    {
        id: 3,
        status: "Đang vận chuyển",
        color: "magenta",

    },
    {
        id: 4,
        status: "Đã đến trạm",
        color: "#108ee9",
    },
    {
        id: 5,
        status: "Hoàn thành",
        color: paidColor,
    },
    {
        id: 6,
        status: "Đã hủy",
        color: "red",
    },
];
export const PaymentStatus = [
    {
        id: 0,
        status: "Chưa thanh toán",
        color: unpaidColor,
    },
    {
        id: 1,
        status: "Đã thanh toán",
        color: paidColor,
    },
]
export const OrderStatusMap: { [key: number]: string } = {
    0: "đã được tạo",
    1: "đã được xác nhận",
    2: "đã được nhà xe nhận",
    3: "đang trên đường vận chuyển",
    4: "đã đến trạm",
    5: "đã giao hàng thành công",
    6: "đã hủy",
};
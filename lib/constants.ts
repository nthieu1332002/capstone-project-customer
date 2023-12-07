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

export const packageList = [
    { value: 'Hàng phổ thông', label: 'Hàng phổ thông' },
    { value: 'Thực phẩm', label: 'Thực phẩm' },
    { value: 'Hóa chất', label: 'Hóa chất' },
    { value: 'Giấy tờ', label: 'Giấy tờ' },
    { value: 'Điện tử', label: 'Điện tử' },
    { value: 'Hàng dễ vỡ', label: 'Hàng dễ vỡ' },
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
        status: "Đã được nhận",
        color: "lime",
    },
    {
        id: 2,
        status: "Đã xuất phát khỏi",
        color: "magenta",
    },
    {
        id: 3,
        status: "Đã đến",
        color: "magenta",

    },
    {
        id: 4,
        status: "đã đến tay người nhận",
        color: paidColor,

    },
    {
        id: 5,
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
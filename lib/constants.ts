export const phoneNumberPattern = /^[0-9]{10,11}$/;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const packageType = [
    { value: 0, label: 'Hàng dễ vỡ' },
    { value: 1, label: 'Điện tử' },
    { value: 2, label: 'Giấy tờ' },
    { value: 3, label: 'Hóa chất' },
    { value: 4, label: 'Thực phẩm' },
    { value: 5, label: 'Khác' },
];

export const PaymentStatusType = [
    { value: 0, label: 'Chưa thanh toán' },
    { value: 1, label: 'Đã thanh toán' },
];
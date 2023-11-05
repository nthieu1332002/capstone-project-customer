export const phoneNumberPattern = /^[0-9]{10,11}$/;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const packageList = [
    { value: 0, label: 'Hàng dễ vỡ' },
    { value: 1, label: 'Điện tử' },
    { value: 2, label: 'Giấy tờ' },
    { value: 3, label: 'Hóa chất' },
    { value: 4, label: 'Thực phẩm' },
    { value: 5, label: 'Khác' },
];

//     case Fragile = 1; //de vo
//     case Electronic = 2; // dien tu
//     case Paper = 3; // giay to
//     case Chemistry = 4; // hoa chat
//     case Food = 5
// case Other = 0;
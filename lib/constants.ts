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
export const OrderStatusMap: { [key: number]: string } = {
    0: "đã được tạo",
    1: "đã được tiếp nhận tại",
    2: "đã xuất phát khỏi",
    3: "đã đến",
    4: "đã giao hàng thành công tại",
    5: "đã hủy",
};
export const OrderStatus = [
    {
        id: 0,
        status: "Đã tạo",
        color: "gold",
    },
    {
        id: 1,
        status: "Đã tiếp nhận",
        color: "lime",
    },
    {
        id: 2,
        status: "Đang vận chuyển",
        color: "magenta",
    },
    {
        id: 3,
        status: "Đã đến trạm",
        color: "blue",
    },
    {
        id: 4,
        status: "Hoàn thành",
        color: paidColor,
    },
    {
        id: 5,
        status: "Đã hủy",
        color: "red",
    },
    {
        id: 6,
        status: "Đã xác nhận",
        color: "cyan",
    },
];
export const PaymentStatus = [
    {
        id: 0,
        status: "Chưa thanh toán",
        color: "volcano",
    },
    {
        id: 1,
        status: "Đã thanh toán",
        color: paidColor,
    },
]

export type LocationType = {
    code: string,
    parent_code: string,
    path_with_type: string
}
export const locationList: LocationType[] = [
    {
        code: '760',
        parent_code: '79',
        path_with_type: 'Quận 1, Thành phố Hồ Chí Minh'
    },
    {
        code: '761',
        parent_code: '79',
        path_with_type: 'Quận 12, Thành phố Hồ Chí Minh'
    },
    {
        code: '764',
        parent_code: '79',
        path_with_type: 'Quận Gò Vấp, Thành phố Hồ Chí Minh'
    },
    {
        code: '765',
        parent_code: '79',
        path_with_type: 'Quận Bình Thạnh, Thành phố Hồ Chí Minh'
    },
    {
        code: '766',
        parent_code: '79',
        path_with_type: 'Quận Tân Bình, Thành phố Hồ Chí Minh'
    },
    {
        code: '767',
        parent_code: '79',
        path_with_type: 'Quận Tân Phú, Thành phố Hồ Chí Minh'
    },
    {
        code: '768',
        parent_code: '79',
        path_with_type: 'Quận Phú Nhuận, Thành phố Hồ Chí Minh'
    },
    {
        code: '769',
        parent_code: '79',
        path_with_type: 'Thành phố Thủ Đức, Thành phố Hồ Chí Minh'
    },
    {
        code: '770',
        parent_code: '79',
        path_with_type: 'Quận 3, Thành phố Hồ Chí Minh'
    },
    {
        code: '771',
        parent_code: '79',
        path_with_type: 'Quận 10, Thành phố Hồ Chí Minh'
    },
    {
        code: '772',
        parent_code: '79',
        path_with_type: 'Quận 11, Thành phố Hồ Chí Minh'
    },
    {
        code: '773',
        parent_code: '79',
        path_with_type: 'Quận 4, Thành phố Hồ Chí Minh'
    },
    {
        code: '774',
        parent_code: '79',
        path_with_type: 'Quận 5, Thành phố Hồ Chí Minh'
    },
    {
        code: '775',
        parent_code: '79',
        path_with_type: 'Quận 6, Thành phố Hồ Chí Minh'
    },
    {
        code: '776',
        parent_code: '79',
        path_with_type: 'Quận 8, Thành phố Hồ Chí Minh'
    },
    {
        code: '777',
        parent_code: '79',
        path_with_type: 'Quận Bình Tân, Thành phố Hồ Chí Minh'
    },
    {
        code: '778',
        parent_code: '79',
        path_with_type: 'Quận 7, Thành phố Hồ Chí Minh'
    },
    {
        code: '783',
        parent_code: '79',
        path_with_type: 'Huyện Củ Chi, Thành phố Hồ Chí Minh'
    },
    {
        code: '784',
        parent_code: '79',
        path_with_type: 'Huyện Hóc Môn, Thành phố Hồ Chí Minh'
    },
    {
        code: '785',
        parent_code: '79',
        path_with_type: 'Huyện Bình Chánh, Thành phố Hồ Chí Minh'
    },
    {
        code: '786',
        parent_code: '79',
        path_with_type: 'Huyện Nhà Bè, Thành phố Hồ Chí Minh'
    },
    {
        code: '787',
        parent_code: '79',
        path_with_type: 'Huyện Cần Giờ, Thành phố Hồ Chí Minh'
    },
    {
        code: '794',
        parent_code: '80',
        path_with_type: 'Thành phố Tân An, Tỉnh Long An'
    },
    {
        code: '795',
        parent_code: '80',
        path_with_type: 'Thị xã Kiến Tường, Tỉnh Long An'
    },
    {
        code: '796',
        parent_code: '80',
        path_with_type: 'Huyện Tân Hưng, Tỉnh Long An'
    },
    {
        code: '797',
        parent_code: '80',
        path_with_type: 'Huyện Vĩnh Hưng, Tỉnh Long An'
    },
    {
        code: '798',
        parent_code: '80',
        path_with_type: 'Huyện Mộc Hóa, Tỉnh Long An'
    },
    {
        code: '799',
        parent_code: '80',
        path_with_type: 'Huyện Tân Thạnh, Tỉnh Long An'
    },
    {
        code: '800',
        parent_code: '80',
        path_with_type: 'Huyện Thạnh Hóa, Tỉnh Long An'
    },
    {
        code: '801',
        parent_code: '80',
        path_with_type: 'Huyện Đức Huệ, Tỉnh Long An'
    },
    {
        code: '802',
        parent_code: '80',
        path_with_type: 'Huyện Đức Hòa, Tỉnh Long An'
    },
    {
        code: '803',
        parent_code: '80',
        path_with_type: 'Huyện Bến Lức, Tỉnh Long An'
    },
    {
        code: '804',
        parent_code: '80',
        path_with_type: 'Huyện Thủ Thừa, Tỉnh Long An'
    },
    {
        code: '805',
        parent_code: '80',
        path_with_type: 'Huyện Tân Trụ, Tỉnh Long An'
    },
    {
        code: '806',
        parent_code: '80',
        path_with_type: 'Huyện Cần Đước, Tỉnh Long An'
    },
    {
        code: '807',
        parent_code: '80',
        path_with_type: 'Huyện Cần Giuộc, Tỉnh Long An'
    },
    {
        code: '808',
        parent_code: '80',
        path_with_type: 'Huyện Châu Thành, Tỉnh Long An'
    },
    {
        code: '815',
        parent_code: '82',
        path_with_type: 'Thành phố Mỹ Tho, Tỉnh Tiền Giang'
    },
    {
        code: '816',
        parent_code: '82',
        path_with_type: 'Thị xã Gò Công, Tỉnh Tiền Giang'
    },
    {
        code: '817',
        parent_code: '82',
        path_with_type: 'Thị xã Cai Lậy, Tỉnh Tiền Giang'
    },
    {
        code: '818',
        parent_code: '82',
        path_with_type: 'Huyện Tân Phước, Tỉnh Tiền Giang'
    },
    {
        code: '819',
        parent_code: '82',
        path_with_type: 'Huyện Cái Bè, Tỉnh Tiền Giang'
    },
    {
        code: '820',
        parent_code: '82',
        path_with_type: 'Huyện Cai Lậy, Tỉnh Tiền Giang'
    },
    {
        code: '821',
        parent_code: '82',
        path_with_type: 'Huyện Châu Thành, Tỉnh Tiền Giang'
    },
    {
        code: '822',
        parent_code: '82',
        path_with_type: 'Huyện Chợ Gạo, Tỉnh Tiền Giang'
    },
    {
        code: '823',
        parent_code: '82',
        path_with_type: 'Huyện Gò Công Tây, Tỉnh Tiền Giang'
    },
    {
        code: '824',
        parent_code: '82',
        path_with_type: 'Huyện Gò Công Đông, Tỉnh Tiền Giang'
    },
    {
        code: '825',
        parent_code: '82',
        path_with_type: 'Huyện Tân Phú Đông, Tỉnh Tiền Giang'
    },
    {
        code: '829',
        parent_code: '83',
        path_with_type: 'Thành phố Bến Tre, Tỉnh Bến Tre'
    },
    {
        code: '831',
        parent_code: '83',
        path_with_type: 'Huyện Châu Thành, Tỉnh Bến Tre'
    },
    {
        code: '832',
        parent_code: '83',
        path_with_type: 'Huyện Chợ Lách, Tỉnh Bến Tre'
    },
    {
        code: '833',
        parent_code: '83',
        path_with_type: 'Huyện Mỏ Cày Nam, Tỉnh Bến Tre'
    },
    {
        code: '834',
        parent_code: '83',
        path_with_type: 'Huyện Giồng Trôm, Tỉnh Bến Tre'
    },
    {
        code: '835',
        parent_code: '83',
        path_with_type: 'Huyện Bình Đại, Tỉnh Bến Tre'
    },
    {
        code: '836',
        parent_code: '83',
        path_with_type: 'Huyện Ba Tri, Tỉnh Bến Tre'
    },
    {
        code: '837',
        parent_code: '83',
        path_with_type: 'Huyện Thạnh Phú, Tỉnh Bến Tre'
    },
    {
        code: '838',
        parent_code: '83',
        path_with_type: 'Huyện Mỏ Cày Bắc, Tỉnh Bến Tre'
    },
    {
        code: '842',
        parent_code: '84',
        path_with_type: 'Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        code: '844',
        parent_code: '84',
        path_with_type: 'Huyện Càng Long, Tỉnh Trà Vinh'
    },
    {
        code: '845',
        parent_code: '84',
        path_with_type: 'Huyện Cầu Kè, Tỉnh Trà Vinh'
    },
    {
        code: '846',
        parent_code: '84',
        path_with_type: 'Huyện Tiểu Cần, Tỉnh Trà Vinh'
    },
    {
        code: '847',
        parent_code: '84',
        path_with_type: 'Huyện Châu Thành, Tỉnh Trà Vinh'
    },
    {
        code: '848',
        parent_code: '84',
        path_with_type: 'Huyện Cầu Ngang, Tỉnh Trà Vinh'
    },
    {
        code: '849',
        parent_code: '84',
        path_with_type: 'Huyện Trà Cú, Tỉnh Trà Vinh'
    },
    {
        code: '850',
        parent_code: '84',
        path_with_type: 'Huyện Duyên Hải, Tỉnh Trà Vinh'
    },
    {
        code: '851',
        parent_code: '84',
        path_with_type: 'Thị xã Duyên Hải, Tỉnh Trà Vinh'
    },
    {
        code: '855',
        parent_code: '86',
        path_with_type: 'Thành phố Vĩnh Long, Tỉnh Vĩnh Long'
    },
    {
        code: '857',
        parent_code: '86',
        path_with_type: 'Huyện Long Hồ, Tỉnh Vĩnh Long'
    },
    {
        code: '858',
        parent_code: '86',
        path_with_type: 'Huyện Mang Thít, Tỉnh Vĩnh Long'
    },
    {
        code: '859',
        parent_code: '86',
        path_with_type: 'Huyện  Vũng Liêm, Tỉnh Vĩnh Long'
    },
    {
        code: '860',
        parent_code: '86',
        path_with_type: 'Huyện Tam Bình, Tỉnh Vĩnh Long'
    },
    {
        code: '861',
        parent_code: '86',
        path_with_type: 'Thị xã Bình Minh, Tỉnh Vĩnh Long'
    },
    {
        code: '862',
        parent_code: '86',
        path_with_type: 'Huyện Trà Ôn, Tỉnh Vĩnh Long'
    },
    {
        code: '863',
        parent_code: '86',
        path_with_type: 'Huyện Bình Tân, Tỉnh Vĩnh Long'
    },
    {
        code: '866',
        parent_code: '87',
        path_with_type: 'Thành phố Cao Lãnh, Tỉnh Đồng Tháp'
    },
    {
        code: '867',
        parent_code: '87',
        path_with_type: 'Thành phố Sa Đéc, Tỉnh Đồng Tháp'
    },
    {
        code: '868',
        parent_code: '87',
        path_with_type: 'Thành phố Hồng Ngự, Tỉnh Đồng Tháp'
    },
    {
        code: '869',
        parent_code: '87',
        path_with_type: 'Huyện Tân Hồng, Tỉnh Đồng Tháp'
    },
    {
        code: '870',
        parent_code: '87',
        path_with_type: 'Huyện Hồng Ngự, Tỉnh Đồng Tháp'
    },
    {
        code: '871',
        parent_code: '87',
        path_with_type: 'Huyện Tam Nông, Tỉnh Đồng Tháp'
    },
    {
        code: '872',
        parent_code: '87',
        path_with_type: 'Huyện Tháp Mười, Tỉnh Đồng Tháp'
    },
    {
        code: '873',
        parent_code: '87',
        path_with_type: 'Huyện Cao Lãnh, Tỉnh Đồng Tháp'
    },
    {
        code: '874',
        parent_code: '87',
        path_with_type: 'Huyện Thanh Bình, Tỉnh Đồng Tháp'
    },
    {
        code: '875',
        parent_code: '87',
        path_with_type: 'Huyện Lấp Vò, Tỉnh Đồng Tháp'
    },
    {
        code: '876',
        parent_code: '87',
        path_with_type: 'Huyện Lai Vung, Tỉnh Đồng Tháp'
    },
    {
        code: '877',
        parent_code: '87',
        path_with_type: 'Huyện Châu Thành, Tỉnh Đồng Tháp'
    },
    {
        code: '883',
        parent_code: '89',
        path_with_type: 'Thành phố Long Xuyên, Tỉnh An Giang'
    },
    {
        code: '884',
        parent_code: '89',
        path_with_type: 'Thành phố Châu Đốc, Tỉnh An Giang'
    },
    {
        code: '886',
        parent_code: '89',
        path_with_type: 'Huyện An Phú, Tỉnh An Giang'
    },
    {
        code: '887',
        parent_code: '89',
        path_with_type: 'Thị xã Tân Châu, Tỉnh An Giang'
    },
    {
        code: '888',
        parent_code: '89',
        path_with_type: 'Huyện Phú Tân, Tỉnh An Giang'
    },
    {
        code: '889',
        parent_code: '89',
        path_with_type: 'Huyện Châu Phú, Tỉnh An Giang'
    },
    {
        code: '890',
        parent_code: '89',
        path_with_type: 'Thị xã Tịnh Biên, Tỉnh An Giang'
    },
    {
        code: '891',
        parent_code: '89',
        path_with_type: 'Huyện Tri Tôn, Tỉnh An Giang'
    },
    {
        code: '892',
        parent_code: '89',
        path_with_type: 'Huyện Châu Thành, Tỉnh An Giang'
    },
    {
        code: '893',
        parent_code: '89',
        path_with_type: 'Huyện Chợ Mới, Tỉnh An Giang'
    },
    {
        code: '894',
        parent_code: '89',
        path_with_type: 'Huyện Thoại Sơn, Tỉnh An Giang'
    },
    {
        code: '899',
        parent_code: '91',
        path_with_type: 'Thành phố Rạch Giá, Tỉnh Kiên Giang'
    },
    {
        code: '900',
        parent_code: '91',
        path_with_type: 'Thành phố Hà Tiên, Tỉnh Kiên Giang'
    },
    {
        code: '902',
        parent_code: '91',
        path_with_type: 'Huyện Kiên Lương, Tỉnh Kiên Giang'
    },
    {
        code: '903',
        parent_code: '91',
        path_with_type: 'Huyện Hòn Đất, Tỉnh Kiên Giang'
    },
    {
        code: '904',
        parent_code: '91',
        path_with_type: 'Huyện Tân Hiệp, Tỉnh Kiên Giang'
    },
    {
        code: '905',
        parent_code: '91',
        path_with_type: 'Huyện Châu Thành, Tỉnh Kiên Giang'
    },
    {
        code: '906',
        parent_code: '91',
        path_with_type: 'Huyện Giồng Riềng, Tỉnh Kiên Giang'
    },
    {
        code: '907',
        parent_code: '91',
        path_with_type: 'Huyện Gò Quao, Tỉnh Kiên Giang'
    },
    {
        code: '908',
        parent_code: '91',
        path_with_type: 'Huyện An Biên, Tỉnh Kiên Giang'
    },
    {
        code: '909',
        parent_code: '91',
        path_with_type: 'Huyện An Minh, Tỉnh Kiên Giang'
    },
    {
        code: '910',
        parent_code: '91',
        path_with_type: 'Huyện Vĩnh Thuận, Tỉnh Kiên Giang'
    },
    {
        code: '911',
        parent_code: '91',
        path_with_type: 'Thành phố Phú Quốc, Tỉnh Kiên Giang'
    },
    {
        code: '912',
        parent_code: '91',
        path_with_type: 'Huyện Kiên Hải, Tỉnh Kiên Giang'
    },
    {
        code: '913',
        parent_code: '91',
        path_with_type: 'Huyện U Minh Thượng, Tỉnh Kiên Giang'
    },
    {
        code: '914',
        parent_code: '91',
        path_with_type: 'Huyện Giang Thành, Tỉnh Kiên Giang'
    },
    {
        code: '916',
        parent_code: '92',
        path_with_type: 'Quận Ninh Kiều, Thành phố Cần Thơ'
    },
    {
        code: '917',
        parent_code: '92',
        path_with_type: 'Quận Ô Môn, Thành phố Cần Thơ'
    },
    {
        code: '918',
        parent_code: '92',
        path_with_type: 'Quận Bình Thuỷ, Thành phố Cần Thơ'
    },
    {
        code: '919',
        parent_code: '92',
        path_with_type: 'Quận Cái Răng, Thành phố Cần Thơ'
    },
    {
        code: '923',
        parent_code: '92',
        path_with_type: 'Quận Thốt Nốt, Thành phố Cần Thơ'
    },
    {
        code: '924',
        parent_code: '92',
        path_with_type: 'Huyện Vĩnh Thạnh, Thành phố Cần Thơ'
    },
    {
        code: '925',
        parent_code: '92',
        path_with_type: 'Huyện Cờ Đỏ, Thành phố Cần Thơ'
    },
    {
        code: '926',
        parent_code: '92',
        path_with_type: 'Huyện Phong Điền, Thành phố Cần Thơ'
    },
    {
        code: '927',
        parent_code: '92',
        path_with_type: 'Huyện Thới Lai, Thành phố Cần Thơ'
    },
    {
        code: '930',
        parent_code: '93',
        path_with_type: 'Thành phố Vị Thanh, Tỉnh Hậu Giang'
    },
    {
        code: '931',
        parent_code: '93',
        path_with_type: 'Thành phố Ngã Bảy, Tỉnh Hậu Giang'
    },
    {
        code: '932',
        parent_code: '93',
        path_with_type: 'Huyện Châu Thành A, Tỉnh Hậu Giang'
    },
    {
        code: '933',
        parent_code: '93',
        path_with_type: 'Huyện Châu Thành, Tỉnh Hậu Giang'
    },
    {
        code: '934',
        parent_code: '93',
        path_with_type: 'Huyện Phụng Hiệp, Tỉnh Hậu Giang'
    },
    {
        code: '935',
        parent_code: '93',
        path_with_type: 'Huyện Vị Thuỷ, Tỉnh Hậu Giang'
    },
    {
        code: '936',
        parent_code: '93',
        path_with_type: 'Huyện Long Mỹ, Tỉnh Hậu Giang'
    },
    {
        code: '937',
        parent_code: '93',
        path_with_type: 'Thị xã Long Mỹ, Tỉnh Hậu Giang'
    },
    {
        code: '941',
        parent_code: '94',
        path_with_type: 'Thành phố Sóc Trăng, Tỉnh Sóc Trăng'
    },
    {
        code: '942',
        parent_code: '94',
        path_with_type: 'Huyện Châu Thành, Tỉnh Sóc Trăng'
    },
    {
        code: '943',
        parent_code: '94',
        path_with_type: 'Huyện Kế Sách, Tỉnh Sóc Trăng'
    },
    {
        code: '944',
        parent_code: '94',
        path_with_type: 'Huyện Mỹ Tú, Tỉnh Sóc Trăng'
    },
    {
        code: '945',
        parent_code: '94',
        path_with_type: 'Huyện Cù Lao Dung, Tỉnh Sóc Trăng'
    },
    {
        code: '946',
        parent_code: '94',
        path_with_type: 'Huyện Long Phú, Tỉnh Sóc Trăng'
    },
    {
        code: '947',
        parent_code: '94',
        path_with_type: 'Huyện Mỹ Xuyên, Tỉnh Sóc Trăng'
    },
    {
        code: '948',
        parent_code: '94',
        path_with_type: 'Thị xã Ngã Năm, Tỉnh Sóc Trăng'
    },
    {
        code: '949',
        parent_code: '94',
        path_with_type: 'Huyện Thạnh Trị, Tỉnh Sóc Trăng'
    },
    {
        code: '950',
        parent_code: '94',
        path_with_type: 'Thị xã Vĩnh Châu, Tỉnh Sóc Trăng'
    },
    {
        code: '951',
        parent_code: '94',
        path_with_type: 'Huyện Trần Đề, Tỉnh Sóc Trăng'
    },
    {
        code: '954',
        parent_code: '95',
        path_with_type: 'Thành phố Bạc Liêu, Tỉnh Bạc Liêu'
    },
    {
        code: '956',
        parent_code: '95',
        path_with_type: 'Huyện Hồng Dân, Tỉnh Bạc Liêu'
    },
    {
        code: '957',
        parent_code: '95',
        path_with_type: 'Huyện Phước Long, Tỉnh Bạc Liêu'
    },
    {
        code: '958',
        parent_code: '95',
        path_with_type: 'Huyện Vĩnh Lợi, Tỉnh Bạc Liêu'
    },
    {
        code: '959',
        parent_code: '95',
        path_with_type: 'Thị xã Giá Rai, Tỉnh Bạc Liêu'
    },
    {
        code: '960',
        parent_code: '95',
        path_with_type: 'Huyện Đông Hải, Tỉnh Bạc Liêu'
    },
    {
        code: '961',
        parent_code: '95',
        path_with_type: 'Huyện Hoà Bình, Tỉnh Bạc Liêu'
    },
    {
        code: '964',
        parent_code: '96',
        path_with_type: 'Thành phố Cà Mau, Tỉnh Cà Mau'
    },
    {
        code: '966',
        parent_code: '96',
        path_with_type: 'Huyện U Minh, Tỉnh Cà Mau'
    },
    {
        code: '967',
        parent_code: '96',
        path_with_type: 'Huyện Thới Bình, Tỉnh Cà Mau'
    },
    {
        code: '968',
        parent_code: '96',
        path_with_type: 'Huyện Trần Văn Thời, Tỉnh Cà Mau'
    },
    {
        code: '969',
        parent_code: '96',
        path_with_type: 'Huyện Cái Nước, Tỉnh Cà Mau'
    },
    {
        code: '970',
        parent_code: '96',
        path_with_type: 'Huyện Đầm Dơi, Tỉnh Cà Mau'
    },
    {
        code: '971',
        parent_code: '96',
        path_with_type: 'Huyện Năm Căn, Tỉnh Cà Mau'
    },
    {
        code: '972',
        parent_code: '96',
        path_with_type: 'Huyện Phú Tân, Tỉnh Cà Mau'
    },
    {
        code: '973',
        parent_code: '96',
        path_with_type: 'Huyện Ngọc Hiển, Tỉnh Cà Mau'
    }
]

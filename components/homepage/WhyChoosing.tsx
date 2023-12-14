import React from 'react'
import { FaCheck, FaRegGrinStars, FaSortAlphaDown } from 'react-icons/fa'
import { TbPigMoney } from 'react-icons/tb'
import ListItem from './ListItem'

const choosingList = [
    {
        id: 1,
        icon: TbPigMoney,
        title: "Giá tốt",
        content: "Chúng tôi đảm bảo giá thành dịch vụ của chúng tôi là tốt nhất thị trường."
    },
    {
        id: 2,
        icon: FaCheck,
        title: "Uy tín",
        content: "Chúng tôi lấy chữ tín làm giá trị cốt lõi trong việc kinh doanh"
    },
    {
        id: 3,
        icon: FaSortAlphaDown,
        title: "Tận tâm",
        content: "Phục vụ tận tâm tư vấn hổ trợ, quý khách hàng từ A đến Z."
    },
    {
        id: 4,
        icon: FaRegGrinStars,
        title: "Nhân sự",
        content: "Với đội ngũ nhân sự giàu kinh nghiệm trong ngành logistics và vận tải."
    },
]

const WhyChoosing = () => {
  return (
    <div className="mx-auto lg:px-20 sm:px-2 px-4 py-5 md:py-10 bg-slate-100">
      <h1 className="font-bold text-2xl md:text-3xl text-center mb-3 md:mb-8">
        Sự lựa chọn hoàn hảo
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 lg:gap-10 w-full">
      {choosingList.map((item) => {
          return <ListItem key={item.id} icon={item.icon} title={item.title} content={item.content}/>;
        })}
      </div>
    </div>
  )
}

export default WhyChoosing
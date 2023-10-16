'use client'
import { CustomerServiceOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';
import { FaFacebookMessenger } from 'react-icons/fa6';
import { SiZalo } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';

const FloatAction = () => {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton icon={<BsFacebook className="text-[#0866ff]"/>} />

      <FloatButton icon={<FaFacebookMessenger className="text-[#009ef7]"/>} />
      <FloatButton icon={<SiZalo className="text-[#0065f7]"/>} />

    </FloatButton.Group>
  )
}

export default FloatAction
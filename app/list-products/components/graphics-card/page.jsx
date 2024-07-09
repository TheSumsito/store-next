'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DATA_NVIDIA = [
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
    {
      id: 1, 
      title: 'TARJETA DE VIDEO GIGABYTE GEFORCE RTX 4060 EAGLE OC 8G 3 FAN', 
      image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/gv-n4060eagle-oc-8gd_1-831e3329-a202-4362-957a-93785d5a11d7-300x300.jpg',
      category: 'TARJETAS DE VIDEO', 
      price: 397990 
    },
];

const DATA_AMD = [
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
  {
    id: 1, 
    title: 'TARJETA DE VIDEO ASUS DUAL RADEON RX7600 V2 OC 8GB GDDR6', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/8-52e93424-1b5b-496a-8970-829bbd9edea8-300x300.png',
    category: 'TARJETAS DE VIDEO', 
    price: 324990 
  },
]

export default function graphics_cards(params) {
  const { 
    name: filterNames,
  } = params.searchParams;

  const [dataModule, setDataModule] = useState([]); 

  const filterDataModule = () => {
    if (['nvidia'].includes(filterNames)) return DATA_NVIDIA;
    else if (['amd'].includes(filterNames)) return DATA_AMD;
    return [];
  };

  useEffect(() => {
    setDataModule(filterDataModule());
  }, [filterNames]); 
  return (
    <div className="container">
      <div className="cont-menu">
        <Header />
      </div>
      <div className="cont-elements">
        {
          dataModule.map((item) => {
            return (
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src={item.image}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <p className='title'>{item.title}</p>
                <p className='category'>{item.category}</p>
                <p className='category'>{item.price}</p>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
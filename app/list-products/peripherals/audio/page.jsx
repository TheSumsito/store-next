'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DATA_EARPHONES = [
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'AUDÍFONOS FANTECH MH90 SONATA BLACK EDITION', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-27t125920448-0bb1548a-c2ef-45bb-a962-273b1e8b9f1b-300x300.jpg',
    category: 'AUDIFONOS GAMER', 
    price: 24990 
  },
];

const DATA_MICROPHONES = [
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
  {
    id: 1, 
    title: 'MICROFONO GAMER HYPERX DUOCAST RGB USB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2022/11/1-bcdbcd21-dacb-40c8-82b5-360d48a5706c-300x300.png',
    category: 'MICROFONOS', 
    price: 24990 
  },
]

export default function audio(params) {
  const { 
    name: filterNames,
  } = params.searchParams;

  const [dataModule, setDataModule] = useState([]); 

  const filterDataModule = () => {
    if (['audifonos'].includes(filterNames)) return DATA_EARPHONES;
    else if (['microfonos'].includes(filterNames)) return DATA_MICROPHONES;
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
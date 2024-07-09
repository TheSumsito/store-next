'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DATA_LIQUID = [
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
  {
    id: 1, 
    title: 'REFRIGERACIÓN LÍQUIDA AIO NZXT KRAKEN ELITE RGB 240MM BLANCO', 
    category: 'REFRIGERACIÓN LIQUIDA', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/07/1-15f10824-c350-4ba7-9a91-9b24af96f612-300x300.jpg',
    price: 249990 
  },
]

const DATA_DISSIPANT = [
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
  {
    id: 1, 
    title: 'DISIPADOR DE CPU NZXT T120 RGB BLACK 120MM', 
    category: 'COOLER PARA CPU', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/02/cooler_t120-rgb_air-cooler_black_front-rgb_png-1d901f38-476d-418a-911a-ab8c3d6155c2-300x300.png',
    price: 68990 
  },
]

export default function cpu_cooling(params) {
  const { 
    name: filterNames,
  } = params.searchParams;

  const [dataModule, setDataModule] = useState([]); 

  const filterDataModule = () => {
    if (['disipador'].includes(filterNames)) return DATA_DISSIPANT;
    else if (['liquida'].includes(filterNames)) return DATA_LIQUID;
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
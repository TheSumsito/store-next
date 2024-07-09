'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/public/components/header';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DATA_INTEL = [
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
  {
    id: 1, 
    title: 'PROCESADOR INTEL CORE I5 9400F 2.9 GHZ 9MB LGA 1151', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2021/05/6110pa-yujl_ac_sl1000_-1fe405bc-4f5c-4172-b7e4-d9ed24752be4-300x296.jpg',
    category: 'PROCESADORES', 
    price: 198990 
  },
]

const DATA_AMD = [
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
  {
    id: 1, 
    title: 'PROCESADOR AMD RYZEN 7 5700 8 NUCLEOS 3.7GHZ AM4', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/proyecto-nuevo-2024-06-12t100423239-c7293bd8-fb5d-432b-8293-8fbc10fa1383-300x300.jpg',
    category: 'PROCESADORES', 
    price: 195990 
  },
]

export default function processors(params) {
  const { 
    name: filterNames,
  } = params.searchParams;

  const [dataModule, setDataModule] = useState([]); 

  const filterDataModule = () => {
    if (['intel'].includes(filterNames)) return DATA_INTEL;
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
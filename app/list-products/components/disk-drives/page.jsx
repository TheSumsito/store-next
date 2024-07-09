'use client';

import React, { useEffect, useState } from 'react';
import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const DATA_SSD = [
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DE ESTADO SÓLIDO KINGSTON KC3000 DE 4TB NVME PCIE 4.0', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/kkc3000_4-fa89396c-5e9b-4983-9a0d-8a494b5a0b2e-300x300.jpg',
    category: 'DISCOS SSD', 
    price: 380990 
  },
]

const DATA_HDD = [
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
  {
    id: 1, 
    title: 'DISCO DURO HDD SEAGATE SKYHAWK SURVEILLANCE 6TB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/whatsapp-image-2024-07-05-at-102931-am-1-9a725e55-06c3-4861-a608-74d9e423664b-300x300.jpg',
    category: 'DISCOS DUROS', 
    price: 380990 
  },
]

export default function disk_drives(params) {
  const { 
    name: filterNames,
  } = params.searchParams;

  const [dataModule, setDataModule] = useState([]); 

  const filterDataModule = () => {
    if (['hdd'].includes(filterNames)) return DATA_HDD;
    else if (['ssd'].includes(filterNames)) return DATA_SSD;
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
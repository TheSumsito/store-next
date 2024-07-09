import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
  {
    id: 1, 
    title: 'MEMORIA RAM KINGSTON FURY RENEGADE RGBWHITE 16GBDDR5 6000MHZ', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2023/11/fury16gb_3-949bd37b-4cbd-4383-b9ee-0424c281a761-300x300.jpg',
    category: 'MEMORIAS RAM', 
    price: 76990 
  },
]

export default function memories_ram() {
  return (
    <div className="container">
      <div className="cont-menu">
        <Header />
      </div>
      <div className="cont-elements">
        {
          data.map((item) => {
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
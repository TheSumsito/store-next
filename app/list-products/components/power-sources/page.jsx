import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
  {
    id: 1, 
    title: 'FUENTE DE PODER KRONOS 750W, CERTIFICADA 80 PLUS BRONZE ATX', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/07/new-project-2024-07-05t162555260-ab04f27c-6677-4825-9072-2b47ba6b658d-300x300.jpg',
    category: 'FUENTES DE PODER', 
    price: 60990 
  },
]

export default function power_sources() {
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
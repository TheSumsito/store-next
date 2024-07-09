import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
  {
    id: 1, 
    title: 'PLACA MADRE MSI X670E GAMING PLUS WIFI', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-10t134454605-ad6c02de-6eff-48a3-9a47-3e4246dd1dc6-c278200d-377e-440c-b849-b3bb02354fab-300x300.jpg',
    category: 'PLACAS MADRES', 
    price: 325990 
  },
]

export default function motherboards() {
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
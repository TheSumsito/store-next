import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
  {
    id: 1, 
    title: 'ADAPTADOR D-LINK PCI GIGABIT ETHERNET',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/03/dge-528t_1-33565bf3-ae1c-4036-98e5-57b1b4e73585-300x300.jpg', 
    category: 'ACCESORIOS COMPONENTES', 
    price: 14990 
  },
]

export default function pc_accesories() {
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
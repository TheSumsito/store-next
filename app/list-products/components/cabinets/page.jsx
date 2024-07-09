import Header from "@/public/components/header";
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
  {
    id: 1, 
    title: 'GABINETE NZXT H6 FLOW ATX DUALCHAMBER CASE BLANCO', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/blanco1-4e4cdea2-341c-45a7-8236-8857e906177e-300x300.jpg',
    category: 'GABINETES', 
    price: 139990 
  },
]

export default function cabinets() {
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
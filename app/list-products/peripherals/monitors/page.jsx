import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
  {
    id: 1, 
    title: 'MONITOR GAMER LG ULTRAGEAR 27GS60F-B 27" 180HZ, 1MS, IPS',
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-11t122920849-3d201bd5-c728-4ab9-be29-5b41be1ceb86-300x300.jpg', 
    category: 'MONITORES GAMER', 
    price: 185990 
  },
]

export default function monitors() {
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
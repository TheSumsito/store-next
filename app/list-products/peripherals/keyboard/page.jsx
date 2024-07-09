import Header from "@/public/components/header"
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
  {
    id: 1, 
    title: 'TECLADO MECÁNICO REDRAGON HORUS FS K619SP BLANCO SW RED RGB', 
    image: 'https://backend.dust2.gg/wp-content/uploads/2024/06/new-project-2024-06-14t155222669-52e34a8d-5bb6-4fdc-9213-d01ada91eda2-300x300.jpg',
    category: 'TECLADOS GAMER', 
    price: 69990 
  },
]

export default function keyboard() {
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
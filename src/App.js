//Assets
import Logo from './assets/png/evaluatest-color.png';
import HeartIcon from "./assets/svg/heart-icon.svg";
import LogoBrive from "./assets/png/photo.png";

//Styles
import './Apps.scss';

//Components
import { Layout, Menu, Input, Row, Col, Switch, Space, DatePicker, TimePicker, Button} from 'antd';
import { 
  UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined, 
  StarOutlined, 
  FolderOutlined,
  HomeOutlined,
  SearchOutlined,
  HeartFilled,
  CaretDownFilled
 } from '@ant-design/icons';

import CardInfo from "./components/CardInfo";

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;


  return (
    <Layout>
    <Header className="header">
      <div className="header__container">
        <img src={Logo} className="logo"/>
        <div className="header__info-user">
          <HeartFilled className="heart-icon"/>
          <div className="image-container">
            <img src="https://ih1.redbubble.net/image.855384926.9321/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" 
              alt="User Image"
              className="user-image"
              />
          </div>
          <p>Juan Carlos</p>
          <CaretDownFilled className="header__arrow-icon"/>
        </div>
      </div>
    </Header>
    <Layout>
      <Sider width={300} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100vh', borderRight: 0 }}
        >
          <div className="sider__header">
            <div className="sider__header-container">
              <img src={LogoBrive} className="sider__logo"/>
              <h2 className="sider__title">Brivé Soluciones</h2>
            </div>
            <Input placeholder="Buscar Carpeta" prefix={<SearchOutlined />}/>
          </div>
          <div className="sider__section">
            <div className="sider__section-title">
              <StarOutlined />
              <p>Favorites</p>
            </div>

          </div>
          <SubMenu key="favorites" icon={<FolderOutlined />} title="Favoritos">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          <div className="sider__section">
            <div className="sider__section-title">
              <HomeOutlined />
              <p>Mi organización</p>
            </div>
          </div>
          <SubMenu key="zone-center" icon={<FolderOutlined />} title="Zona Centro">
            <SubMenu key="zone" icon={<FolderOutlined />} title="Anzures">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>

        <div className="container">
          <p className="container__title">Agenda entrevista con: <span className="container__title--bold">Jezreel Leyva Marcos</span> para el puesto: <span className="container__title--bold">Asesor Comercial</span> </p>
          <div className="content mb-4">
            <div className="content__header p-4">
            <Row justify="start">
              <Col span={16}>
                <p className="text-white mb-2">Lugar</p>
                <div className="d-flex align-items-center">
                  <Input placeholder="Oficinas centrales" />
                  <p className="text-white mb-0 ml-3">Videoentrevista</p>
                  <Switch checkedChildren="Sí" unCheckedChildren="No" className="ml-2"/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={7} className="mr-2">
                <p className="mb-2 mt-3 text-white">Día</p>
                <Space direction="vertical">
                  <DatePicker />
                </Space>
              </Col>
              <Col span={3} className="mr-2">
                <p className="mb-2 mt-3 text-white">Inicia</p>
                <Space direction="vertical">
                <TimePicker  />
                </Space>
              </Col>
              <Col span={3} className="mr-2">
                <p className="mb-2 mt-3 text-white">Termina</p>
                <Space direction="vertical">
                <TimePicker  />
                </Space>
              </Col>
              <Col span={8} className="mr-2 d-flex align-items-end">
                <div className="d-flex align-items-end schedule">
                  <p className="mb-0 text-white">(GMT - 5) Ciudad de México, Mex</p>
                </div>
              </Col>
            </Row>
              
            </div>
            <div className="content__body p-4">
              <Row>
              <CardInfo  role="candidato" image="https://ih1.redbubble.net/image.855384926.9321/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" name="Jezreel Leyva Marcos" email="jezreel@gmail.com" />
                <CardInfo  role="entrevistador" image="https://ih1.redbubble.net/image.855384926.9321/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" name="Jezreel Leyva Marcos" email="jezreel@gmail.com" />
              </Row>
            </div>
            <div className="content__footer justify-content-end p-4 d-flex align-items-center">
              <Button className="mt-3">Cancelar</Button>
              <Button type="primary" className="mt-3 ml-4">Agregar entrevista</Button>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;

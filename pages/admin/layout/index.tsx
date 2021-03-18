import Image from "next/image";
import styles from "./style.module.css";
import { Layout, Menu, Anchor } from "antd";
// import brand from "../../../Component/Admin/brand";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../../../Component/Admin/brand")
);

const { Link } = Anchor;

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Sider
        className='style-menu'
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className={styles.logo} />

        <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key='4' icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key='5' icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key='6' icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key='7' icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key='8' icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Header className={styles.sitebackground} style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, textAlign: "center" }}
          >
            <DynamicComponent />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Easy Commerce ©2021 Created by PyzaSoft
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Navbar;

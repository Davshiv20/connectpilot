import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { HomeOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { ROUTES } from '../../constants/routes';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '32px' }}>ConnectPilot</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={[
                        {
                            key: 'home',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: 'analytics',
                            icon: <BarChartOutlined />,
                            label: 'Analytics',
                        },
                        {
                            key: 'settings',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: '24px' }}>
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', minHeight: '80vh' }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                MoodTracker ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default MainLayout; 
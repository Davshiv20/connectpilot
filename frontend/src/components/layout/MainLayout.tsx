import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { HomeOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { ROUTES } from '../../constants/routes';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout className="min-h-screen">
            <Header className="flex items-center">
                <div className="text-white text-xl font-bold mr-8">MoodTracker</div>
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
            <Content className="p-6">
                <div className="bg-white p-6 rounded-lg min-h-[80vh]">
                    <Outlet />
                </div>
            </Content>
            <Footer className="text-center">
                MoodTracker ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default MainLayout; 
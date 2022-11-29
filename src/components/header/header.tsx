import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const OPTIONS = ["CATALOG", "NEWS", "BLOG"]

const { Header } = Layout;

const MenuHeader: React.FC = () => (
    <Layout>
        <Header style={{ display: 'flex', justifyContent: 'space-between', top: 0, zIndex: 1, width: '100vw' }}>
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={OPTIONS.map((site, index) => ({
                        key: site,
                        label: site,
                    }))}
                    style={{ width: 'fit-content' }}
                />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', top: 0, zIndex: 1, width: 'fit-content' }}>
                <Avatar size={64} icon={<UserOutlined />} style={{ padding: "10px", lineHeight: 'none' }} />
                <div>
                    <p style={{ color: 'white' }}>User: Name User</p>
                </div>
            </div> */}

        </Header>
    </Layout>
);

export default MenuHeader;
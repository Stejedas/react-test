import React from 'react';
import { Layout, Menu, } from 'antd';

const OPTIONS = ["CATALOG", "NEWS", "BLOG"]

const { Header } = Layout;

const MenuHeader: React.FC = () => (
    <Layout>

        <Header className="site-layout-sub-header-background" style={{ padding: 0, display: 'flex', justifyContent: 'center' }} >
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={OPTIONS.map((option, index) => ({
                    key: String(index + 1),
                    label: option
                }))}
                style={{width: "fit-content"}}
            />
            
        </Header>

    </Layout>
);

export default MenuHeader;
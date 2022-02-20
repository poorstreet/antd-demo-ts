import React, {Component} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Layout, Menu, Breadcrumb, Button,} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css'
import './Home.css';


const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

export default class Home extends Component {
    render() {
        return (<BrowserRouter>
            <Layout style={{display:'flex',flexDirection:'column',height:'100%'}}>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{flexGrow:1}}>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                                <Menu.Item key="1"><Link to="/1">工具1</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/2">工具2</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/3">工具3</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/4">工具4</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Routes>
                                <Route path="/1" element={<Button>1</Button>}/>
                                <Route path="/2" element={<Button>2</Button>}/>
                                <Route path="/3" element={<Button>5</Button>}/>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>);
    }
}

import React, {Component, ReactNode} from "react";
import {BrowserRouter, Link, Route, Routes, Outlet} from "react-router-dom";
import {Breadcrumb, Button, Layout, Menu,} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {MenuElement, menuList} from "../config/MenuConfig";

import 'antd/dist/antd.css'
import './Home.css';
import {routerList} from "../config/RouterConfig";


const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

interface HomeState {

    menuList: MenuElement[]
}

export default class Home extends Component<any, HomeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            menuList: menuList
        }
    }

    render() {
        //具体菜单
        let menuElements: any[] = [];
        for (let menuElement of menuList) {
            if (!menuElement.child) {
                menuElements.push(<SubMenu key={menuElement.id} icon={<UserOutlined/>}
                                           title={menuElement.title}>{menuElement.title}</SubMenu>);
            } else {
                let childMenuElements: any[] = [];
                for (let childMenu of menuElement.child) {
                    childMenuElements.push(<Menu.Item key={childMenu.id} icon={<UserOutlined/>}
                                                      title={childMenu.title}>{childMenu.title}</Menu.Item>);
                }
                menuElements.push(<SubMenu key={menuElement.id} icon={<UserOutlined/>}
                                           title={menuElement.title}>{childMenuElements}</SubMenu>);
            }
        }

        return (<Layout style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout style={{flexGrow: 1}}>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        {/*<SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                            {
                                this.state.routerList.map((r, index) => {
                                    return (<Menu.Item key={r.id}><Link to={r.path}>{r.title}</Link></Menu.Item>)
                                })
                            }
                        </SubMenu>*/menuElements}
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
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </Layout>);
    }
}

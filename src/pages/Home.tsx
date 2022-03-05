import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";
import {Breadcrumb, Layout, Menu,} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {MenuElement, menuList} from "../config/MenuConfig";

import 'antd/dist/antd.css'
import './Home.css';


const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

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
                    let target;
                    if (childMenu.target) {
                        target = <Menu.Item key={childMenu.id} icon={<UserOutlined/>}
                                            title={childMenu.title}> <Link
                            to={childMenu.target}>{childMenu.title}</Link></Menu.Item>
                    } else {
                        target = <Menu.Item key={childMenu.id} icon={<UserOutlined/>}
                                            title={childMenu.title}> {childMenu.title}</Menu.Item>;
                    }
                    childMenuElements.push(target);
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
                        {menuElements}
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
                        <Link to="/home/tool/1">工具1</Link>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </Layout>);
    }
}

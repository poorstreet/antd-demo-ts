import React, {Component, ReactNode} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Breadcrumb, Button, Layout, Menu,} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css'
import './Home.css';


const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

interface Router {
    id: string
    title: string;
    path: string;
    target: ReactNode
    child?: string[]
}

interface HomeState {
    routerList: Router[]
}

export default class Home extends Component<any, HomeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            routerList: [
                {
                    id: "1",
                    title: "工具1",
                    path: "/1",
                    target: <Button>1</Button>
                },
                {
                    id: "2",
                    title: "工具2",
                    path: "/2",
                    target: <Button>2</Button>
                },
                {
                    id: "3",
                    title: "工具3",
                    path: "/3",
                    target: <Button>3</Button>
                },
                {
                    id: "4",
                    title: "工具4",
                    path: "/4",
                    target: <Button>4</Button>
                }
            ]
        }
    }

    render() {
        //具体路由
        let routerElements: any[] = []
        for (let router of this.state.routerList) {
            routerElements.push(<Route path={router.path} element={router.target}/>)
        }
        return (<BrowserRouter>
            <Layout style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
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
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                                {
                                    this.state.routerList.map((r, index) => {
                                        return (<Menu.Item key={r.id}><Link to={r.path}>{r.title}</Link></Menu.Item>)
                                    })
                                }
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
                                {routerElements}
                                {/*<Route path="/1" element={<Button>1</Button>}/>
                                <Route path="/2" element={<Button>2</Button>}/>
                                <Route path="/3" element={<Button>5</Button>}/>*/}
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>);
    }
}

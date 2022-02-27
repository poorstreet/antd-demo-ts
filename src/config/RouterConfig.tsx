import {Button} from "antd";
import React, {ReactNode} from "react";
import Home from "../pages/Home";

export interface RouterElement {
    id: string,
    title: string,
    path: string,
    target?: ReactNode
    child?: RouterElement[]
    index?: boolean
}

const routerList: RouterElement[] = [{
    id: "home",
    title: "首页",
    path: "/home",
    target: <Home/>,
    child: [{
        id: "tool",
        title: "工具管理",
        path: "tool",
        child: [{
            id: "1",
            title: "工具1",
            path: "1",
            target: <Button>工具1</Button>
        }, {
            id: "2",
            title: "工具2",
            path: "2",
            target: <Button>工具2</Button>
        }]

    },
        {
            id: "user",
            title: "用户管理",
            path: "user",
            target: null,
            child: [{
                id: "user1",
                title: "用户管理",
                path: "1",
                target: <Button>用户管理</Button>
            },
                {
                    id: "user2",
                    title: "权限管理",
                    path: "2",
                    target: <Button>权限管理</Button>
                }]
        }]

}, {
    id: "home",
    title: "登录",
    path: "/login",
    target: <Button>登录</Button>
}];
export {routerList};

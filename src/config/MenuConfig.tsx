import React from "react";

export interface MenuElement {
    id: string,
    title: string,
    child?: MenuElement[]
    target?: string,
}

const menuList: MenuElement[] = [

    {
        id: "tool",
        title: "工具管理",
        child: [{
            id: "tool1",
            title: "工具1",
            target: "/home/tool/1"
        },
            {
                id: "tool2",
                title: "工具2",
                target: "/home/tool/2"
            }]
    },
    {
        id: "user",
        title: "用户管理",
        child: [{
            id: "user1",
            title: "用户管理",
            target: "/home/user/1"
        },
            {
                id: "user2",
                title: "权限管理",
                target: "/home/user/2"
            }]
    }

];
export {menuList};

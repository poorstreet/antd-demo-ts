import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store'
import {RouterElement, routerList} from "./config/RouterConfig";
import Login from "./pages/Login";
import {Button} from "antd";

function App() {
    //具体路由
    let routerElements: any[] = [];

    function handNestedRouter(router: RouterElement): any[] {
        let routerElements: any[] = [];
        if (!router.child) {
            routerElements.push(<Route key={router.id} path={router.path} element={router.target}/>);
        } else {
            let childRouterElements: any[] = [];
            for (let childRouter of router.child) {
                childRouterElements.push(handNestedRouter(childRouter));
            }
            routerElements.push(<Route key={router.id} path={router.path}
                                       element={router.target}>{childRouterElements}</Route>);
        }
        return routerElements;
    };

    function handNestedRouterTest(router: RouterElement): any[] {
        let routerElements: any[] = [];
        if (!router.child) {
            routerElements.push(<div key={router.id} className={router.path}/>);
        } else {
            let childRouterElements: any[] = [];
            for (let childRouter of router.child) {
                childRouterElements.push(handNestedRouterTest(childRouter));
            }
            routerElements.push(<div key={router.id} className={router.path}>{childRouterElements}</div>);
        }
        return routerElements;
    };
    for (let router of routerList) {
        // routerElements.push(handNestedRouterTest(router))
        routerElements.push(handNestedRouter(router))
    }
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {routerElements}
                    <Route key="13132" path="1" element={<Button> too1</Button>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

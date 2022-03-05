import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store'
import {RouterElement, routerList} from "./config/RouterConfig";

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

    for (let router of routerList) {
        routerElements.push(handNestedRouter(router))
    }
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {routerElements}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

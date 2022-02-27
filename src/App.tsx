import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store'
import {routerList} from "./config/RouterConfig";

function App() {
    //具体路由
    let routerElements: any[] = [];
    for (let router of routerList) {
        if (!router.child) {
            routerElements.push(<Route key={router.id} path={router.path} element={router.target}/>);
        } else {
            let childRouterElements: any[] = [];
            for (let childRouter of router.child) {
                childRouterElements.push(<Route key={router.id} path={childRouter.path} element={childRouter.target}/>);
            }
            routerElements.push(<Route key={router.id} path={router.path}
                                       element={router.target}>childRouterElements</Route>);
        }
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

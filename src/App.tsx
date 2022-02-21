import React from 'react';
import {Provider} from 'react-redux';

import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <div className="App">
                        <Route path="/" element={Home}/>
                    </div>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {persistGate} from 'redux-persist/integration/react';

import {store , persistor} from "./redux/store";

import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <persistGate persitor={persistor}>
                <App />
            </persistGate>
        </BrowserRouter>
    </Provider>
        ,
    document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
// 引入路由
import {BrowserRouter,Route} from "react-router-dom"
import App from "./layouts/App";
//引入通用样式
import './assets/css/base.css';
import './assets/js/font'
import "../src/plugins/axios"
ReactDOM.render(
    // 必须有BrowserRouter或者hashRouter两种路由对象的一种，否则出错
<BrowserRouter>
<Route component={App}></Route>
{/* <App/> */}
</BrowserRouter>, document.getElementById('root'));




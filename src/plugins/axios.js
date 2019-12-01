import React from 'react';
import axios from 'axios';
import pubsub from "pubsub-js"
//添加一个请求的拦截
axios.interceptors.request.use(function (config) {
  //发布
  pubsub.publish("UPDATE_LOADING",true);
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加一个响应的拦截
axios.interceptors.response.use(function (response) {
  pubsub.publish('UPDATE_LOADING',false);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


React.axios = axios;//实例属性
// window.axios = axios; //全局API

export default axios;
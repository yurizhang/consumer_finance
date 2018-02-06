import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' 
import router from '../../router/router.js';
//import TrendFun from "../../plugs/function";
Vue.config.productionTip = false;

// const trendFun=new TrendFun();
// let token=trendFun.getUrlParam('token');
// trendFun.setCookie('token',token, 1);
// //console.log(token);

//添加响应拦截器
axios.interceptors.response.use (function(response){
  //对响应数据做些事
   //console.log("首页")
   //console.log(response);
   if(response.data.errorCode==500){
       //console.log(response.data.data.redirectUrl+"http://www.tuniu.org:8090/module/index.html");
       location.href=response.data.data.redirectUrl+"http://www.tuniu.org:8090/module/index.html";
       return false;
   }
    
   return response;
},function(error){
  //请求错误时做些事
   console.log("response error:");
   console.log(error);
   //return Promise.reject(error);
});


//Vant UI  全局使用
import { Button, Field, NavBar,Loading, Checkbox, CheckboxGroup, Panel,  Cell, CellGroup, Tab, Tabs, Actionsheet,Uploader  } from 'vant';  //Field文本框 
Vue.use(Button);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Loading);

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

//import { Cell, CellGroup } from 'vant';  //列表
Vue.use(Cell);
Vue.use( CellGroup);

//import { Tab, Tabs } from 'vant';   //tabs
Vue.use(Tab);
Vue.use(Tabs);

//import { Actionsheet } from 'vant'; //从下向上浮动层
//Vue.component(Actionsheet.name, Actionsheet);
Vue.use(Actionsheet);
Vue.use(Panel);

Vue.use(Uploader);

import './reset.css'
import './index.css'
import './banklist.css'
import './coupon.css'
import './upload.css'
import './vant_reset.css'

import 'vant/lib/vant-css/icon-local.css';  //加载本地的字体文件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from '../../router/router.js';

Vue.config.productionTip = false;



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
import './vant_reset.css'

import 'vant/lib/vant-css/icon-local.css';  //加载本地的字体文件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import router from '../../router/router.js';

Vue.config.productionTip = false;



//Vant UI  全局使用
import { Button, Field, NavBar,Loading, Checkbox, CheckboxGroup } from 'vant';  //Field文本框 
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(NavBar.name, NavBar);
Vue.component(Loading.name, Loading);

Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxGroup.name, CheckboxGroup);

import { Cell, CellGroup } from 'vant';  //列表
Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);

import { Tab, Tabs } from 'vant';   //tabs
Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);

import { Actionsheet } from 'vant'; //从下向上浮动层
//Vue.component(Actionsheet.name, Actionsheet);
Vue.use(Actionsheet);

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

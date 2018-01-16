import 'babel-polyfill';
import Vue from 'vue'
import App from './App'

import './reset.css'

import { Button, Field, NavBar, CellGroup} from 'vant';  //Field文本框 
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(NavBar.name, NavBar);
Vue.component(CellGroup.name, CellGroup);

new Vue({
  el: '#app',
  template: '<App/>',  //<App/>
  components: { App}
})

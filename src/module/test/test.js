import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
//import App from './App.1'


// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',  //<App/>
  components: { App}
})

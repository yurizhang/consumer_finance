import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import list from '../module/index/list.vue';  //订单列表
import detail from '../module/index/detail.vue';  //订单详情
import index from '../module/index/index.vue'; //首页
import coupon from '../module/index/coupon.vue';  //优惠卷
import banklist from '../module/index/banklist.vue';  //银行列表 管理自动还款
import contract from '../module/index/contract.vue';  //合同协议
import addbank from '../module/index/addbank.vue';  //添加银行
import unavailable from '../module/index/unavailable.vue';  //未开通，分2步，1.填写四要素，2.填写预警留手机号码  3.成功or失败

export default new Router({
  routes:[
    {
        path:'/',
        component:index
    },
    {
      path:'/list',
      component:list
    },
    {
      path:'/detail',
      component:detail
    },
    {
      path:'/coupon',
      component:coupon
    },
    {
      path:'/banklist',
      component:banklist
    },
    {
      path:'/addbank',
      component:addbank
    },
    {
      path:'/contract',
      component:contract
    },
    { 
      path:'/unavailable',
      component:unavailable
    }
  ]
})

<template>
  <div>
      <van-nav-bar title="服务协议" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
      <van-cell-group class="contractlist">        
        <van-cell v-for="(e,i) in list" :title="e.title" :to="'/contract?id='+e.id" is-link value="查看" :key="i" />
     </van-cell-group>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
import axios from "axios";
import * as _global from "../../plugs/global";
import TrendFun from "../../plugs/function";

//let trendFun=new TrendFun(); //公共函数库
//let __REQUEST=trendFun.__REQUEST();
let __URILIST = _global.URILIST;

const testList = [

  {
    id: 1,
    title: "信用信息查询授权书"
  },
  {
    id: 2,
    title: "消费信贷业务服务协议"
  }
];

export default {
  name: "app",
  data() {
    return {
      list: testList ||[]
    };
  },
  created() {
    this.getContractList();
  },
  methods: {
    backIndex() {
      this.$router.push({ path: "/", query: { from: "banklist" } });
      return;
    },
    getContractList() {
      let request = {};
      axios
        .post(__URILIST[10], request)
        .then(response => {
          if (response.data.success) {
            //this.list = response.data.list;
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          //console.log(error);
          //reject(error);
        });
    }
  }
};
</script>

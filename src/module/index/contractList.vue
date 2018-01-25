<template>
  <div>
      <van-nav-bar title="服务协议" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
      <van-cell-group class="contractlist">        
        <van-cell title="信用信息查询授权书" :to="'/contract?id=1&needUp='+contractAuthState" is-link>               
               <span :class="contractAuthState==0?'nFcost_red':''">{{contractAuthState==0? '查看':'更新'}}</span>
        </van-cell>
        <van-cell title="消费信贷业务服务协议" :to="'/contract?id=2&needUp='+contractLoanState" is-link>
              <span :class="contractLoanState==0?'nFcost_red':''">{{contractLoanState==0? '查看':'更新'}}</span>
        </van-cell>
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

export default {
  name: "app",
  data() {
    return {
      //list: testList,
      "contractLoanState": 0,  // 消费信贷业务服务协议 0 需要更新  其他 不需要更新
      "contractAuthState": 0,
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
     
      axios.get(__URILIST[10]).then(response => {
          if (response.data.success) {
                  //console.log(response.data.data)
                  this.contractLoanState=response.data.data.contractLoanState;   // 消费信贷业务服务协议 0 需要更新  其他 不需要更新
                  this.contractAuthState=response.data.data.contractAuthState;
                  //"callbackUrl": "" // 收银台跳转
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

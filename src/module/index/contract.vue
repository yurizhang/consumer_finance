<template>
<div>
  <van-nav-bar title="服务协议" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
  <div :style="screenHeight">
      <iframe :src="iframeUrl" id="show-iframe" class="iframe" @load="loaded"></iframe>
  </div>
   <div class="foot" v-if="needUp==0">          
          <a style="width:100%" @click="updateDoc">阅读完毕并确认</a>
    </div>
</div>
</template>

<script>
import { Dialog, Toast } from "vant";
import axios from "axios";
import * as _global from "../../plugs/global";
//import TrendFun from "../../plugs/function";

//let trendFun=new TrendFun(); //公共函数库
//let __REQUEST=trendFun.__REQUEST();
let __URILIST = _global.URILIST;


export default {
  name: "app",
  data() {
    return {
      iframeUrl:'',
      screenHeight:{
        height: (window.screen.height-90)+'px'  //title and bottom button,2 if dont need update, should -45px
      },
      needUp:1, 
      docType: 0
    };
  },
  created() {
     
          let id=parseInt(this.$route.query.id,10);   //1表示信用信息查询授权书   2消费信贷业务服务协议
          this.needUp=parseInt(this.$route.query.needUp,10);   //0表示更新 其它不要
          this.docType=id;
          if(id==1){
            this.iframeUrl=__URILIST[25];
          }else if(id==2){
            this.iframeUrl=__URILIST[26];
          }
          Toast.loading({ mask: true,  duration: 0,       // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                message: '正在加载中...'
          });
          
  },
  //  mounted(){
  //   const oIframe = document.getElementById('show-iframe');
  //   const deviceWidth = document.documentElement.clientWidth;
  //   const deviceHeight = document.documentElement.clientHeight;
  //   oIframe.style.width = deviceWidth + 'px';
  //   oIframe.style.height = deviceHeight + 'px';
  // },
  methods: {
    loaded(){
        Toast.clear();
        console.log("loading");
    },
    backIndex() {
      this.$router.push({ path: "/contractlist" });
      return;
    },
    updateDoc() {
      let request={
          docType: this.docType  // //1表示信用信息查询授权书   2消费信贷业务服务协议
      };
      axios.post(__URILIST[11],request).then(response => {
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


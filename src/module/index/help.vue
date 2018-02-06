<template>
<div>
  <van-nav-bar title="帮助中心" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
  <div :style="screenHeight">
      <iframe :src="iframeUrl" id="show-iframe" class="iframe" @load="loaded"></iframe>
  </div>

</div>
</template>

<script>
import { Dialog, Toast } from "vant";




export default {
  name: "app",
  data() {
    return {
      iframeUrl:'../static/helper.html',
      screenHeight:{
        height: (window.screen.height-90)+'px'  //title and bottom button,2 if dont need update, should -45px
      },
      needUp:1, 
      docType: 0
    };
  },
  //  mounted(){
  //   const oIframe = document.getElementById('show-iframe');
  //   const deviceWidth = document.documentElement.clientWidth;
  //   const deviceHeight = document.documentElement.clientHeight;
  //   oIframe.style.width = deviceWidth + 'px';
  //   oIframe.style.height = deviceHeight + 'px';
  // },
   created() {    

          Toast.loading({ mask: true,  duration: 0,       // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                message: '正在加载中...'
          });
          
  },
  methods: {
    loaded(){
        Toast.clear();
       // console.log("loading");
    },
    backIndex() {
      this.$router.push({ path: "/" });
      return;
    }
  }
};
</script>


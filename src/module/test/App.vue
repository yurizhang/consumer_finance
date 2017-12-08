<template>
  <div>
  <div class="page-loadmore-wrapper">
       token:
       <input type="text" ref="token" size="50" :value="token">
       <br><br>
       phoneNumber:
       <input type="text" ref="phoneNumber" :value="phoneNumber">
       <br><br>
       appVersion:
       <input type="text" ref="appVersion" :value="appVersion">
       <br><br>
        <input type="button" id="btnSubmit" @click="writeCookie()" value="提交">
  </div>


  <div>
      <ul class="ul_demo"
        v-waterfall-lower="loadMore"
        waterfall-disabled="disabled"
        waterfall-offset="400">

        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>


  </div>
  <div>

        <van-uploader :beforeRead="beforeRead" :afterRead="logContent" resultType="text">
             <van-icon name="photograph"></van-icon>上传文件
        </van-uploader>

  </div>

  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

import { Waterfall,Uploader,Icon } from 'vant';

Vue.component(Uploader.name, Uploader);
Vue.component(Icon.name, Icon);

import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';
// import BUS from '../../plugs/bus.js';
// import { Toast,Indicator,Loadmore } from 'mint-ui';

let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;



  export default {
    name: 'app',
    data(){
      return{
        token: trendFun.getCookie("token"),
        phoneNumber: trendFun.getCookie("phoneNumber"),
        appVersion: trendFun.getCookie("appVersion"),

        page:1,

         list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         disabled: false
      }
    },


    directives: {
        WaterfallLower: Waterfall('lower')
        //若是函数执行中需要异步加载数据，可以将 waterfall-disabled 指定的值置为 true，禁止 v-waterfall-lower 监听滚动事件
      },

    
    methods:{
              writeCookie(){
                            let phoneNumber,token,appVersion;
                            phoneNumber=this.$refs.phoneNumber.value;
                            token=this.$refs.token.value;
                            appVersion=this.$refs.appVersion.value;
                            trendFun.setCookie("phoneNumber",phoneNumber,10);   //15911110002
                            trendFun.setCookie("appVersion",appVersion,10);
                            trendFun.setCookie("token",token,10); //88ea304edd035444720261961058785c
                            alert('phoneNumber:'+phoneNumber+' token:'+token+'  写入');
                            location.reload();


              },

           //下拉更多   
           loadMore() {
                    this.disabled = true;  //禁止监控
                    setTimeout(() => {
                                      

                      
                      axios.get('/static/data/test.json?page='+this.page).then(response=>{

                            if(this.page==10){
                               this.disabled = true;   ////禁止监控
                               return;
                            }
                        
                            let tema=this.list.concat(response.data.data.test);
                            this.list=tema; 
                            console.log(tema);
                            //console.log(response.data.data)
                            this.page++;
                            this.disabled = false; //开始监控
                       
                            
                      })
                    
                    }, 200);
                  
            },
            //文件上传读取后
            logContent(file,content) {
                 console.log("我已结束了....");
                console.log(file)
                console.log(content)
            },
            //文件上传之前
            beforeRead(file,content){
                 console.log(" 我要开始了....");
                 console.log(file);
                 console.log(content)
                 return true; //false不 上传
            }
            

       

    }
  }
</script>

<style lang="scss">
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;
    body {
          font: 100% $font-stack;
          color: $primary-color;
    }
    .ul_demo{
      max-height: 360px;
      overflow: scroll;
      border-top: 1px solid #e5e5e5;
    }

    .ul_demo li {
      line-height: 50px;
      border-bottom: 1px solid #e5e5e5;
      background: #fff;
      text-align: center;
     }

</style>
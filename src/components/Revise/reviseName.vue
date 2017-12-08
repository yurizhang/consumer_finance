<template>
  <div id="app">
    <!-- header -->
    <mt-header title="修改昵称" id="mt-header">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
    </mt-header>
    <div class="revise gap-t" :model="form" >
      <mt-field v-model="username" :attr='{ "maxlength":16,"id":"username" }'></mt-field>
      <p class="note">仅支持中文、英文、数字、“_”，要求2-16个字符</p>
      <mt-button type="default" size="large" :disabled="disabled" @click="checkNickName(username)">保存</mt-button>
    </div>

  </div>
</template>

<script>
  //import 'mint-ui/lib/style.css';  不必重复导入
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';
import BUS from '../../plugs/bus.js';
import { Toast } from 'mint-ui';
let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.default;
//axios.defaults.headers.common['TN-REQ-DATA-TYPE'] = 'json/text';

  export default {
    name: 'reviseName',
    computed:{
      disabled(){
        return this.username ? false : true;
      }
    },
  mounted(){
    trendFun.autoHideTitle(1);
  },
  data(){
      return{
        username: trendFun.getCookie("nickname") ||this.$route.query.nickname
      }
    },

    methods:{
      checkNickName(str){
          //验证用户昵称有效期
          let reg=/^[0-9a-zA-Z\u4e00-\u9fa5_]{2,16}$/;
          if(reg.test(this.username)){
              //修改 http://wiki.tuniu.org/pages/viewpage.action?pageId=74084737
                __REQUEST.bizParams={
                   // "imageData":"",//头像 String
                  //  "imageFormat":"",//图片格式, 1:png,2:jpg,3:bmp
                    "nickName":this.username//昵称   我这里只昵称，其它 的也要传吗，接口需要 确认
                   // "gender":""//性别
                }
                let request=JSON.stringify(__REQUEST);

                axios.post(__URILIST[7], request).then( response=> {
                      if(_global._DEBUG) console.log( response.data);
                      //let response=response.data;
                      if(response.data.success){
                          trendFun.setCookie("nickname",this.username,10);
                          Toast("您的昵称修改成功.")
                        //this.$router.push({ path: 'setPsw'}); //跳转路由
                        //跳转
                      }else{
                            Toast(response.data.msg)

                      }

                  }).catch((error) =>{
                      console.log(error);
                  });



          }else{
                Toast("无效的用户，仅支持中文、英文、数字、“_”，要求2-16个字符");
          }
      }
    }

  }
</script>

<template>
<div>
       <div class="noticeWrap" v-if="!!data.alertMessageTitle">
            <div class="notice" id="notice">
                <ul>                    
                    <li><a @click="alertMessage()">{{this.data.alertMessageTitle}}</a></li>                    
                </ul>
            </div>
        </div>
    


        <header class="sf-head">
            <div class="available">
                <p>{{number_format(data.availableQuota, 2)}}</p>
                <p>可用额度(元)</p>
            </div>
            <ul class="limit">
                <li>
                     <router-link  class="billListHref" to="/list?queryType=2"> 
                    <p>{{number_format(data.weekNeedToPay,2)}}</p>
                    <p>近七日待还款(元)</p>
                    </router-link>          
                </li>
                <li>
                    <p>{{number_format(data.fixedQuota,2)}}</p>
                    <p>固定额度(元)</p>
                </li>
                
            </ul>
        </header>
 

<div class="panel">
    <ul>
        <li>
            <router-link  class="billListHref" to="/list?queryType=2">            
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_3" alt="全部还款"></div>
                    <div class="detail">
                        <p>全部待还款</p>
                        <p>{{number_format(data.AllofNeedToPay,2)}}</p>
                    </div>
		        </div>
            
            </router-link>
        </li>

        <li>
            <router-link  to="/list?queryType=3">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_2" alt="逾期还款"></div>
                    <div class="detail">
                        <p>逾期还款</p>
                        <p>{{number_format(data.overdueNeedToPay,2)}}</p>
                    </div>
                </div>
            </router-link>
        </li>

        <li>
            <router-link  to="/list?queryType=3">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_4" alt="分期还款"></div>
                    <div class="detail">
                        <p>分期还款</p>
                        <p></p>
                    </div>
                </div>
            </router-link>
        </li>
        <li>
            <router-link  to="/list">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_5" alt="我的订单"></div>
                    <div class="detail">
                        <p>我的订单</p>
                        <p>查看历史订单</p>
                    </div>
		        </div>
            </router-link>
        </li>

        <li>
             <router-link  to="/coupon"> 
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_7" alt="优惠券"></div>
                    <div class="detail">
                        <p>优惠券</p>
                        <p>{{data.couponNumber}}张</p>
                    </div>
                </div>
             </router-link>
        </li>      
        
        <li v-if="data.addQuotoType!==0">
           <a href="/xdm/m/index/addQuota/apply">
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_6" alt="我的提额"></div>
                    <div class="detail">
                        <p>我的提额</p>
                        <p>{{data.addQuotoType==1 ?'申请提额,畅玩世界':'可提升额度至'+ number_format(data.availableAddQuoto,2)+'元'}}</p>
                    </div>
                </div>
            </a>
        </li>

        <li>
            <router-link  to="/banklist">  
                
		        <div class="item">
                    <div class="icon"><img :src="userCenter_icon_9" alt="开通自动还款"></div>
                    <div class="detail">
                        <p>开通自动还款</p>
                        <p>选择还款方式</p>
                    </div>
                </div>
            </router-link>
        </li>
        <li>
            <a href="https://8.m.tuniu.com/xdm/resources/helper.html">
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_10" alt="帮助中心"></div>
                    <div class="detail">
                        <p>帮助中心</p>
                        <p>不会使用?点我看</p>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <router-link  to="/contract"> 
           
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_8" alt="服务协议"></div>
                    <div class="detail">
                        <p>服务协议</p>
                        <p>消费信贷业务</p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</div>


</div>
</template>

<script>
import { Dialog } from 'vant';
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';

//axios.defaults.headers.common['TN-REQ-DATA-TYPE'] = 'json/text';
let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;

//number_format(123,2)
import userCenter_icon_2 from '../../common/img/userCenter_icon_2.png'
import userCenter_icon_3 from '../../common/img/userCenter_icon_3.png'
import userCenter_icon_4 from '../../common/img/userCenter_icon_4.png'
import userCenter_icon_5 from '../../common/img/userCenter_icon_5.png'
import userCenter_icon_6 from '../../common/img/userCenter_icon_6.png'
import userCenter_icon_7 from '../../common/img/userCenter_icon_7.png'
import userCenter_icon_8 from '../../common/img/userCenter_icon_8.png'
import userCenter_icon_9 from '../../common/img/userCenter_icon_9.png'
import userCenter_icon_10 from '../../common/img/userCenter_icon_10.png'

  export default {
    name: 'app',
    data(){
      return{
            username:'',  //get user from cookie
            data:{
                "availableQuota": 0,
                "weekNeedToPay": 0,
                "fixedQuota": 0,
                "AllofNeedToPay": 0,
                "couponNumber": 0,
                "overdueNeedToPay": 0,
                "addQuotoType": 0,
                "availableAddQuoto": 0,

                alertMessageTitle:"",
                alertMessageContent:"",

            },


            //availableQuota:可用额度  
            // weekNeedToPay:近7日待还款 
            // fixedQuota：固定额度,
            // AllofNeedToPay:所有待还款 
            // couponNumber：优惠卷 
            // overdueNeedToPay：逾期待还款    
            // addQuotoType: 提额类型，(0，不符合提额需求  1. 可以提固定额度 2，可以提临时宽度) 
            // availableAddQuoto：可提临时额度  

            userCenter_icon_2,
            userCenter_icon_3,
            userCenter_icon_4,
            userCenter_icon_5,
            userCenter_icon_6,
            userCenter_icon_7,
            userCenter_icon_8,
            userCenter_icon_9,
            userCenter_icon_10

      }
    },    
    created(){          
        this.getIndex();

    },
    mounted(){
        // setTimeout(()=>{
        //     let clientWidth=document.body.clientWidth;
        //     let LiWidth=Math.round(clientWidth / 3, 2);
        //     document.querySelectorAll(".panel ul li").forEach((e,i)=>{
        //         //console.log(i,e);
        //         e.style.height=LiWidth+'px';
        //     })
        // },500)
    },
    methods:{
         getIndex(){
                __REQUEST.bizParams={
                    "username": this.username

                }
                //let request=JSON.stringify(__REQUEST);
                if(_global._DEBUG) console.log( __REQUEST);
                axios.post(__URILIST[0], __REQUEST).then( response=> {
                    if(_global._DEBUG) console.log( response.data);
                    //let response=response.data;
                    if(response.data.success){ 
                            //console.log( this.data)
                            this.data=response.data.data;
                            //console.log( this.data)
                            //跳转路由
                            //this.$router.push({ path: '/vcode',query: { username: this.username, idNumber:this.idNumber,bankCardNumber: this.bankCardNumber, phoneNumber:this.phoneNumber }}); //跳转路由
                        
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
                    console.log(error);
                });    
         },
         number_format(number, decimals, dec_point, thousands_sep){
                return trendFun.number_format(number, decimals, dec_point, thousands_sep);
         },
         alertMessage(){
                Dialog.alert({
                    // title:this.alertMessageTitle,
                    message: this.data.alertMessageContent
                 }).then(() => {
                    //alert("clsoed");
                });
         }
          
    }
   
  }
</script>




<template>
<div>
       <div class="noticeWrap" v-if="this.data.noticeList.length>0">
            <div class="notice">
                <ul :class="animate? 'anim':''" :style="{top}">                    
                    <li v-for="(item,index) in data.noticeList" :key="index"><a @click="alertMessage(index)">{{item.title}}</a></li>                                       
                </ul>
            </div>
            
        </div>
    


        <header class="sf-head">
            <div class="available">
                <p>{{number_format(data.totalAvaiQuota, 2)}}</p>
                <p>可用额度(元)</p>
            </div>
            <ul class="limit">
                <li>
                     <router-link  class="billListHref" to="/list?queryType=2"> 
                    <p>{{number_format(data.weekAmount,2)}}</p>
                    <p>近七日待还款(元)</p>
                    </router-link>          
                </li>
                <li>
                    <p>{{number_format(data.orderQuota,2)}}</p>
                    <p>固定额度(元)</p>
                </li>
                
            </ul>
        </header>
 

<div class="panel">
    <ul>
        <li>
            <router-link  class="billListHref" to="/list?queryType=3">            
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_2" alt="全部还款"></div>
                    <div class="detail">
                        <p>全部待还款</p>
                        <p>{{number_format(data.allAmount,2)}}</p>
                    </div>
		        </div>
            
            </router-link>
        </li>

        <li>
            <router-link  to="/list?queryType=1">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_3" alt="逾期还款"></div>
                    <div class="detail">
                        <p>逾期还款</p>
                        <p>{{number_format(data.dueAmount,2)}}</p>
                    </div>
                </div>
            </router-link>
        </li>

        <!-- <li>
            <router-link  to="/list?queryType=6">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_4" alt="分期还款"></div>
                    <div class="detail">
                        <p>分期还款</p>
                        <p></p>
                    </div>
                </div>
            </router-link>
        </li> -->
        <li>
            <router-link  to="/list?queryType=4">  
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
                    <div class="icon"><img :src="userCenter_icon_6" alt="优惠券"></div>
                    <div class="detail">
                        <p>优惠券</p>
                        <p>{{data.unUseCount}}张</p>
                    </div>
                </div>
             </router-link>
        </li>      
        
        <li v-if="data.addQuotoType!==0">
           <router-link  :to="data.addQuotoType==1 ?'/upload':'/addquota'">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_7" alt="我的提额"></div>
                    <div class="detail">
                        <p>我的提额</p>
                        <p>{{data.addQuotoType==1 ?'申请提额,畅玩世界':'可提升额度至'+ number_format(data.sLimit,2)+'元'}}</p>
                    </div>
                </div>
            </router-link>
        </li>

        <li>
            <router-link  to="/banklist">  
                
		        <div class="item">
                    <div class="icon"><img :src="userCenter_icon_8" alt="开通自动还款"></div>
                    <div class="detail">
                        <p>开通自动还款</p>
                        <p>选择还款方式</p>
                    </div>
                </div>
            </router-link>
        </li>
        <li>
             <router-link  to="/help">  
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_9" alt="帮助中心"></div>
                    <div class="detail">
                        <p>帮助中心</p>
                        <p>不会使用?点我看</p>
                    </div>
                </div>
            </router-link>
        </li>
        <li>
            <router-link  to="/contractlist"> 
           
                <div class="item">
                    <div class="icon"><img :src="userCenter_icon_10" alt="服务协议"></div>
                    <div class="detail">
                        <p>{{data.contractState==1 ?'服务协议' :'更新协议'}}</p>
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
import { Dialog,Toast } from 'vant';
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';


// //添加请求拦截器
// axios.interceptors.request.use(function(config){
//      //在发送请求之前做某事
//      console.log(config);
//    },function(error){
//      //请求错误时做些事
//      console.log("request error:");
//      console.log(error);
//     // return Promise.reject(error);
// });
 
// //添加响应拦截器
// axios.interceptors.response.use (function(response){
//      //对响应数据做些事
//       console.log(response);
//       if(response.data.errorCode==500){
//           location.href=response.data.data.redirectUrl+"http://localhost:8090/module/index.html";
//           return false;
//       }
       
//       return response;
//    },function(error){
//      //请求错误时做些事
//      // console.log("response error:");
//       //console.log(error);
//       //return Promise.reject(error);
// });


//axios.defaults.headers.common['TN-REQ-DATA-TYPE'] = 'json/text';
let trendFun=new TrendFun(); //公共函数库
//let __REQUEST__REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;

//number_format(123,2)
import userCenter_icon_2 from '../../common/img/2.png'
import userCenter_icon_3 from '../../common/img/3.png'
import userCenter_icon_4 from '../../common/img/4.png'
import userCenter_icon_5 from '../../common/img/5.png'
import userCenter_icon_6 from '../../common/img/6.png'
import userCenter_icon_7 from '../../common/img/7.png'
import userCenter_icon_8 from '../../common/img/8.png'
import userCenter_icon_9 from '../../common/img/9.png'
import userCenter_icon_10 from '../../common/img/10.png'

  export default {
    name: 'app',
    data(){
      return{
            username:'',  //get user from cookie
            data:{
                noticeList:[]               

            },

            activeIndex: 0,
            animate:true,


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
        Toast.loading({ mask: true,  duration: 0,       // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                message: '正在加载中...'
        });        
        this.getIndex();

    },
    computed: {
        top() {
            return - this.activeIndex * 30 + 'px';
        }
   },

    methods:{
         getIndex(){
             
                //let request=JSON.stringify(__REQUEST);
                //if(_global._DEBUG) console.log( __REQUEST);
           
                axios.get(__URILIST[0]).then( response=> {
                    //if(_global._DEBUG) console.log( response.data);
                    //let response=response.data;
                    Toast.clear();
                    if(response.data.success){ 
                            //console.log( this.data)
                            if(response.data.data.isActive!=1){
                                this.$router.push({ path: '/unavailable?from=index'});  //用户未开通
                                return;
                            }                           
                            
                            this.data=response.data.data;

                            //console.log( this.data)
                            //跳转路由
                            //this.$router.push({ path: '/vcode',query: { username: this.username, idNumber:this.idNumber,bankCardNumber: this.bankCardNumber, phoneNumber:this.phoneNumber }}); //跳转路由
                            if(this.data.noticeList.length>0){
                                this.scroll();
                            }
                        
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
                    console.log(error);
                    Toast.clear();
                });    
         },
         number_format(number, decimals, dec_point, thousands_sep){
                return trendFun.number_format(number, decimals, dec_point, thousands_sep);
         },
         alertMessage(index){
                Dialog.alert({
                    // title:this.alertMessageTitle,
                    message: this.data.noticeList[index].desc
                 }).then(() => {
                    //alert("clsoed");
                });
         },
         scroll(){
               let intval=setInterval(()=> {               
                    if(this.activeIndex < this.data.noticeList.length-1) {
                        this.activeIndex += 1;                   
                    } else {
                        this.activeIndex = 0;                   
                    }
      
                }, 1000);

                if(this.data.noticeList.length==0){
                    this.activeIndex = 0;                   
                    clearInterval(intval);
                }
         }
   
       
    }
   
  }
</script>




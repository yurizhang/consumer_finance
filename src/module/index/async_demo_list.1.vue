<template>
      <div >
	  <van-nav-bar title="我的首付出发" leftArrow leftText="返回"  @click.native="backIndex()">
  		
	 </van-nav-bar>
      <!-- <van-button type="primary" @click="sayYes()">Primary</van-button> -->
      <!-- <input id="top_bar_title" type="hidden" value="首付出发账单"> -->
      <!-- 这个 top_bar_title 有可能是APP读取的时候用的-->
    <div class="fakeloader" id="fakeloader" style="display: none;"></div>
    <div class="all">      
        		
        		<ul class="bill">
        			
        			   <router-link  :to="'/detail?id='+item.id" v-for="(item,index) in billList" :key="index"> 
              	        <li>
		                    <p class="threeColor">{{item.productName}}</p>
		                    <p class="nFcost_red">
								<span>￥{{number_format(item.price)}}元</span><span>{{item.periods}}期</span><img src="https://ssl.tuniucdn.com/img/2015070110/jinrong/mNiukebao/nduidui/xiangyou.png"/>
								<span class="sixColor">{{stateText(item.state)}}</span>
		                    </p>
		                    <p class="nineColor">申请日期：{{item.applyDate}}</p>
			            </li>
        			   </router-link>

        			
        				 <li >
		                    <p class="threeColor">预定途牛旅游线路</p>
		                    <p class="nFcost_red">
		                    <span>￥1600.00元</span><span>1期</span><img src="https://ssl.tuniucdn.com/img/2015070110/jinrong/mNiukebao/nduidui/xiangyou.png"/>
		                    <span class="sixColor">
		                    		
		                    		待还款                    		
		                    	
		                    </span>
		                    </p>
		                    <p class="nineColor">申请日期：2017-11-28</p>
			            </li>
        			
        				 <li>
		                    
		                    <p class="threeColor">预定途牛旅游线路</p>
		                    <p class="nFcost_red">
		                    <span>￥1600.00元</span><span>6期</span><img src="https://ssl.tuniucdn.com/img/2015070110/jinrong/mNiukebao/nduidui/xiangyou.png"/>
		                    <span class="sixColor">
		                    		
		                    		已还清
		                    </span>
		                    </p>
		                    <p class="nineColor">申请日期：2017-11-28</p>
			            </li>
        			
        				 <li>
		                    
		                    <p class="threeColor">&lt;跟团无领队打包出短王蕾专用&gt;请勿动</p>
		                    <p class="nFcost_red">
		                    <span>￥2400.00元</span><span>6期</span><img src="https://ssl.tuniucdn.com/img/2015070110/jinrong/mNiukebao/nduidui/xiangyou.png"/>
		                    <span class="sixColor">
		                    	
		                    		已逾期	                    		
		                    	
		                    </span>
		                    </p>
		                    <p class="nineColor">申请日期：2017-11-27</p>
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

let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;

//import Vue from 'vue'
//import { Button } from 'vant';
// Vue.component(Button.name, Button);
const LISTSTATE=[];
LISTSTATE[1]='已还清';
LISTSTATE[2]='待还款';
LISTSTATE[3]='已逾期';

export default {
  name: "button",
  data(){
	  return{
		  billList:{}
	  }
  },
  async created(){
	  let querytype=this.$route.query.queryType||0;   //0表示 显示全部
	  await this.getList(querytype);
      console.log(querytype);
  },

  methods: {
	//back to index
    backIndex() {		  
		  this.$router.push({ path: '/', query: { from: 'list' }})
		  return;
        //   Dialog.alert({
        //     message: '弹窗内容---'
        //   }).then(() => {
        //       alert("clsoed");
        //   });
	},
    stateText(state){
		  return LISTSTATE[state]
	},
	number_format(number, decimals, dec_point, thousands_sep){
        return trendFun.number_format(number, decimals, dec_point, thousands_sep);
    },
	async getList(querytype){
                let result = await this.ajaxDate(querytype);
				console.log(result); // 收到 ‘ok’   
				console.log("ending"); // 收到 ‘ok’
				

	},
	ajaxDate(querytype) {
		return new Promise((resolve, reject)=> {
			     __REQUEST.bizParams={
                    "querytype": querytype
                }     
                axios.post(__URILIST[1], __REQUEST).then( response=> {
                    if(response.data.success){                             
							this.billList=response.data.data;
							resolve('ok2');
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
					console.log(error);
					//reject(error);
				}); 
			   resolve('ok1');
		})
	}


  }

};
</script>



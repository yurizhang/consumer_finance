<template>
<div>
	<van-nav-bar title="我的账单" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
      <!-- <van-button type="primary" @click="sayYes()">Primary</van-button> -->
      <!-- <input id="top_bar_title" type="hidden" value="首付出发账单"> -->
      <!-- 这个 top_bar_title 有可能是APP读取的时候用的-->

    <div class="all">        		
		<ul class="bill">        			
		   <router-link  :to="'/detail?id='+item.id+'&querytype='+querytype" v-for="(item,index) in billList" :key="index"> 
  	        <li>
                <p class="threeColor">{{item.orderText}}</p>
                <p class="nFcost_red">
					<span><strong>￥{{number_format(item.loanAmount)}}元</strong></span><span><strong>{{item.term}}期</strong></span> 
					
					<span class="sixColor">{{stateText(item.state)}} <span><img :src="right_arrow"/></span></span>
                </p>
                <p class="nineColor">申请日期：{{item.applyTime}}</p>
            </li>
		   </router-link>        			
		 </ul>

		 <div class="empty"  v-show="billList.length==0">
			<div v-if='loading'>
				<van-loading type="spinner" color="black" />
			</div>
			<div v-else>
				<img :src="img_none_2x"  :srcset="img_none_3x + ' 3x'">
				
				<p>暂无订单</p>
        	</div>
		 </div>
    </div>

</div>
</template>

<script>

//import { Dialog } from 'vant';
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
LISTSTATE[1]='已逾期';
LISTSTATE[2]='待还款';
LISTSTATE[3]='已还清';   //state 1 已逾期，2，待还款 3,已还清, 4 已取消
LISTSTATE[4]='已取消';
import right_arrow from '../../common/img/right_arrow.png'
import img_none_2x from '../../common/img/bill_none_2x.png';
import img_none_3x from '../../common/img/bill_none_3x.png';
export default {
  name: "button",
  data(){
	  return{
		  billList:[],
		  querytype:3,

		  right_arrow,
		  img_none_2x,
		  img_none_3x,
		  loading:true,
	  }
  },
  created(){
	  this.querytype=this.$route.query.queryType||3;   //0表示 显示全部
	  this.getList(this.querytype);
      //console.log(querytype);
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
	getList(querytype){
				this.ajaxDate(querytype);
				//let result = await this.ajaxDate(querytype);
				//console.log(result); // 收到 ‘ok’   
				//console.log("ending"); // 收到 ‘ok’
				
	},
	ajaxDate(querytype) {
		//return new Promise((resolve, reject)=> {
			    let request={
                    "queryType": querytype
                }     
                axios.get(__URILIST[1], {params:request}).then( response=> {
                    if(response.data.success){                             
							this.billList=response.data.data.billList;							
                    }else{
                        alert(response.data.msg);
					}
					this.loading=false;
                    
                }).catch((error) =>{
					console.log(error);
					this.loading=false;
					//reject(error);
				}); 
			   //resolve('ok1');
		//})
	}


  }

};
</script>



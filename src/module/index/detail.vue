<template>
<div>
    <van-nav-bar title="我的账单" leftArrow fixed leftText="返回" class="fixed-van-nav-bar"  @click-left="backIndex()"></van-nav-bar>
    <div class="all all_title">
        <header class="record" :style="record">            
            <p>{{billInfo.orderText}}</p>
            <p><span>下单日期：{{billInfo.applyTime}}</span></p>
            <p><span>订单号：{{billInfo.orderId}}</span></p>
            <p>申请流水：{{billInfo.seq}}</p>
        </header>
        <div class="purchase threeColor">
            <p><span>申请金额(元)</span><span class="nFcost_red">{{number_format(billInfo.loanAmount)}}</span></p>
            <p><span>期数</span><span class="nFcost_red">{{billInfo.term}}期</span></p>
            <p><span>分期服务费</span><span class="nFcost_red">{{number_format(billInfo.installmentCharge)}}</span></p>
            <p><span>逾期违约金</span><span class="nFcost_red">{{number_format(billInfo.fine)}}</span></p>
        </div>
        <div class="combinde threeColor">
            <span>合计：{{number_format(billDetail.sum)}}元</span>
            <span class="nFcost_red">待还：{{number_format(billDetail.remainAll)}}元</span>
        </div>        
        <div class="purchase_title threeColor">
            <p>各期帐单</p>
        </div>
        <div>


            <van-checkbox-group v-model="id_result">
                <van-cell-group class="van-cell-group-refine">
                    <van-cell v-for="(e,i ) in billDetail.rows" :key="i" class="cell-margin">
                        <van-checkbox class="checkbox--round-refine"  :data-price="e.currentQuota" @change.native="debug(i,e.id)" :name="e.id">{{number_format(e.payAmount)}}元</van-checkbox>  
                        <template slot="right-icon">                                              
                            <span class="van-cell__right-icon">
                                <span class="toRepay">{{e.endDate}} {{stateText(e.state)}}</span>
                                <img @click="showMoreInfo(e.id)" :src="gantan_icon" class="gantanpro" />
                            </span>                          
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
    
		</div>



        <div class="foot" v-if="billInfo.state!=3">
                <div class="checkBox">
                    <input type="checkbox" id="checkbox" @click="AllofSelect()" :checked="currentQuota>0">
                    <label for="checkbox"></label>
                </div>
                <span class="threeColor">已选 <span class="nFcost_red" id="payAmount">{{number_format(currentQuota)}}</span> 元</span>
                <a  @click="payNow()" :class="currentQuota==0 ?'UnselectButton':''">立即还款</a>
        </div>


        
    </div>



</div>
</template>

<script>

import { Dialog } from 'vant';
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';

import gantan_icon from "../../common/img/gantan.png";

let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;
// const ORDERSTATE=[];
// ORDERSTATE[1]='有逾期';
// ORDERSTATE[2]='待还款';
// ORDERSTATE[3]='已结清';  //1-有逾期   2- 代还款 3-已结清

const LISTSTATE=[];   //每笔状态   0-逾期 1 已还清  3- 待还款 6-已取消
LISTSTATE[0]='逾期';
LISTSTATE[1]='已还清';
LISTSTATE[3]='待还款';
LISTSTATE[6]='已取消';
const origin_result=[];   //用于缓存当前所有的列表id

  export default {
    name: 'app',
    data(){
      return{
        //checkbox的name 相当于每个checkbox的value，
        id_result: [],  //如果checkbox选中的值在这个数组里，则选中,这里如果为空表示不选中,
        currentQuota:0, //已选中的id对应的应还价格总额     
        
        "billInfo": {
                "id": 0,   
                "orderText": "", //订单描述
                "applyTime": "-", //订单日期
                "orderId": "-", //订单号
                "seq": "-",  //订单流水号
                "loanAmount": 0.00,  //申请额度
                "term": 0,  //总期数
                "state": 0,  //状态 1-有逾期   2- 代还款 3-已结清
                "installmentCharge": 0.00,  //分期服务费用
                "fine": 0,  //逾期违约金
        },
        "billDetail": {
                "sum": 0.00,  //合计金额
                "remainAll": 0.00,  //待还金额
                "rows": [
                    // {
                    //     "id": 1, //还款计划id
                    //     "payAmount": 402,  //当前应还
                    //     "endDate": "2017-11-27", //还款日期
                    //     "state": 3, //状态 0-逾期 1 已还清  3- 待还款 6-已取消
                    //     "currentTerm": 1, //当前期数
                    //     "currentCapital": 400,  //本金
                    //     "repayEarlyType": 1,  //是否提前还款免除分期服务费  1：是  0：不是
                    //     "currentFine": 2,   // 逾期违约金
                    //     "repayInterest": // 应还服务费
                    // }
                ]
        },     
        gantan_icon,
        record: {
            backgroundImage: "url(" + require("../../common/img/detail_bg.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
            // marginTop: "5px",
          }
      }
    },
    created(){
        	let id=parseInt(this.$route.query.id,10)||0;   //0表示 显示全部
	        this.getDetail(id);
    },
    methods:{
        backIndex() {		  
		  this.$router.push({ path: '/list'})
		  return;
	    },
        getDetail(id){
            	 __REQUEST.bizParams={
                    "id": id
                }     
                axios.post(__URILIST[2], __REQUEST).then( response=> {
                    if(response.data.success){                             
                            this.billDetail=response.data.data.billDetail;	
                            this.billInfo=response.data.data.billInfo;	
                            //收集原始ID数组
                            Object.entries(response.data.data.billDetail.rows).forEach( ([key,value])=>{
                                origin_result.push(value.id);
                            });	
                            //console.log(origin_result);				
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
					console.log(error);
				}); 
        },
        stateText(state){
            return LISTSTATE[state]
        },
        number_format(number, decimals, dec_point, thousands_sep){
            decimals=decimals? decimals:2;
            return trendFun.number_format(number, decimals, dec_point, thousands_sep);
        },
        debug(i,id){
            //console.log(i,id, this.id_result)
            let _index=origin_result.indexOf(id);  //这个值在原始数组中的位置
            let _newArrar=[];
            if(this.id_result.indexOf(id)!=-1){
               // console.log('选中');                
                _newArrar=origin_result.slice(0,_index+1);
                //console.log(_newArrar);
                //把这个数组中这个值前面全部取出来给响应 
                this.id_result=origin_result.slice(0,_index);               
            }else{
                // console.log('未选中')
                _newArrar=origin_result.slice(0,_index);
                //console.log(_newArrar);               
               //把这个数组中这个值前面保持不变，后面全删除  
               //把新数据组给响应数组
            }
            this.id_result=_newArrar;
            this.computePrice();
            //console.log(i,id, this.id_result)
        },
        AllofSelect(){
                if(document.getElementById("checkbox").checked){ //全选反选按钮 
                    this.id_result=origin_result;
                }else{
                    this.id_result=[]
                }
                this.computePrice();
        },
        computePrice(){
                    //计算已选中值的和
                    let currentQuota=0;
                    Object.entries(this.billDetail.rows).forEach( ([key,value])=>{
                            if(this.id_result.indexOf(value.id)!=-1){
                                 currentQuota+=value.payAmount;
                            }
                    });
                    this.currentQuota=currentQuota;
        },
        payNow(){
            //去支付
            if(this.id_result.length!=0){
                alert('去支付:'+this.id_result.toString());
            }
        },
        showMoreInfo(id){
            //<!--弹出框-->
            let nodeList={};     
            for (let [key,value] of Object.entries(this.billDetail.rows)) {                   
                   if(id==value.id){
                       nodeList=value;
                       break;
                   }                   
            } 
            if(!nodeList.id){return;}  //if nodelist.id==0 也符合, 注意
            //console.log(nodeList);
            //  {
                    //  "id": 1, //还款计划id
                    //     "payAmount": 402,  //当前应还
                    //     "endDate": "2017-11-27", //还款日期
                    //     "state": 3, //状态 0-逾期 1 已还清  3- 待还款 6-已取消
                    //     "currentTerm": 1, //当前期数
                    //     "currentCapital": 400,  //本金
                    //     "repayEarlyType": 1,  //是否提前还款免除分期服务费  1：是  0：不是
                    //     "currentFine": 2,   // 逾期违约金
                    //     "repayInterest": // 应还服务费

            // }

            let html=` <div class="threeColor">
                                <p>
                                    <span>分期：${nodeList.currentTerm}/${this.billInfo.term}</span>
                                    <span style="float:right">${nodeList.endDate} ${this.stateText(nodeList.state)}</span>                               
                                </p>
                                <p>本金：${this.number_format(nodeList.currentCapital)}</p>
                                <p>剩余应还服务费：${nodeList.repayEarlyType==1? '<s>'+this.number_format(nodeList.repayInterest) +'</s>'+ '<span class="nFcost_red">（提前还款已免除）</span>': this.number_format(nodeList.repayInterest)}</p>
                                <p>逾期违约金：${this.number_format(nodeList.currentFine)}</p>
                            </div>
                         `;
            Dialog.alert({
               // title:id,
                confirmButtonText:'确定',
                message: html
            }).then(() => {
                //
            });
            
        }
    }

   
  }
</script>


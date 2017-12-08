<template>
<div>

    <div class="all">
        <header class="record">            
            <p>{{billDetail.productName}}</p>
            <p><span>下单日期：{{billDetail.orderDate}}</span><span>订单号：{{billDetail.orderID}}</span></p>
            <p>申请流水：{{billDetail.applyFlow}}</p>
        </header>
        <div class="purchase threeColor">
            <p><span>申请金额(元)</span><span class="nFcost_red">{{billDetail.applyFlow}}</span></p>
            <p><span>期数</span><span class="nFcost_red">{{billDetail.periods}}期</span></p>
            <p><span>分期服务费</span><span class="nFcost_red">{{billDetail.installmentCharge}}</span></p>
            <p><span>逾期违约金</span><span class="nFcost_red">{{billDetail.penalty}}</span></p>
        </div>
        <div class="combinde threeColor">
            <span>合计：{{billDetail.totalQuota}}元</span>
            <span class="nFcost_red">待还：{{billDetail.needToPay}}元</span>
        </div>        
        
        
        <div>

            <van-checkbox-group v-model="id_result">
                <van-cell-group class="van-cell-group-refine">
                    <van-cell v-for="(e,i ) in billDetail.datalist" :key="i" class="cell-margin">
                        <van-checkbox  :data-price="e.currentQuota" @change.native="debug(i,e.id)" :name="e.id">{{e.currentQuota}}元</van-checkbox>  
                        <template slot="right-icon">                                              
                            <span class="van-cell__right-icon">
                                <span class="toRepay">{{e.payDate}} {{stateText(e.state)}}</span>
                                <img @click="showMoreInfo(e.id)" src="https://ssl.tuniucdn.com/img/2015070110/jinrong/baitiao/mNxh/gantan.png" class="gantanpro" />
                            </span>                          
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>


    
		</div>



        <div class="foot">
                <div class="checkBox">
                    <input type="checkbox" id="checkbox" @click="AllofSelect()" :checked="currentQuota>0">
                    <label for="checkbox"></label>
                </div>
                <span class="threeColor">已选 <span class="nFcost_red" id="payAmount">{{currentQuota}}</span> 元</span>
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

let trendFun=new TrendFun(); //公共函数库
let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;
const LISTSTATE=[];
LISTSTATE[1]='已还清';
LISTSTATE[2]='待还款';
LISTSTATE[3]='已逾期';

const origin_result=[];   //用于缓存当前所有的列表id

  export default {
    name: 'app',
    data(){
      return{
        //checkbox的name 相当于每个checkbox的value，
        id_result: [],  //如果checkbox选中的值在这个数组里，则选中,这里如果为空表示不选中,
        currentQuota:0, //已选中的id对应的应还价格总额     
        billDetail: {
                "id": 0,    
                "productName": "-",
                "orderDate": "-",
                "orderID": "-",
                "applyFlow": "-",
                "applyQuota": 0,
                "periods": 0,
                "state":0,
                "installmentCharge": 0,
                "penalty": 0,
                "totalQuota": 0,
                "needToPay": 0,
                "datalist":[]
        }
      }
    },
    created(){
        	let id=parseInt(this.$route.query.id,10)||0;   //0表示 显示全部
	        this.getDetail(id);
    },
    methods:{
        getDetail(id){
            	 __REQUEST.bizParams={
                    "id": id
                }     
                axios.post(__URILIST[2], __REQUEST).then( response=> {
                    if(response.data.success){                             
                            this.billDetail=response.data.data;	
                            //收集原始ID数组
                            Object.entries(response.data.data.datalist).forEach( ([key,value])=>{
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
            console.log(i,id, this.id_result)
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
                    Object.entries(this.billDetail.datalist).forEach( ([key,value])=>{
                            if(this.id_result.indexOf(value.id)!=-1){
                                 currentQuota+=value.currentQuota;
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
            for (let [key,value] of Object.entries(this.billDetail.datalist)) {                   
                   if(id==value.id){
                       nodeList=value;
                       break;
                   }                   
            } 
            if(!nodeList.id){return;}  //if nodelist.id==0 也符合, 注意
            //console.log(nodeList);
            //  {
            //     "id": 44,
            //     "currentQuota": 405,
            //     "payDate": "2017-11-27",
            //     "state": 2,
            //     "currentPeriod": 1,
            //     "quota": 400,
            //     "avoid":0,
            //     "installmentCharge": 0,
            //     "penalty": 2
            // }

            let html=` <div class="threeColor">
                                <p>
                                    <span>分期：${nodeList.currentPeriod}/${this.billDetail.periods}</span>
                                    <span style="float:right">${nodeList.payDate} ${this.stateText(nodeList.state)}</span>                               
                                </p>
                                <p>本金：${this.number_format(nodeList.quota)}</p>
                                <p>剩余应还服务费：${nodeList.avoid==1? '<s>'+this.number_format(nodeList.installmentCharge) +'</s>'+ '<span class="nFcost_red">（提前还款已免除）</span>': this.number_format(nodeList.installmentCharge)}</p>
                                <p>逾期违约金：${this.number_format(nodeList.penalty)}</p>
                            </div>
                         `;
            Dialog.alert({
               // title:id,
                confirmButtonText:'我知道了',
                message: html
            }).then(() => {
                //
            });
            
        }
    }

   
  }
</script>


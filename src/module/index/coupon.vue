<template>
    <div>
        <van-nav-bar title="优惠卷" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
        <van-tabs :active="active" @click="handleTabClick">
            <!-- <van-tab  title="已使用">ss </van-tab> -->
            <van-tab v-for="index in 2" :title="tabTitle(index)" :key="index">
                    <div class="ticket-list">
                        <ul class="cur-ticket-list">        
                            <li class="ticket-item" :class="(active /2) ? 'inactive':''" v-for="(item, li) in list" v-if="item.type==active" :key="li">
                                    <div class="ticket-header">
                                        <span class="amount">
                                                {{item.name}}                       
                                        </span>
                                        <span class="periods">                
                                                适用期数：{{item.availablePeriod}}			    
                                        </span>                
                                    </div>
                                    <div class="ticket-content">
                                        <div class="detail">
                                            <p class="orientation">{{item.subName}}</p>
                                            <p class="date">有效期：{{item.beginValidity}}至{{item.endValidity}}</p>
                                        </div>
                                        <div class="rules" :class="{'displayBlock':showID==item.id}">
                                            <p>使用规则</p>
                                            <p>1.新会员开通首付出发或老会员在会场可领取免息券，1、2、3期免息券随机发放；
                                            2.系统领取免息券后，在收银台直接使用
                                            </p>
                                        </div>
                                        <div class="link">
                                            <a href="javascript:;" @click="showDetail(item.id)" class="view-rule">查看规则</a>                    
                                            <a href="javascript:;" class="to-use">{{tabTitle(index)}}</a>
                                        </div>
                                    </div>
                            </li>
                            <div class="empty" v-if="!CouponLength(active)">
                                <img src="https://ssl.tuniucdn.com/img/20170209/jinrong/mNiukebao/drawer.png">
                                <p>暂无优惠券</p>
                            </div> 
                        </ul>
                    </div>
       
            </van-tab>
        </van-tabs>
    </div>  
</template>
    
<script>

   import axios from 'axios';
   import  * as _global from '../../plugs/global';
   import TrendFun from '../../plugs/function';

   let trendFun=new TrendFun(); //公共函数库
   let __REQUEST=trendFun.__REQUEST();
   let __URILIST=_global.URILIST;

   const couponType=['未使用','已使用'];
   export default {
    name: 'app',
    data(){
      return{
        active:  0,   //默认选中tab项 同时也和type当前已使用和未使用映射
         //.van-tabs__nav-bar{} 来修改样式 背景红线
         //过期或是已使用
        list:[
            // {
            //     type: 0,  //0 可用，1表示不可用或是过期
            //     name:"免息卷",
            //     subName:"3期免息券1",
            //     availablePeriod: "6期、12期、18期、24期", //适用期数
                
            //     beginValidity: "2017-11-27 15:03:54",  //有效期
            //     endValidity: "2017-11-27 15:03:54", 
            // }
           
         ],
         showID:-1
        
        
      }
    },
    created(){
        this.getCoupon();
        //console.log(this.CouponLength());
    },
    methods:{
        backIndex() {		  
		  this.$router.push({ path: '/'})
		  return;
	    },        
        handleTabClick(index){
            this.active=index;
           // console.log(index, this.active)
        },
        tabTitle(index){
            //console.log(index, this.active)
            return couponType[index-1];
        },
        getCoupon(){
            	__REQUEST.bizParams={
                    //"querytype": querytype
                }     
                axios.post(__URILIST[3], __REQUEST).then( response=> {
                    if(response.data.success){                             
							this.list=response.data.list;							
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
					console.log(error);
					//reject(error);
				}); 
        },
        CouponLength(type=0){
            //let arr=Object.keys(this.list);
            //let typeNum=0; //优惠卷数量
            if(this.list.length>0){
                   for (const i of this.list) {
                       if(i.type==type){
                           //typeNum++;
                           //break
                           return true;
                       }
                   }
            }
            return false;
        },
        showDetail(id){
            if(this.showID==id){
                this.showID=-1;
            }else{
                this.showID=id;
            }
            //return;
            //let idelement=document.getElementById("showDetail"+id);
            // console.log(idelement)
            // if(idelement){
            //     console.log(idelement.style.display);
            //     if(idelement.style.display=='block' || idelement.style.display==''){
            //         idelement.style.display='none'
            //     }else{
            //         idelement.style.display='block'
            //     }
                
            // }
            
        }
    } 
   
  }
</script>

    
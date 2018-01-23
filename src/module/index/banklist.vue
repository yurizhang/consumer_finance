<template>
  <div>
       <van-nav-bar title="我的银行卡" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
       <div class="bank-manage">
            <ul>
                <li class="bank-item" :class="'bg-'+e.bankCode" v-for="(e,i) in cardList" :key="i" @click="showActionSheet(e.cardUniqueId,i)">
                    <div class="bank-icon">
                        <span><img :src="'https://ssl.tuniucdn.com/img/201507010/jinrong/mNiukebao/pay/bankNew/'+e.bankCode+'.png'"></span>
                    </div>
                    <div class="bank-detail">
                        <p class="bank-name">{{e.bankName}}</p>                        
                        <p class="bank-type">{{e.cardTypeName}}</p>                                           
                        <p class="bank-id">{{e.cardNo}}</p>
                    </div>
                </li>

                       
                
                <!--
                    <li class="bank-item bg-ABC">
                    <div class="bank-icon">
                        <span><img src="https://ssl.tuniucdn.com/img/201507010/jinrong/mNiukebao/pay/bankNew/ABC.png"></span>
                    </div>
                    <div class="bank-detail">
                        <p class="bank-name">农业银行</p>                            
                        <p class="bank-type">储蓄卡</p>                          
                        <p class="bank-id">622848*********2741</p>
                    </div>
                </li>
                -->
            </ul>
            <div class="add-btn">
                <router-link  to="/addbank">添加银行卡</router-link>
            </div>
        </div>
        <div class="tips">
            <h6>小贴士：</h6>
            <ul>
                <li>1.自动还款将在还款日当日扣减；</li>
                <li>2.银行卡代扣不区分优先级；</li>
                <li>3.扣款前后及时短信通知，让您了解最新还款信息。</li>
            </ul>
        </div>
        <van-actionsheet v-model="toggleActionSheet" :actions="actions" cancelText="取消"></van-actionsheet>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant';
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';

//let trendFun=new TrendFun(); //公共函数库
//let __REQUEST=trendFun.__REQUEST();
let __URILIST=_global.URILIST;

  const BankList=[];

  export default {
    name: 'app',
    data(){
      return{
        cardList:[],

        toggleActionSheet:false,
        actions: [
            {
                id:0,
                index:0,
                name: '解除绑定',
                callback: this.onUnbind
            }        
        ]
      }
    },
    created(){
        this.getCardList();
    },
    methods:{
        backIndex() {		  
		  this.$router.push({ path: '/', query: { from: 'banklist' }})
		  return;

	    },
        getCardList(){
            	let request={                  
                }     
                axios.post(__URILIST[4], request).then( response=> {
                    if(response.data.success){                             
                            this.cardList=response.data.data.cardList;	
                            if(response.data.data.state==1){
                                 Dialog.confirm({
                                        title: '提示',
                                        message: '尊敬的用户，为了给您更好的服务体验，首付出发业务将不再支持途牛宝与途牛钱包代扣，为您带来的不便，我们深感歉意。点击确定按钮将自动为你解除绑定。 '
                                }).then(() => {
                                    axios.post(__URILIST[12]).then(_=>{
                                        Dialog.alert({message:"解除成功"});
                                    });
                                }).catch(()=>{
                                    //聚会回到首页
                                    this.$router.push({ path: '/', query: { from: 'banklist' }})
                                });
                            }						
                    }else{
                        alert(response.data.msg);
                    }
                    
                }).catch((error) =>{
					//console.log(error);
					//reject(error);
				}); 
        },
        showActionSheet(id,index){
            this.toggleActionSheet=true;
            this.actions[0].id=id;  //可以独立观察这个id
            this.actions[0].index=index; 
        },
        onUnbind(item){
            Dialog.confirm({
                    title: '提示',
                    message: '您确认要取消绑定这张卡吗? '
            }).then(() => {
                this.toggleActionSheet=false;
                Toast.loading({ mask: true,duration: 0 }); //一直提示
                let request={
                    "cardUniqueId": item.id
                }
              // setTimeout(()=>{                 
                axios.post(__URILIST[5], request).then( response=> {
                    Toast.clear();
                    if(response.data.success){                             
                        //console.log(item.id);
                        this.cardList.splice(item.index,1);                                         
                        Toast.success("您已成功解除了绑定.");							
                    }else{
                        alert(response.data.msg);
                        //Toast.fail('失败文案');
                    }                    
                }).catch((error) =>{
					console.log(error);					
				}); 
                
               // },3000); 
 
                // on confirm
            }).catch(() => {
                this.toggleActionSheet=false;
            });
        }
    }
   
  }
</script>

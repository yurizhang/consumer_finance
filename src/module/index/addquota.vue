<template>
<div>

    <van-nav-bar title="我的首付出发" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
 
    <div class="form-table" v-if="currentStep">
        <div class="form-line">
            <label class="form-label">当前额度</label>
            <p class="form-input">{{orderQuota}}</p>
        </div>
        <div class="form-line">
            <label class="form-label">可提升额度至</label>
            <p class="form-input">{{sLimit}}</p>
        </div>
        <div class="form-line">
            <label class="form-label">预留手机号</label>
            <p class="form-input">               
              {{cellPhone}}
            </p>
        </div>
        <div class="form-line">
            <label class="form-label">验证码</label>
            <p class="form-input"><input type="text" placeholder="点击获取验证码" maxlength="6" v-model="code">
                <input type="button" :value="'获取验证码'+ timeout" @click="sendCode" class="get-code">
            </p>
        </div>        
    </div>
  

    <a href="javascript:;" class="btn-primary" @click="controllStep()"  v-if="currentStep">确认提额</a>


 <div class="result" v-if="result_success">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_success.png">
        <p class="result-title">额度调整成功</p>
        <p class="result-info">
            <ul>
             
                <li>恭喜你当前的额度已调整<span class="result-price">{{sLimit}}元</span>.</li>
                <li>临时额度使用限制：不能用于机票，酒店和火车票预定.</li>
            </ul>
        </p>

        <router-link  to="/" class="btn">
        查看我的首付出发
        </router-link>
    </div>
    <div class="result" v-if="result_fail">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_fail.png">
        <p class="result-info">
            <span>抱歉，您暂时无法调整额度</span><br>            
        </p>
        <a href="javascript:;" @click="backIndex" class="btn">返回</a>
    </div>



</div>  
</template>
<<script>
//import { Field } from 'vant';
//Vue.component(Field.name, Field); 如果下面的components不为空，这里不用引入

import { Dialog } from 'vant';
import axios from 'axios';
import  * as _global from '../../plugs/global';
import TrendFun from '../../plugs/function';
let trendFun=new TrendFun();
const __URILIST = _global.URILIST;


export default {
  name: "addQuota",
  data(){
      return {
  
          orderQuota:'', //当前额度
          sLimit:'',   //可提升额度至
          bizType: '', //12 // 12 临时额度  1 固定额度
          cellPhone:'',
          code:'',
         // fingerPrint: trendFun.getSingleCookie("BSFIT_DEVICEID"),


          
          //倒计时
          timeout:"",
          //以下控制 
          currentStep:true, //表示当前第几步

          result_success: false,  //显示成功
          result_fail:false  //显示失败

      }
  },
  created(){
      //查询可提升的额度 
      axios.get(__URILIST[18]).then(response => {
          if (response.data.success) {
                this.orderQuota=response.data.data.orderQuota;  //当前额度
                this.sLimit=response.data.data.sLimit; //可提升额度至  
                this.cellPhone=response.data.data.cellPhone;
                this.bizType=response.data.data.bizType;
          } else {
            alert(response.data.msg);
          }
        })

  },
  methods: {
    backIndex() {		  
		  this.$router.push({ path: '/'});  // , query: { from: 'list' }}
		  return;
        //   Dialog.alert({
        //     message: '弹窗内容---'
        //   }).then(() => {
        //       alert("clsoed");
        //   });
	},
    controllStep(){
        //console.log(this.currentStep);

        

            // if(!trendFun.checkPhone(this.cellPhone)){
            //      Dialog.alert({message:"请输入正确的手机号码."});
            //      return;
            // }

            if(this.code==""){
                 Dialog.alert({message:"请输入验证码."});
                 return;
            }
            let request={
               // cardNo: this.cardNo, // 卡号
                //phone: this.cellPhone, // 手机号码
                verifyCode: this.code,  // 验证码
                //fingerPrint: this.fingerPrint,  // 指纹字段  风控字段
                bizType:this.bizType
            } 
            
            axios.post(__URILIST[19],request).then(response => {
                this.currentStep=false;
                if (response.data.success) {
                      this.result_success=true;
                } else {
                      this.result_fail=true;
                    //alert(response.data.msg);
                }
            });


    },

    sendCode(){
           if(this.timeout!=""){
               return;
           }
            // if(!trendFun.checkPhone(this.cellPhone)){
            //      Dialog.alert({message:"请输入正确的手机号码."});
            //      return;
            // }          
      
           axios.post(__URILIST[17]).then(response => {
               if (response.data.success) {
                    Dialog.alert({message:"短信验证码已发送到你手机."});
               }else{
                   Dialog.alert(response.data.msg);
                   this.timeout="";
               }
            });

            let i=0, second=60; //倒计时多少秒
            let to=setInterval(_=>{
                if(i<second){
                    this.timeout=(second-i);
                    i++;
                }else{
                    clearInterval(to);
                    this.timeout="";
                    i=0;                   
                }	
            },1000);


    }
  }


}
</script>


<template>
<div>

    <van-nav-bar title="我的首付出发" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
    <div class="form-table add-bank-card" v-if="oneStep">
        <div class="form-line">
            <label class="form-label">持卡人姓名</label>
            <p class="form-input">{{userName}}</p>
        </div>
        <div class="form-line">
            <label class="form-label">身份证号</label>
            <p class="form-input">{{idNo}}</p>
        </div>
        <div class="form-line">
            <label class="form-label">银行卡号</label>
            <p class="form-input">
                <van-field
                    v-model="cardNo"                   
                    id="cardNo"
                    ref="cardNo"               
                    type="text" 
                    icon="clear" 
                    placeholder="请输入支持银行卡号"
                    required
                    @click-icon="cardNo = ''"
                >
                </van-field>

            </p>
            <p><a href="javascript:;" @click="supportBankList()" class="support">支持银行</a></p>
        </div>

    </div>

    <template v-if="twoStep">
    <div class="bank-box" v-if="bankinfo.bankCode">
        <span class="bank-icon" :class="bankinfo.bankCode"></span>
        <span class="bank-name">{{bankinfo.bankName}}<i>({{CARDTYPE[bankinfo.cardType]}})</i></span>
    </div>

    <div class="form-table">
        <div class="form-line">
            <label class="form-label">预留手机号</label>
            <p class="form-input">               
                <van-field
                    v-model="phoneNumber"                   
                    id="phoneNumber"
                    type="number"
                    icon="clear"
                    maxlength="11" 
                    placeholder="请输入银行预留手机号"
                    required
                    @click-icon="phoneNumber = ''"
                >
                </van-field>
            
            </p>
        </div>
        <div class="form-line">
            <label class="form-label">验证码</label>
            <p class="form-input"><input type="text" placeholder="点击获取验证码" maxlength="6" v-model="code">
                <input type="button" :value="'获取验证码'+ timeout" @click="sendCode" class="get-code">
            </p>
        </div>        
    </div>
    </template>

    <a href="javascript:;" class="btn-primary" @click="controllStep()" v-if="currentStep < 3">下一步</a>


    <div class="result" v-if="result_success">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_success.png">
        <p class="result-info">添加成功</p>
        <router-link  to="/" class="btn">
        查看我的首付出发
        </router-link>
    </div>
    <div class="result" v-if="result_fail">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_fail.png">
        <p class="result-info">
            <span>出错啦</span><br>
            <span class="jump-info"  @click="backIndex">点击返回，再试一次</span>
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

const banklist=`
    <div class="bank-support-list">
       <div class="bank-list show">
            <ul id="debitBanks">

                <li><span class="bank-icon SZPAB"></span><span class="bank-name">平安银行</span></li>
                <li><span class="bank-icon CMB"></span><span class="bank-name">招商银行</span></li>
                <li><span class="bank-icon BOS"></span><span class="bank-name">上海银行</span></li>
                <li><span class="bank-icon HXB"></span><span class="bank-name">华夏银行</span></li>
                <li><span class="bank-icon SPDB"></span><span class="bank-name">浦东发展银行</span></li>
                <li><span class="bank-icon BCCB"></span><span class="bank-name">北京银行</span></li>
                <li><span class="bank-icon COMM"></span><span class="bank-name">交通银行</span></li>
                <li><span class="bank-icon PSBC"></span><span class="bank-name">中国邮储银行</span></li>
                <li><span class="bank-icon CMBC"></span><span class="bank-name">民生银行</span></li>
                <li><span class="bank-icon CEB"></span><span class="bank-name">光大银行</span></li>
                <li><span class="bank-icon CITIC"></span><span class="bank-name">中信银行</span></li>
                <li><span class="bank-icon CIB"></span><span class="bank-name">兴业银行</span></li>
                <li><span class="bank-icon CCB"></span><span class="bank-name">建设银行</span></li>
                <li><span class="bank-icon GDB"></span><span class="bank-name">广东发展银行</span></li>
                <li><span class="bank-icon ABC"></span><span class="bank-name">农业银行</span></li>
                <li><span class="bank-icon BOC"></span><span class="bank-name">中国银行</span></li>
                <li><span class="bank-icon ICBC"></span><span class="bank-name">工商银行</span></li>           

            </ul>
        </div>
    </div>
`;

const CARDTYPE=[];  //cardType卡类型1借记卡 2信用卡 0银行卡（未知卡）
CARDTYPE[1]='借记卡';
CARDTYPE[2]='信用卡';
CARDTYPE[0]='银行卡';
export default {
  name: "addBank",
  data(){
      return {
          cardNo:'', //银行卡号
          userName:'',
          idNo:'',
          phoneNumber:'',
          code:'',
          fingerPrint: trendFun.getSingleCookie("BSFIT_DEVICEID"),


          bankinfo:{

          },  //第二步的银行信息
          
          //倒计时
          timeout:"",
          //以下控制 
          currentStep:1, //表示当前第几步

          result_success: false,  //显示成功
          result_fail:false, //显示失败

          oneStep: true,  //上一步
          twoStep: false,  //下一步
          CARDTYPE
      }
  },
  created(){
      //api/card/realinfo
      //实名信息
      axios.get(__URILIST[13]).then(response => {
          if (response.data.success) {
                this.idNo=response.data.data.idNo;  // 身份证号
                this.userName=response.data.data.idNo; // 姓名           
          } else {
            alert(response.data.msg);
          }
        })

  },
  methods: {
    backIndex() {		  
		  this.$router.push({ path: '/banklist'});  // , query: { from: 'list' }}
		  return;
        //   Dialog.alert({
        //     message: '弹窗内容---'
        //   }).then(() => {
        //       alert("clsoed");
        //   });
	},
    supportBankList() {
          Dialog.alert({
            title:'储蓄卡',
            message: banklist
          }).then(() => {
              //alert("clsoed");
          });

    },
    async controllStep(){
        //console.log(this.currentStep);

        if(this.currentStep==1){
            //当前在第一步，跳到第二步
            //js验证
            if(this.cardNo.length<8){
                Dialog.alert({message:"错误的银行卡号."}).then(()=>{                     
                     //document.querySelector("#cardNo").focus();                     
                     //const input = this.$refs['cardNo'].focus();
                     //console.log(this.$refs['cardNo']);
                     
                });
                return;
            }
            //验证银行卡信息
            let request={
                cardNo:this.cardNo, //银行卡号
                type:2  // 1：开通时实名验证，2：添加银行卡代扣卡
            }
            // axios.post(__URILIST[14],request).then(response => {
            //         if (response.data.success) {                            
            //                 this.bankinfo= response.data.data;   
            //                 // {
            //                 //     "bankCode" : "BCCB",
            //                 //     "bankName" : "北京银行",
            //                 //     "cardType" : 1 // 卡类型1借记卡 2信用卡 0银行卡（未知卡）
            //                 // } 
            //                 this.oneStep=false;            
            //                 this.currentStep=2;
            //                 //得到银行卡号
            //                 //ajax显示一下
            //                 this.twoStep=true; //进入第二步                                     
            //         } else {
            //             Dialog.alert({message:response.data.msg})
            //             //alert(response.data.msg);
            //         }
            // });           

            let response= await this.getBankinfo(request);
            if(response.success){
                this.bankinfo= response.data;
                this.oneStep=false;
                this.currentStep=2;
                this.twoStep=true;
            }else{
                 Dialog.alert({message:response.msg})
            }
            //console.log(this.bankinfo);
            

        }else if(this.currentStep==2){
            //当前在第2步，跳到第3步 显示成功或是失败
            //js验证
            //手机号或是验证码    

            if(!trendFun.checkPhone(this.phoneNumber)){
                 Dialog.alert({message:"请输入正确的手机号码."});
                 return;
            }

            if(this.code==""){
                 Dialog.alert({message:"请输入验证码."});
                 return;
            }
            let request={
                cardNo: this.cardNo, // 卡号
                phone: this.phoneNumber, // 手机号码
                verifyCode: this.code,  // 验证码
                fingerPrint: this.fingerPrint,  // 指纹字段  风控字段
                type:2 // 区分验证码是实名还是添加卡 2 添加银行卡
            } 
            
            axios.post(__URILIST[15],request).then(response => {
                if (response.data.success) {
                            
                            this.twoStep=false;  //关闭第二步        
                            this.currentStep=3;
                        
                            this.result_success=true;
                            //this.result_fail=true;

                } else {
                    this.result_success=false;
                    this.result_fail=true;
                    //alert(response.data.msg);
                }
            });

            

        }

    },
    async getBankinfo(request){
        //根据银行卡号得到这个信息的基本信息ajax
        //let res={};
        let p=new Promise((resolve,reject)=>{            
            axios.get(__URILIST[14],{params:request}).then(response => {
                resolve(response.data);
            }) 
        });
        return await p.then((res)=>{
           // console.log(res);
            return res;  //return出当前层
        })       
        
    },
    sendCode(){
           if(this.timeout!=""){
               return;
           }
            if(!trendFun.checkPhone(this.phoneNumber)){
                 Dialog.alert({message:"请输入正确的手机号码."});
                 return;
            }           
           let req={
                phone:this.phoneNumber,  // 电话号码   
                type:2 // 1：开通实名，2：添加代扣卡
            }
           axios.post(__URILIST[16],req).then(response => {
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


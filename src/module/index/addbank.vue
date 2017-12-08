<template>
<div>

    <van-nav-bar title="我的首付出发" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
    <div class="form-table add-bank-card" v-if="oneStep">
        <div class="form-line">
            <label class="form-label">持卡人姓名</label>
            <p class="form-input">*磊</p>
        </div>
        <div class="form-line">
            <label class="form-label">身份证号</label>
            <p class="form-input">3****************3</p>
        </div>
        <div class="form-line">
            <label class="form-label">银行卡号</label>
            <p class="form-input">
                <van-field
                    v-model="cardNo"                   
                    id="cardNo"
                    type="number"
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


    <div class="form-table" v-if="twoStep">
        <div class="form-line">
            <label class="form-label">预留手机号</label>
            <p class="form-input">               
                <van-field
                    v-model="phoneNumber"                   
                    id="phoneNumber"
                    type="number"
                    icon="clear"
                    placeholder="请输入银行预留手机号"
                    required
                    @click-icon="phoneNumber = ''"
                >
                </van-field>
            
            </p>
        </div>
        <div class="form-line">
            <label class="form-label">验证码</label>
            <p class="form-input"><input type="text" placeholder="点击获取验证码" id="verifyCode">
                <input type="button" value="获取验证码"  class="get-code">
            </p>
        </div>        
    </div>
    <a href="javascript:;" class="btn-primary" @click="controllStep()" v-if="currentStep < 3">下一步</a>


    <div class="result" v-if="result_success">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_success.png">
        <p class="result-info">添加成功</p>
        <a href="/xdm/m/index/main" class="btn">查看我的首付出发</a>
    </div>


    <div class="result" v-if="result_fail">
        <img src="https://ssl.tuniucdn.com/img/20161207/fin/chm/sfcf/result_fail.png">
        <p class="result-info">
            <span>出错啦</span><br>
            <span class="jump-info">点击返回，再试一次</span>
        </p>

        <a href="/xdm/m/card/cardManage" class="btn">返回</a>
    </div>



</div>  
</template>
<<script>
//import { Field } from 'vant';
//Vue.component(Field.name, Field); 如果下面的components不为空，这里不用引入

import { Dialog } from 'vant';
let banklist=`
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
export default {
  name: "addBank",
  data(){
      return {
          cardNo:'',
          phoneNumber:'12345',
          
          
          //以下控制 
          currentStep:1, //表示当前第几步

          result_success: false,  //显示成功
          result_fail:false, //显示失败

          oneStep: true,  //上一步
          twoStep: false  //下一步
      }
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
    controllStep(){
        console.log(this.currentStep);

        if(this.currentStep==1){
            //当前在第一步，跳到第二步
            //js验证
            this.oneStep=false;
            this.twoStep=true;
            this.currentStep=2;
        }else if(this.currentStep==2){
            //当前在第2步，跳到第3步 显示成功或是失败
            //js验证
            //ajax
            this.twoStep=false;            
            this.result_success=true;
            //this.result_fail=false;

            this.currentStep=3;
        }

    }
  }


}
</script>


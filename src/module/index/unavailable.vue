<template>
<div>
    <div class="form-table">
        <div class="form-line">
            <label class="form-label">持卡人姓名</label>
            <p class="form-input"><input type="text" id="accName" placeholder="请输入姓名"></p>
        </div>
        <div class="form-line">
            <label class="form-label">身份证号</label>
            <p class="form-input"><input type="text" id="idCode" placeholder="请输入身份证号"><span class="close">×</span></p>
        </div>
        <div class="form-line">
            <label class="form-label">银行卡号</label>
            <p class="form-input"><input type="number" id="cardNo" maxlength="25" placeholder="请输入支持银行卡号" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"><span class="close">×</span></p>
            <a href="javascript:;" class="support">支持银行</a>
        </div>

    </div>

    <a href="javascript:;" class="btn-primary">下一步</a>


    <!--银行支持列表-->
    <div class="bank-support-list" style="display: none">
        <div class="bank-tab">
            <a href="javascript:;" class="cur">储蓄卡</a>
            <a href="javascript:;">信用卡</a>
        </div>
        <div class="bank-list show">
            <ul id="debitBanks"></ul>
        </div>
        <div class="bank-list">
            <ul id="creditBanks"></ul>
        </div>
    </div>


     <!-- 下一步 -->
        <div class="form-table">
            <div class="form-line">
                <label class="form-label">预留手机号</label>
                <p class="form-input"><input type="tel" id="phone" maxlength="11" placeholder="请输入银行预留手机号"></p>
            </div>
            <div class="form-line">
                <label class="form-label">验证码</label>
                <p class="form-input"><input type="number" id="verifyCode" maxlength="6" placeholder="点击获取验证码">
                    <input type="button" id="getVerifyCode" value="获取验证码"  class="get-code">
                </p>
            </div>
            <div class="agreement">
                <p id="xieyi_agree"><i class="icon-checkbox"></i>我同意 <a href="javascript:;" class="agreement-link">《用户协议》</a></p>
                <p id="daikou_agree" style="display:none;"><i class="icon-checkbox"></i>我同意设置该银行卡为代扣卡</p>
            </div>
            <div class="error"></div>
            <a href="javascript:;" class="btn-primary">下一步</a>
        </div>

        <input type="hidden" id="target" value=""/>
        <input type="hidden" id="orderId" value=""/>
        <input type="hidden" id="orderType" value=""/>
        <form action="/xdm/m/index/nsf/toCheckFailMsg" method="post" name="registerResult" id="registerResult">
            <input type="hidden" id="result_msg" name="msg" value=""/>
            <input type="hidden" id="result_target" name="target" value=""/>
            <input type="hidden" id="result_orderType" name="orderType" value=""/>
            <input type="hidden" id="result_orderId" name="orderId" value=""/>
        </form>
        <div class="agreement-box" style="display: none">
            <a href="https://ssl.tuniucdn.com/img/20160712/jinrong/files/creditInforQueryAuthorization.jpg" class="agreement-item">信用信息查询授权书</a>
            <a href="/xdm/m/card/baitiao/contact" class="agreement-item">消费信贷业务服务协议</a>
        </div>







</div>
  
</template>


<script>
export default {
  
}
</script>


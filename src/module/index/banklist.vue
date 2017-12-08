<template>
  <div>

       <div class="bank-manage">
            <ul>               
                
                <li class="bank-item bg-CMB" cardUniqueId="10011960">
                    <div class="bank-icon">
                        <span><img src="https://ssl.tuniucdn.com/img/201507010/jinrong/mNiukebao/pay/bankNew/CMB.png"></span>
                    </div>
                    <div class="bank-detail">
                        <p class="bank-name">招商银行</p>
                        
                        <p class="bank-type">储蓄卡</p>
                        
                        
                                    
                        <p class="bank-id">621485******1106</p>
                    </div>
                </li>
                
                
            </ul>
            <div class="add-btn">
                <router-link  to="/addbank"> 添加银行卡</router-link>
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




  </div>
</template>
<script>

  export default {
    name: 'app',
    data(){
      return{
        version:  '2.0.0'
      }
    }   
   
  }
</script>

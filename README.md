消费金融webview项目 类支付里借呗和花呗的结合体

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## module

### 我的模块、首页模块：
- components/Revise
  - reviseName      修改昵称
  - revisePsw       修改支付密码   /module/revise.html#/revisePsw
  - setPsw          设置支付密码   /module/revise.html#/setpsw
  - selectBankCard  选择银行卡     /module/revise.html#/seletbank
  - comfirmInfo     确认个人身份   /module/revise.html#/comfirminfo/:bankcard
  - vCode           输入验证码     /module/revise.html#/vcode

- components/Help 帮助模块
  - questionList   常见问题列表   /module/help.html#/question
  - questionDetail 常见问题详细   /module/help.html#//question/:pid/:id
  - about          关于小黑鱼     /module/help.html#/about

- components/User 个人中心模块
  - info           消息中心  /module/user.html#/info
  - ticket         优惠券    /module/user.html#/ticket
  - limit          额度      /module/user.html#/limit

### 交易记录、账单模块:
- components/Bills 账单模块
  - bills_history 历史账单     /module/bills.html#/bills   
  - bills_month   历史账单明细  /module/bills.html#/billsList?billType=3&month=2016-12&statementId=123  （billType=1 本月账单 billType=2 未出帐账单   billType=3 历史账单）  
    如果（billType=1和2 后面不会传month=2016-12&statementId=123
  - trade_detail  交易详细   /module/bills.html#/trade/:id
  

### 代你还模块
  - components/Repayment
    - repayment_history 代你还分期详细  /module/repayment.html#/
    - repayment_detail  代你还分期记录  /module/repayment.html#/detail

## 项目截图 ##


![Image text](https://raw.githubusercontent.com/yurizhang/micro-finance-admin-system/master/src/assets/20180103162358.png)
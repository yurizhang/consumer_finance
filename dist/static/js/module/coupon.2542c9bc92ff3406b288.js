webpackJsonp([5],{105:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},155:function(e,t){},156:function(e,t){},221:function(e,t){},222:function(e,t){},223:function(e,t){},224:function(e,t){},231:function(e,t){},256:function(e,t,n){function r(e){n(544)}var o=n(27)(n(275),n(596),r,null,null);e.exports=o.exports},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79),o=(n.n(r),n(78)),a=n.n(o),i=n(64),u=(n.n(i),n(63)),s=n.n(u),c=n(22),l=n.n(c),f=n(547),m=n.n(f),d=n(31),g=new d.a;t.default={name:"app",data:function(){return{phoneNumber:g.getCookie("phoneNumber"),code:"",showcontent:!1,URL:"http://10.10.32.237:8181/opl/promotion/getGift",URL2:"http://10.10.32.237:8181/opl/promotion/sendMessage",focusState:!1,body:{backgroundImage:"url("+n(565)+")",backgroundRepeat:"no-repeat",backgroundSize:"100%"},timeout:""}},methods:{checkPhone:function(e){return!!/^1[345789]\d{9}$/.test(e)},getCoupon2:function(){var e=this,t=this.phoneNumber;if(""==t||!this.checkPhone(t))return void s.a.alert({title:"提示",message:"您输入的手机号码有误"}).then(function(){e.focusState=!0,setTimeout(function(){e.focusState=!1},2e3)});var n=this.code;if(""==n)return void s.a.alert({title:"提示",message:"您输入验证码有误"});var r={smsCode:n,phoneNum:this.phoneNumber,type:1,desc:""},o=a.a.loading({duration:0,forbidClick:!0,message:"拼命加载中..."});l.a.post(this.URL,m.a.stringify(r)).then(function(e){o.clear(),e.data.success?s.a.alert({title:"提示",message:"恭喜您领取成功。"}).then(function(){location.href="http://8.m.tuniu.com/xdm/m/index/ticket"}):s.a.alert({title:"提示",message:e.data.msg})}).catch(function(e){o.clear(),s.a.alert({title:"提示",message:"发生了网络错误.请稍后再试."})})},sendCode:function(){var e=this,t=this.phoneNumber;if(""==t||!this.checkPhone(t))return void s.a.alert({title:"提示",message:"您输入的手机号码有误"}).then(function(){e.focusState=!0,setTimeout(function(){e.focusState=!1},2e3)});if(""!=this.timeout)return void s.a.alert({title:"提示",message:"请在"+this.timeout+"秒后再试"});var n=void 0,r={phoneNum:this.phoneNumber,type:2};l.a.post(this.URL2,m.a.stringify(r)).then(function(t){if(t.data.success){s.a.alert({message:"短信验证码已发送到您手机."});var r=0;n=setInterval(function(t){r<60?(e.timeout=60-r,r++):(clearInterval(n),e.timeout="",r=0)},1e3)}else 1600300==t.data.errorCode?(clearInterval(n),e.timeout="",s.a.alert({title:"提示",confirmButtonText:"去开通",message:t.data.msg}).then(function(e){location.href=" https://8.m.tuniu.com/xdm/m/index/nsf/agreement/0/2"})):(clearInterval(n),e.timeout="",s.a.alert({title:"提示",message:t.data.msg}))})}}}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(114),o=(n.n(r),n(113)),a=n.n(o),i=n(110),u=(n.n(i),n(109)),s=n.n(u),c=n(249),l=(n.n(c),n(248)),f=n.n(l),m=n(112),d=(n.n(m),n(111)),g=n.n(d),p=n(108),v=(n.n(p),n(77)),h=n.n(v),k=n(107),y=(n.n(k),n(38)),b=n(256),_=n.n(b),x=n(231);n.n(x);y.default.use(h.a),y.default.use(g.a),y.default.use(f.a),y.default.use(s.a),y.default.use(a.a),new y.default({el:"#app",template:"<App/>",components:{App:_.a}})},31:function(e,t,n){"use strict";var r=n(167),o=n.n(r),a=n(168),i=n.n(a),u=function(){function e(){o()(this,e)}return i()(e,[{key:"test",value:function(){alert("test ok:"+this.getCookie("test_cookie"))}},{key:"autoHideTitle",value:function(e){if(this.getCookie("appVersion")){var t=document.getElementById("mt-header");t&&(1==e?t.style.display="none":t.style.visibility="hidden");var n=document.querySelector("#mt-header>h1.mint-header-title").innerText;n&&(document.title=n)}}},{key:"__REQUEST",value:function(){var e=this.getNewCookie();return{clientTypeFlag:"h5",token:e.token||"",phoneNumber:e.phoneNumber||"",bizParams:{}}}},{key:"getNewCookie",value:function(){var e=[],t=document.cookie.split(";"),n=void 0;return t.forEach(function(t){n=t.trim().split("="),e[n[0]]=n[1]}),e}},{key:"getSingleCookie",value:function(e){for(var t=document.cookie.split(";"),n=void 0,r=0;r<t.length;r++)if(n=t[r].trim().split("="),n.length>1&&n[0]==e)return n[1];return""}},{key:"to_locale_time",value:function(e){if(!e)return"-";isNaN(Date.parse(e))&&(e=e.replace(/-/g,"/").replace("T"," ").replace("+00:00","Z"));var e=Date.parse(e),t=new Date(e),n=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e};return t.getFullYear()+"/"+n(t.getMonth()+1,2)+"/"+n(t.getDate(),2)+" "+n(t.getHours(),2)+":"+n(t.getMinutes(),2)+":"+n(t.getSeconds(),2)}},{key:"date",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n=t?new Date(1e3*t):new Date,r=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e},o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},i=["","January","February","March","April","May","June","July","August","September","October","November","December"],u={d:function(){return r(u.j(),2)},D:function(){return u.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return o[u.w()]},N:function(){return u.w()+1},S:function(){return a[u.j()]?a[u.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var e,t=u.z(),r=364+u.L()-t,o=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1;return r<=2&&(n.getDay()||7)-1<=2-r?1:t<=2&&o>=4&&t>=6-o?(e=new Date(n.getFullYear()-1+"/12/31"),date("W",Math.round(e.getTime()/1e3))):1+(o<=3?(t+o)/7:(t-(7-o))/7)>>0},F:function(){return i[u.n()]},m:function(){return r(u.n(),2)},M:function(){return u.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var e;return 2==(e=n.getMonth()+1)?28+u.L():1&e&&e<8||!(1&e)&&e>7?31:30},L:function(){var e=u.Y();return 3&e||!(e%100)&&e%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return u.a().toUpperCase()},B:function(){var e=60*(n.getTimezoneOffset()+60),t=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+e,r=Math.floor(t/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1==String(r).length&&(r="00"+r),2==String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(u.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var e=r(Math.abs(n.getTimezoneOffset()/60*100),4);return e=n.getTimezoneOffset()>0?"-"+e:"+"+e},P:function(){var e=u.O();return e.substr(0,3)+":"+e.substr(3,2)},c:function(){return u.Y()+"-"+u.m()+"-"+u.d()+"T"+u.h()+":"+u.i()+":"+u.s()+u.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(e,t){return e!=t?t:u[t]?u[t]():t})})},{key:"replaceRevStr",value:function(e){var e=e;if(""==e)return"";var t={"<":"&lt;",">":"&gt;"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"replaceStr",value:function(e){var e=e;if(""==e)return"";var t={"&lt;":"<","&gt;":">"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"setCookie",value:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3),document.cookie=e+"="+escape(t)+(null==n?"":"; expires="+r.toGMTString()+"; path=/")}},{key:"getCookie",value:function(e){for(var t=e+"=",n=t.length,r=document.cookie.length,o=0;o<r;){var a=o+n;if(document.cookie.substring(o,a)==t)return this.GetCookieVal(a);if(0==(o=document.cookie.indexOf(" ",o)+1))break}return null}},{key:"GetCookieVal",value:function(e){var t=document.cookie.indexOf(";",e);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))}},{key:"deleteCookie",value:function(e){var t=new Date;t.setTime(t.getTime()-864e5);var n=GetCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString()+"; path=/")}},{key:"number_format",value:function(e,t,n,r,o){e=(e+"").replace(/[^0-9+-Ee.]/g,""),o=o||"floor";var a=isFinite(+e)?+e:0,i=isFinite(+t)?Math.abs(t):0,u=void 0===r?",":r,s=void 0===n?".":n,c="";c=(i?function(e,t){var n=Math.pow(10,t);return console.log(),""+parseFloat(Math[o](parseFloat((e*n).toFixed(2*t))).toFixed(2*t))/n}(a,i):""+Math.round(a)).split(".");for(var l=/(-?\d+)(\d{3})/;l.test(c[0]);)c[0]=c[0].replace(l,"$1"+u+"$2");return(c[1]||"").length<i&&(c[1]=c[1]||"",c[1]+=new Array(i-c[1].length+1).join("0")),c.join(s)}},{key:"getUrlParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):""}},{key:"GetRandomNum",value:function(e,t){var n=t-e,r=Math.random();return e+Math.round(r*n)}},{key:"checkPhone",value:function(e){return!!/^1[34578]\d{9}$/.test(e)}}]),e}();t.a=u},544:function(e,t){},565:function(e,t,n){e.exports=n.p+"static/img/bg.4adf71f.jpg"},566:function(e,t,n){e.exports=n.p+"static/img/box.65c00da.png"},567:function(e,t,n){e.exports=n.p+"static/img/btn.b3764ca.png"},568:function(e,t,n){e.exports=n.p+"static/img/formarea.a291933.png"},569:function(e,t,n){e.exports=n.p+"static/img/logo.bf0b984.png"},596:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container center",style:e.body},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"center formarea"},[e._m(3),e._v(" "),r("div",{staticClass:"formarea2"},[r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入您的手机号码",maxLength:"11"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),e._v(" "),r("p",{staticClass:"codearea"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"input code",attrs:{type:"text",placeholder:"输入验证码",maxLength:"6"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),r("van-button",{staticClass:"codeBtn",attrs:{size:"small"},on:{click:e.sendCode}},[e._v("获取验证码"+e._s(e.timeout))])],1),e._v(" "),r("p",{staticClass:"button",on:{click:e.getCoupon2}},[r("img",{attrs:{src:n(567)}})])])]),e._v(" "),r("div",{staticClass:"center texttitle"},[r("p",{on:{click:function(t){e.showcontent=!0}}},[r("a",{attrs:{href:"javascript:;"}},[e._v("活动规则")])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showcontent,expression:"showcontent"}],staticClass:"textcontent"},[r("p",[e._v("1、用户需要先开通首付出发，输入您的手机号码，点击立即领取。")]),e._v(" "),r("p",[e._v("2、每位首付出发用户仅能领取一次，不能重复领取；")]),e._v(" "),r("p",[e._v("3、优惠券领取成功后，在使用首付出发时自动使用免除相应的分期服务费。请在有效期内使用，过期则自动废除。")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{src:n(569)}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("img",{attrs:{src:n(566)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center textarea"},[n("p",[e._v("先领券.再分期")]),e._v(" "),n("p",[e._v("首付出发优惠券")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"formarea1"},[r("img",{attrs:{src:n(568)}})])}]}}},[285]);
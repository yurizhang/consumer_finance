webpackJsonp([3],{11:function(e,t){},12:function(e,t){},14:function(e,t){},152:function(e,t){},153:function(e,t){},154:function(e,t){},218:function(e,t){},219:function(e,t){},220:function(e,t){},221:function(e,t){},229:function(e,t){},251:function(e,t,n){function r(e){n(541)}var o=n(27)(n(270),n(587),r,null,null);e.exports=o.exports},26:function(e,t,n){"use strict";var r=n(164),o=n.n(r),u=n(165),a=n.n(u),i=function(){function e(){o()(this,e)}return a()(e,[{key:"test",value:function(){alert("test ok:"+this.getCookie("test_cookie"))}},{key:"autoHideTitle",value:function(e){if(this.getCookie("appVersion")){var t=document.getElementById("mt-header");t&&(1==e?t.style.display="none":t.style.visibility="hidden");var n=document.querySelector("#mt-header>h1.mint-header-title").innerText;n&&(document.title=n)}}},{key:"__REQUEST",value:function(){var e=this.getNewCookie();return{clientTypeFlag:"h5",token:e.token||"",phoneNumber:e.phoneNumber||"",bizParams:{}}}},{key:"getNewCookie",value:function(){var e=[],t=document.cookie.split(";"),n=void 0;return t.forEach(function(t){n=t.trim().split("="),e[n[0]]=n[1]}),e}},{key:"getSingleCookie",value:function(e){for(var t=document.cookie.split(";"),n=void 0,r=0;r<t.length;r++)if(n=t[r].trim().split("="),n.length>1&&n[0]==e)return n[1];return""}},{key:"to_locale_time",value:function(e){if(!e)return"-";isNaN(Date.parse(e))&&(e=e.replace(/-/g,"/").replace("T"," ").replace("+00:00","Z"));var e=Date.parse(e),t=new Date(e),n=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e};return t.getFullYear()+"/"+n(t.getMonth()+1,2)+"/"+n(t.getDate(),2)+" "+n(t.getHours(),2)+":"+n(t.getMinutes(),2)+":"+n(t.getSeconds(),2)}},{key:"date",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n=t?new Date(1e3*t):new Date,r=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e},o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},a=["","January","February","March","April","May","June","July","August","September","October","November","December"],i={d:function(){return r(i.j(),2)},D:function(){return i.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return o[i.w()]},N:function(){return i.w()+1},S:function(){return u[i.j()]?u[i.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var e,t=i.z(),r=364+i.L()-t,o=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1;return r<=2&&(n.getDay()||7)-1<=2-r?1:t<=2&&o>=4&&t>=6-o?(e=new Date(n.getFullYear()-1+"/12/31"),date("W",Math.round(e.getTime()/1e3))):1+(o<=3?(t+o)/7:(t-(7-o))/7)>>0},F:function(){return a[i.n()]},m:function(){return r(i.n(),2)},M:function(){return i.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var e;return 2==(e=n.getMonth()+1)?28+i.L():1&e&&e<8||!(1&e)&&e>7?31:30},L:function(){var e=i.Y();return 3&e||!(e%100)&&e%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return i.a().toUpperCase()},B:function(){var e=60*(n.getTimezoneOffset()+60),t=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+e,r=Math.floor(t/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1==String(r).length&&(r="00"+r),2==String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(i.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var e=r(Math.abs(n.getTimezoneOffset()/60*100),4);return e=n.getTimezoneOffset()>0?"-"+e:"+"+e},P:function(){var e=i.O();return e.substr(0,3)+":"+e.substr(3,2)},c:function(){return i.Y()+"-"+i.m()+"-"+i.d()+"T"+i.h()+":"+i.i()+":"+i.s()+i.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(e,t){return e!=t?t:i[t]?i[t]():t})})},{key:"replaceRevStr",value:function(e){var e=e;if(""==e)return"";var t={"<":"&lt;",">":"&gt;"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"replaceStr",value:function(e){var e=e;if(""==e)return"";var t={"&lt;":"<","&gt;":">"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"setCookie",value:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3),document.cookie=e+"="+escape(t)+(null==n?"":"; expires="+r.toGMTString()+"; path=/")}},{key:"getCookie",value:function(e){for(var t=e+"=",n=t.length,r=document.cookie.length,o=0;o<r;){var u=o+n;if(document.cookie.substring(o,u)==t)return this.GetCookieVal(u);if(0==(o=document.cookie.indexOf(" ",o)+1))break}return null}},{key:"GetCookieVal",value:function(e){var t=document.cookie.indexOf(";",e);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))}},{key:"deleteCookie",value:function(e){var t=new Date;t.setTime(t.getTime()-864e5);var n=GetCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString()+"; path=/")}},{key:"number_format",value:function(e,t,n,r,o){e=(e+"").replace(/[^0-9+-Ee.]/g,""),o=o||"floor";var u=isFinite(+e)?+e:0,a=isFinite(+t)?Math.abs(t):0,i=void 0===r?",":r,c=void 0===n?".":n,s="";s=(a?function(e,t){var n=Math.pow(10,t);return console.log(),""+parseFloat(Math[o](parseFloat((e*n).toFixed(2*t))).toFixed(2*t))/n}(u,a):""+Math.round(u)).split(".");for(var l=/(-?\d+)(\d{3})/;l.test(s[0]);)s[0]=s[0].replace(l,"$1"+i+"$2");return(s[1]||"").length<a&&(s[1]=s[1]||"",s[1]+=new Array(a-s[1].length+1).join("0")),s.join(c)}},{key:"getUrlParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):""}},{key:"GetRandomNum",value:function(e,t){var n=t-e,r=Math.random();return e+Math.round(r*n)}},{key:"checkPhone",value:function(e){return!!/^1[34578]\d{9}$/.test(e)}}]),e}();t.a=i},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(226),o=(n.n(r),n(225)),u=n.n(o),a=n(69),i=(n.n(a),n(68)),c=n.n(i),s=n(31),l=n.n(s),f=n(26),v=new f.a;t.default={name:"app",data:function(){return{phoneNumber:v.getCookie("phoneNumber"),showcontent:!1,URL:"https://api.github.com/gists/public",focusState:!1}},directives:{focus:{update:function(e,t){t.value&&e.querySelector("input").focus()}}},methods:{writeCookie:function(){var e=void 0;e=this.$refs.phoneNumber.value,v.setCookie("phoneNumber",e,10)},checkPhone:function(e){return!!/^1[345789]\d{9}$/.test(e)},getCoupon:function(){var e=this,t=v.getUrlParam("platform"),n=this.phoneNumber;if(""==n||!this.checkPhone(n))return void c.a.alert({title:"提示",message:"手机号码有误，请重填"}).then(function(){e.focusState=!0,setTimeout(function(){e.focusState=!1},2e3)});var r={phoneNum:n,type:1,desc:""},o=u.a.loading({duration:0,forbidClick:!0,message:"拼命加载中..."});l.a.post(this.URL,r).then(function(e){o.clear(),e.data.success?c.a.alert({title:"提示",message:"恭喜您领取成功。"}).then(function(){location.href=1==t?"http://jr.tuniu.com/opl/couponList":"http://8.m.tuniu.com/xdm/m/index/ticket"}):c.a.alert({title:"提示",message:e.data.msg})}).catch(function(e){o.clear(),c.a.alert({title:"提示",message:e.toString().substring(0,200)})})}}}},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(107),o=(n.n(r),n(106)),u=n.n(o),a=n(111),i=(n.n(a),n(110)),c=n.n(i),s=n(109),l=(n.n(s),n(108)),f=n.n(l),v=n(105),p=(n.n(v),n(77)),d=n.n(p),g=n(104),m=(n.n(g),n(38)),h=n(251),k=n.n(h),y=n(229);n.n(y);m.default.component(d.a.name,d.a),m.default.component(f.a.name,f.a),m.default.component(c.a.name,c.a),m.default.component(u.a.name,u.a),new m.default({el:"#app",template:"<App/>",components:{App:k.a}})},541:function(e,t){},557:function(e,t,n){e.exports=n.p+"static/img/header.a6ab225.png"},587:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{staticClass:"fixed-van-nav-bar",attrs:{title:"领取优惠券"}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"center formarea"},[n("van-cell-group",[n("van-field",{directives:[{name:"focus",rawName:"v-focus",value:e.focusState,expression:"focusState"}],staticClass:"input",attrs:{maxlength:"11",placeholder:"请输入您的手机号码领取免息券"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),e._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.getCoupon}},[e._v("立即领取")])],1),e._v(" "),n("div",{staticClass:"center texttitle"},[n("p",{on:{click:function(t){e.showcontent=!0}}},[e._v("活动规则")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showcontent,expression:"showcontent"}],staticClass:"textcontent"},[n("p",[e._v("1、用户需要先开通首付出发，输入您的手机号码，点击立即领取。")]),e._v(" "),n("p",[e._v("2、每位首付出发用户仅能领取一次，不能重复领取；")]),e._v(" "),n("p",[e._v("3、优惠券领取成功后，在使用首付出发时自动使用免除相应的分期服务费。请在有效期内使用，过期则自动废除。")])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"center"},[r("img",{attrs:{src:n(557)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center textarea"},[n("p",[e._v("12.12")]),e._v(" "),n("p",[e._v("先领券.再分期")]),e._v(" "),n("p",[e._v("畅玩支付节")])])}]}}},[280]);
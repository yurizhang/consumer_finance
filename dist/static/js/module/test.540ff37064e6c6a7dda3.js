webpackJsonp([2],{18:function(e,t){},227:function(e,t,n){function r(e){n(514)}var o=n(32)(n(252),n(560),r,null,null);e.exports=o.exports},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(542),o=(n.n(r),n(541)),a=n.n(o),i=n(528),u=(n.n(i),n(72)),l=n.n(u),s=n(537),c=(n.n(s),n(536)),f=n.n(c),d=n(33),p=n(73),g=n.n(p),v=n(64),m=n(63);d.default.component(f.a.name,f.a),d.default.component(l.a.name,l.a);var h=new m.a;h.__REQUEST(),v.a;t.default={name:"app",data:function(){return{token:h.getCookie("token"),phoneNumber:h.getCookie("phoneNumber"),appVersion:h.getCookie("appVersion"),page:1,list:[0,1,2,3,4,5,6,7,8,9],disabled:!1}},directives:{WaterfallLower:a()("lower")},methods:{writeCookie:function(){var e=void 0,t=void 0,n=void 0;e=this.$refs.phoneNumber.value,t=this.$refs.token.value,n=this.$refs.appVersion.value,h.setCookie("phoneNumber",e,10),h.setCookie("appVersion",n,10),h.setCookie("token",t,10),alert("phoneNumber:"+e+" token:"+t+"  写入"),location.reload()},loadMore:function(){var e=this;this.disabled=!0,setTimeout(function(){g.a.get("/static/data/test.json?page="+e.page).then(function(t){if(10==e.page)return void(e.disabled=!0);var n=e.list.concat(t.data.data.test);e.list=n,console.log(n),e.page++,e.disabled=!1})},200)},logContent:function(e,t){console.log("我已结束了...."),console.log(e),console.log(t)},beforeRead:function(e,t){return console.log(" 我要开始了...."),console.log(e),console.log(t),!0}}}},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96),o=(n.n(r),n(33)),a=n(227),i=n.n(a);new o.default({el:"#app",template:"<App/>",components:{App:i.a}})},512:function(e,t){},514:function(e,t){},560:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-loadmore-wrapper"},[e._v("\n     token:\n     "),n("input",{ref:"token",attrs:{type:"text",size:"50"},domProps:{value:e.token}}),e._v(" "),n("br"),n("br"),e._v("\n     phoneNumber:\n     "),n("input",{ref:"phoneNumber",attrs:{type:"text"},domProps:{value:e.phoneNumber}}),e._v(" "),n("br"),n("br"),e._v("\n     appVersion:\n     "),n("input",{ref:"appVersion",attrs:{type:"text"},domProps:{value:e.appVersion}}),e._v(" "),n("br"),n("br"),e._v(" "),n("input",{attrs:{type:"button",id:"btnSubmit",value:"提交"},on:{click:function(t){e.writeCookie()}}})]),e._v(" "),n("div",[n("ul",{directives:[{name:"waterfall-lower",rawName:"v-waterfall-lower",value:e.loadMore,expression:"loadMore"}],staticClass:"ul_demo",attrs:{"waterfall-disabled":"disabled","waterfall-offset":"400"}},e._l(e.list,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]),e._v(" "),n("div",[n("van-uploader",{attrs:{beforeRead:e.beforeRead,afterRead:e.logContent,resultType:"text"}},[n("van-icon",{attrs:{name:"photograph"}}),e._v("上传文件\n      ")],1)],1)])},staticRenderFns:[]}},62:function(e,t){},63:function(e,t,n){"use strict";var r=n(151),o=n.n(r),a=n(152),i=n.n(a),u=function(){function e(){o()(this,e)}return i()(e,[{key:"test",value:function(){alert("test ok:"+this.getCookie("test_cookie"))}},{key:"autoHideTitle",value:function(e){if(this.getCookie("appVersion")){var t=document.getElementById("mt-header");t&&(1==e?t.style.display="none":t.style.visibility="hidden");var n=document.querySelector("#mt-header>h1.mint-header-title").innerText;n&&(document.title=n)}}},{key:"__REQUEST",value:function(){var e=this.getNewCookie();return{clientTypeFlag:"h5",token:e.token||"",phoneNumber:e.phoneNumber||"",bizParams:{}}}},{key:"getNewCookie",value:function(){var e=[],t=document.cookie.split(";"),n=void 0;return t.forEach(function(t){n=t.trim().split("="),e[n[0]]=n[1]}),e}},{key:"getSingleCookie",value:function(e){for(var t=document.cookie.split(";"),n=void 0,r=0;r<t.length;r++)if(n=t[r].trim().split("="),n.length>1&&n[0]==e)return n[1];return""}},{key:"to_locale_time",value:function(e){if(!e)return"-";isNaN(Date.parse(e))&&(e=e.replace(/-/g,"/").replace("T"," ").replace("+00:00","Z"));var e=Date.parse(e),t=new Date(e),n=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e};return t.getFullYear()+"/"+n(t.getMonth()+1,2)+"/"+n(t.getDate(),2)+" "+n(t.getHours(),2)+":"+n(t.getMinutes(),2)+":"+n(t.getSeconds(),2)}},{key:"date",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n=t?new Date(1e3*t):new Date,r=function(e,t){return(e+="").length<t?new Array(++t-e.length).join("0")+e:e},o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},i=["","January","February","March","April","May","June","July","August","September","October","November","December"],u={d:function(){return r(u.j(),2)},D:function(){return u.l().substr(0,3)},j:function(){return n.getDate()},l:function(){return o[u.w()]},N:function(){return u.w()+1},S:function(){return a[u.j()]?a[u.j()]:"th"},w:function(){return n.getDay()},z:function(){return(n-new Date(n.getFullYear()+"/1/1"))/864e5>>0},W:function(){var e,t=u.z(),r=364+u.L()-t,o=(new Date(n.getFullYear()+"/1/1").getDay()||7)-1;return r<=2&&(n.getDay()||7)-1<=2-r?1:t<=2&&o>=4&&t>=6-o?(e=new Date(n.getFullYear()-1+"/12/31"),date("W",Math.round(e.getTime()/1e3))):1+(o<=3?(t+o)/7:(t-(7-o))/7)>>0},F:function(){return i[u.n()]},m:function(){return r(u.n(),2)},M:function(){return u.F().substr(0,3)},n:function(){return n.getMonth()+1},t:function(){var e;return 2==(e=n.getMonth()+1)?28+u.L():1&e&&e<8||!(1&e)&&e>7?31:30},L:function(){var e=u.Y();return 3&e||!(e%100)&&e%400?0:1},Y:function(){return n.getFullYear()},y:function(){return(n.getFullYear()+"").slice(2)},a:function(){return n.getHours()>11?"pm":"am"},A:function(){return u.a().toUpperCase()},B:function(){var e=60*(n.getTimezoneOffset()+60),t=3600*n.getHours()+60*n.getMinutes()+n.getSeconds()+e,r=Math.floor(t/86.4);return r>1e3&&(r-=1e3),r<0&&(r+=1e3),1==String(r).length&&(r="00"+r),2==String(r).length&&(r="0"+r),r},g:function(){return n.getHours()%12||12},G:function(){return n.getHours()},h:function(){return r(u.g(),2)},H:function(){return r(n.getHours(),2)},i:function(){return r(n.getMinutes(),2)},s:function(){return r(n.getSeconds(),2)},O:function(){var e=r(Math.abs(n.getTimezoneOffset()/60*100),4);return e=n.getTimezoneOffset()>0?"-"+e:"+"+e},P:function(){var e=u.O();return e.substr(0,3)+":"+e.substr(3,2)},c:function(){return u.Y()+"-"+u.m()+"-"+u.d()+"T"+u.h()+":"+u.i()+":"+u.s()+u.P()},U:function(){return Math.round(n.getTime()/1e3)}};return e.replace(/[\\]?([a-zA-Z])/g,function(e,t){return e!=t?t:u[t]?u[t]():t})})},{key:"replaceRevStr",value:function(e){var e=e;if(""==e)return"";var t={"<":"&lt;",">":"&gt;"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"replaceStr",value:function(e){var e=e;if(""==e)return"";var t={"&lt;":"<","&gt;":">"};for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e}},{key:"setCookie",value:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3),document.cookie=e+"="+escape(t)+(null==n?"":"; expires="+r.toGMTString()+"; path=/")}},{key:"getCookie",value:function(e){for(var t=e+"=",n=t.length,r=document.cookie.length,o=0;o<r;){var a=o+n;if(document.cookie.substring(o,a)==t)return this.GetCookieVal(a);if(0==(o=document.cookie.indexOf(" ",o)+1))break}return null}},{key:"GetCookieVal",value:function(e){var t=document.cookie.indexOf(";",e);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))}},{key:"deleteCookie",value:function(e){var t=new Date;t.setTime(t.getTime()-864e5);var n=GetCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString()+"; path=/")}},{key:"number_format",value:function(e,t,n,r,o){e=(e+"").replace(/[^0-9+-Ee.]/g,""),o=o||"floor";var a=isFinite(+e)?+e:0,i=isFinite(+t)?Math.abs(t):0,u=void 0===r?",":r,l=void 0===n?".":n,s="";s=(i?function(e,t){var n=Math.pow(10,t);return console.log(),""+parseFloat(Math[o](parseFloat((e*n).toFixed(2*t))).toFixed(2*t))/n}(a,i):""+Math.round(a)).split(".");for(var c=/(-?\d+)(\d{3})/;c.test(s[0]);)s[0]=s[0].replace(c,"$1"+u+"$2");return(s[1]||"").length<i&&(s[1]=s[1]||"",s[1]+=new Array(i-s[1].length+1).join("0")),s.join(l)}},{key:"getUrlParam",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):""}},{key:"GetRandomNum",value:function(e,t){var n=t-e,r=Math.random();return e+Math.round(r*n)}}]),e}();t.a=u},64:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=[],o=[],a=window.SMALL_BLACK_CONFIG._DomainName,i=window.SMALL_BLACK_CONFIG._DEBUG,u=window.SMALL_BLACK_CONFIG._PRODUCT;r[0]=a+"/app/index/",o[0]="/api/index/",r[1]=a+"/app/list/",o[1]="/api/list/",r[2]=a+"/app/detail/",o[2]="/api/detail/","DEV"==u&&(r=o)}},[254]);
/*
SMALL_BLACK_CONFIG为window全局变量在html以script接入防止被webpack打包
By Yuri Zhang   2017-7-14
 */
//console.log(window['SMALL_BLACK_CONFIG']);

export let URILIST=[],_URILIST=[];
//let DomainName='http://10.10.30.117:21001/tnp';  // SST
//let DomainName="http://public-api.tnp.pdl.tuniu-sit.org/tnp"; //SIT
//let DomainName="http://public-api.tnp.pdl.tuniu.org/tnp"; //product

let DomainName=window["SMALL_BLACK_CONFIG"]._DomainName;
//let _clientType="h5";
export let _DEBUG=window["SMALL_BLACK_CONFIG"]._DEBUG;
export let _PRODUCT=window["SMALL_BLACK_CONFIG"]._PRODUCT;  //DEV or PRD   //开发环境或是生产环境



URILIST[0]=DomainName+'/app/index/';  //首页 post
_URILIST[0]='/api/index/';

URILIST[1]=DomainName+'/app/list/';  //帐单 post querytype传参数
_URILIST[1]='/api/list/';

URILIST[2]=DomainName+'/app/detail/';  //帐单 post querytype传参数
_URILIST[2]='/api/detail/';


if(_PRODUCT=='DEV'){
	URILIST=_URILIST;
}
// export default  URILIST;

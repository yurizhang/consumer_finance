<template>
  <div class="photoUpload">
       <van-nav-bar title="我的提额" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
       <van-panel title="*身份证" class="id_title" desc="此项为必须提交，正反两面清晰可见">    
            
           

         
            <div class="uploadArea">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(0)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[0].showuri? uploadicons[0].showuri:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(1)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[1].showuri? uploadicons[1].showuri:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>



        </van-panel>

       <van-panel title="护照" class="id_title" desc="首页和签证页；如有">  
            
               <div class="uploadArea">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(2)" accept="image/png, image/jpeg">
                    <van-button size="larger" :loading="false"><img :src="uploadicons[2].showuri? uploadicons[2].showuri:uploaddefaulticon"></van-button>
                </van-uploader>
                <div class="uploadAreaSing"><van-button></van-button></div>
                
            </div>
            

       </van-panel>

          <van-panel title="在职证明" class="id_title" desc="内容包括姓名,身份证信息,公司联系方式,月收入金额并且加盖公司公章或人力资源章；如有">              
               <div class="uploadArea">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(3)" accept="image/png, image/jpeg">
                    <van-button  size="larger"><img :src="uploadicons[3].showuri? uploadicons[3].showuri:uploaddefaulticon"></van-button>
                </van-uploader>   

                <div class="uploadAreaSing"><van-button></van-button></div>                           
            </div>

       </van-panel>


        <van-tabs  class="tab_title">
            <van-tab title="车辆行驶证">
               
                  
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(4)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[4].showuri? uploadicons[4].showuri:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(5)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[5].showuri? uploadicons[5].showuri:uploaddefaulticon"></van-button>
                </van-uploader> 
            </div> 
                <div class="upload_memo">
                    必须包含行驶证主页和副页,并非驾照；如有
                </div> 
            </van-tab>

             <van-tab title="结婚证">
                    
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(6)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[6].showuri? uploadicons[6].showuri:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(7)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[7].showuri? uploadicons[7].showuri:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>
            <div class="upload_memo">夫妻双方信息页；如有</div>
            </van-tab>

            <van-tab title="房产证">
                    
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(8)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[8].showuri? uploadicons[8].showuri:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead" :disabled="uploaddisable" :before-read="onBeforeRead" @click.native="tellCurrentIndex(9)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[9].showuri? uploadicons[9].showuri:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>
            <div class="upload_memo">必须是房产证主页和附记页，所有内容清晰可见；如有</div>
            </van-tab>
        </van-tabs>


         <van-panel title="查看详情">  

                  
               <div class="uploadArea warning">
                  <ul>
                      <li>1.*项资料必须提供，其他项至少提供一项，提供的资料越多，获得额度提升的可能性越大。</li>
                      <li><a @click="showMore=true;"  v-show="showMore==false">查看更多...</a></li>
                      <li v-show="showMore==true">2.提额申请预计在5个工作日内完成审核，请耐心等待，如有疑问请致电：4007999999转3</li>
                      <li v-show="showMore==true">3.客户须按照途牛金服的提额规则进行上传，途牛金服有权根据上传资料自行决定客户的提额额度，如客户提交的资料不符合要求或存在虚假，途牛金服有权拒绝客户的提额申请。</li>
                      <li v-show="showMore==true">4.提额请提供资料原件扫描件或拍照上传（注意：复印件无效），上传资料请保证完整清晰,每个文件最大3M,文件类型（JPG、JPEG、PNG）。</li>
                      <li><a @click="showMore=false;"  v-show="showMore==true">收起...</a></li>
                  </ul>
             
                                         
               </div>

       </van-panel>



        <van-button type="primary" bottom-action @click="submitQuota" :class="uploaddisable?'button_grey':''">确认提交</van-button>
  </div>
</template>


<script>
import { Dialog, Toast } from "vant";
import axios from "axios";
import * as _global from "../../plugs/global";
import TrendFun from "../../plugs/function";

import uploaddefaulticon from "../../common/img/upload.png";
// 1 身份证(uploadicons[0,1]) 2 护照(uploadicons[2]) 3 在职证明(uploadicons[3]) 4 车辆行驶证(uploadicons[4,5]) 5 结婚证(uploadicons[6,7]) 6 房产证(uploadicons[8,9])
const UPLOADICONS = [{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
},{
                    type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                    fileName : "",
                    url : "",
                    showuri:"",   //用于图片显示，有可能是URI或是base64
                    imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                    imageBase64 : ""  // 图片base64
}];


// let temp={
//                     type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
//                     fileName : "",
//                     url : "",
//                     showuri:"",   //用于图片显示，有可能是URI或是base64
//                     imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
//                     imageBase64 : ""  // 图片base64
// }

// for(let i=0;i<10;i++){
//    UPLOADICONS.push(temp);    
// }


//let trendFun=new TrendFun(); //公共函数库
//let __REQUEST=trendFun.__REQUEST();
let __URILIST = _global.URILIST;


export default {
  name: "app",
  data() {
    return {  
      uploadicons:UPLOADICONS,   //UPLOADICONS
      uploaddefaulticon,
      CurrentIndex: 0, //当前操作的是那一个上传对象

      uploaddisable: false,  //false允许上传
      //buttonGrey: false,
      showMore: false,

      
    };
  },
  created() {
    this.getQuotaList();
  },
  methods: {
    backIndex() {
      this.$router.push({ path: '/', query: { from: 'upload' }})
      return;

    },
    onBeforeRead(file){
        //读取之前
       // setTimeout(() => {
            console.log(file);
            //console.log(file.type=="image/jpeg");
            if(Math.floor(file.size/1000)>=3000){
                alert("图片不能超过3M，请优化一下再上传.");
                return false; //停止上传
            }
            if(file.type !="image/jpeg" && file.type != "image/png"){
                alert("只能上传png或是jpeg格式.");
                return false; //停止上传
            }
            return true;
       // },200);
    },
    onRead(file) {
      //读取以后
      //console.log(file)
  
        let sample= {
                        type : 0, // 1 身份证 2 护照 3 在职证明 4 车辆行驶证 5 结婚证 6 房产证
                        fileName : file.file.name,
                        url : "",
                        showuri:file.content,   //用于图片显示，有可能是URI或是base64
                        imageType: 0, //枚举值：图片格式, PNG:1, JPG:2, BMP:3
                        imageBase64 : file.content  // 图片base64
        }
        if(file.file.type =="image/jpeg"){
            sample.imageType=2;
        }else if(file.file.type=="image/png"){
            sample.imageType=1;
        }else{
            //var filename="index.jpeg";  
            // let index1=sample.fileName.lastIndexOf("."); 
            // let index2=sample.fileName.length;
            // let postf=sample.fileName.substring(index1,index2);//后缀名 .jpeg或是jpg
            // postf=postf.toUpperCase();
            // if(postf=='.JPEG' ||postf=='.JPG'){
            //     sample.imageType=2;
            // }else if(postf=='.PNG'){
            //     sample.imageType=1;
            // }
              
        }
        
      setTimeout(() => {
         // this.uploadicons[this.CurrentIndex]=sample;
          this.$set(this.uploadicons, this.CurrentIndex, sample);
      }, 200);

      //    this.uploadicons[0]=file.content;
      //    this.uploadicons[1]=file.content;
      
    },
    tellCurrentIndex(CurrentIndex) {
      this.CurrentIndex = CurrentIndex;
    },

    //提交材料
    submitQuota(){
       if(this.uploaddisable){
           return;
           //不可提交
       }
       let request={
           files: this.uploadicons            
        }  
    //优先处理imageBase64 ， 如果没有值，处理UI。

        axios.post(__URILIST[22],request).then(response => {
            if (response.data.success) {
                    Dialog.alert({title:"提额申请成功！", message:"您的提额申请预计在5个工作日内完成审核，请您耐心等待！"}).then(()=>{
                        this.$router.push({ path: '/', query: { from: 'upload' }})
                    });       
            } else {
                    alert(response.data.msg);
            }
        })

        
        
    },
    getQuotaList() {
     
      axios.get(__URILIST[21]).then(response => {
          if (response.data.success) {
                //  提额审核状态。 0 未提额审核  1，审核中（用户提交后的状态）2，审核通过-小贷受理成功 3，审核通过-小贷受理失败 4，提额成功 5，提额失败 
                // 提示信息：

                // state=4
                // addQuotaPermit = 1 '您最近一次的提额申请审核通过,额度已为您提升,请查看。(可再次上传资料发起提额申请)';
                // 其他  '您最近一次的提额申请审核通过,额度已为您提升,请查看。';

                // state==5
                // '抱歉，您最近一次的提额申请审核未通过，感谢您的使用!'
                
                // state = 1,2,3
                // "您已发起提额，申请正在审核中，请您及时关注审核结果!"
                

                // 按钮状态
                // state = 1,2,3
                // 按钮置灰
        
           //addQuotaPermit
           let state=response.data.data.state;
           let msg='';
           switch (state){
                case 0:               
                    break;
                case 1:
                case 2:
                case 3:
                    this.uploaddisable=true;
                    msg="您已发起提额，申请正在审核中，请您及时关注审核结果!";
                    break;
                case 4:
                    if(response.data.data.addQuotaPermit==1){
                        msg='您最近一次的提额申请审核通过,额度已为您提升,请查看。(可再次上传资料发起提额申请)';
                    }else{
                        msg='您最近一次的提额申请审核通过,额度已为您提升,请查看。';
                    }
                    break;
                case 5:
                    msg='抱歉，您最近一次的提额申请审核未通过，感谢您的使用!';
                    break;
           }

           

            if(response.data.data.files){
                response.data.data.files.map((e,i)=>{
                            
                    if(e.type==1 && e.url!=""){
                        //console.log("e.type:"+e.type); 
                        if(UPLOADICONS[0].showuri==""){                    
                            UPLOADICONS[0].showuri=e.url;
                            UPLOADICONS[0].url=e.url;
                            UPLOADICONS[0].type=1;
                        }else{
                            UPLOADICONS[1].showuri=e.url;
                            UPLOADICONS[1].url=e.url;
                            UPLOADICONS[1].type=1;                      
                        }
                    }else if(e.type==2 && e.url!=""){
                        /// console.log("e.type:"+e.type); 
                            UPLOADICONS[2].showuri=e.url;
                            UPLOADICONS[2].url=e.url;
                            UPLOADICONS[2].type=2;      

                    }else if(e.type==3 && e.url!=""){
                        // console.log("e.type:"+e.type); 
                        UPLOADICONS[3].showuri=e.url;
                        UPLOADICONS[3].url=e.url;
                        UPLOADICONS[3].type=3;                       

                    }else if(e.type==4 && e.url!=""){
                        /// console.log("e.type:"+e.type); 
        
                        if(UPLOADICONS[4].showuri==""){                    
                                UPLOADICONS[4].showuri=e.url;
                                UPLOADICONS[4].url=e.url;
                                UPLOADICONS[4].type=4;
                            }else{
                                UPLOADICONS[5].showuri=e.url;
                                UPLOADICONS[5].url=e.url;
                                UPLOADICONS[5].type=4;                      
                            }                      
                        
                    
                    }else if(e.type==5 && e.url!=""){
                        // console.log("e.type:"+e.type); 
                    if(UPLOADICONS[6].showuri==""){                    
                                UPLOADICONS[6].showuri=e.url;
                                UPLOADICONS[6].url=e.url;
                                UPLOADICONS[6].type=5;
                            }else{
                                UPLOADICONS[7].showuri=e.url;
                                UPLOADICONS[7].url=e.url;
                                UPLOADICONS[7].type=5;                      
                            }   
                        
                        
                    }else if(e.type==6 && e.url!=""){
                        if(UPLOADICONS[8].showuri==""){                    
                                UPLOADICONS[8].showuri=e.url;
                                UPLOADICONS[8].url=e.url;
                                UPLOADICONS[8].type=6;
                            }else{
                                UPLOADICONS[9].showuri=e.url;
                                UPLOADICONS[9].url=e.url;
                                UPLOADICONS[9].type=6;                      
                            }   
                    }
                });
                this.uploadicons=UPLOADICONS;
            }  
  
            Dialog.alert({title:"信息提示", message:msg});   


          } else {
                alert(response.data.msg);
          }
        })
    }
  }
};
</script>

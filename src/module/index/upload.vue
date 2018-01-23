<template>
  <div>
       <van-nav-bar title="我的提额" leftArrow leftText="返回"  @click-left="backIndex()"></van-nav-bar>
       <van-panel title="身份证" class="id_title" desc="此项为必须提交，正反两面清晰可见">    
            
           

         
            <div class="uploadArea">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(0)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[0]? uploadicons[0]:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(1)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[1]? uploadicons[1]:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>



        </van-panel>

       <van-panel title="护照" class="id_title" desc="首页和签证页；如有">  
            
               <div class="uploadArea">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(2)" accept="image/png, image/jpeg">
                    <van-button size="larger" :loading="false"><img :src="uploadicons[2]? uploadicons[2]:uploaddefaulticon"></van-button>
                </van-uploader>
                <div class="uploadAreaSing"><van-button></van-button></div>
                
            </div>
            

       </van-panel>

          <van-panel title="在职证明" class="id_title" desc="内容包括姓名,身份证信息,公司联系方式,月收入金额并且加盖公司公章或人力资源章；如有">              
               <div class="uploadArea">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(3)" accept="image/png, image/jpeg">
                    <van-button  size="larger"><img :src="uploadicons[3]? uploadicons[3]:uploaddefaulticon"></van-button>
                </van-uploader>   

                <div class="uploadAreaSing"><van-button></van-button></div>                           
            </div>

       </van-panel>


        <van-tabs  class="tab_title">
            <van-tab title="车辆行驶证">
               
                  
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(4)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[4]? uploadicons[4]:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(5)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[5]? uploadicons[5]:uploaddefaulticon"></van-button>
                </van-uploader> 
            </div> 
                <div class="upload_memo">
                    必须包含行驶证主页和副页,并非驾照；如有
                </div> 
            </van-tab>

             <van-tab title="结婚证">
                    
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(6)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[6]? uploadicons[6]:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(7)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[7]? uploadicons[7]:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>
            <div class="upload_memo">夫妻双方信息页；如有</div>
            </van-tab>

            <van-tab title="房产证">
                    
            <div class="uploadArea marginTop30">
                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(8)" accept="image/png, image/jpeg">
                    <van-button size="larger"  :loading="false"><img :src="uploadicons[8]? uploadicons[8]:uploaddefaulticon"></van-button> 
                </van-uploader>   

                <van-uploader :after-read="onRead"  :before-read="onBeforeRead" @click.native="tellCurrentIndex(9)" accept="image/png, image/jpeg">
                    <van-button size="larger"><img :src="uploadicons[9]? uploadicons[9]:uploaddefaulticon"></van-button>
                </van-uploader>                              
            </div>
            <div class="upload_memo">必须是房产证主页和附记页，所有内容清晰可见；如有</div>
            </van-tab>
        </van-tabs>

  </div>
</template>
<style>
.id_title{   
    border-bottom: 1px solid #CFCFCF;
}
.id_title .van-panel__title, .tab_title .van-tab {
  font-size: 15px;
  color: #0079ff;
}
.uploadArea {
  margin-top: 30px;
  margin-bottom: 20px;
  
  display: flex;
  justify-content: space-around;

}
.uploadAreaSing {
  visibility: hidden;
}
.uploadArea img {
  max-width: 100%;
  max-height: 100%;
}
.uploadArea .van-button {
  background: #ebeef3;
  border-radius: 2px;
  width: 108px;
  height: 70px;
  font-size: 16px;
}
.uploadArea.marginTop30{
    margin-top: 30px;
}
.upload_memo{  
    font-size: 12px;
    color: #F59909;
    text-align: right;
    margin: 20px;
}

.id_title .van-panel__desc{
   font-size: 12px;
    color: #F59909;
    text-align: right;
}

</style>

<script>
import { Dialog, Toast } from "vant";
import axios from "axios";
import * as _global from "../../plugs/global";
import TrendFun from "../../plugs/function";

import uploaddefaulticon from "../../common/img/upload.png";
let uploadicons = [
  "",
  "",   //身份证

  "",    //护照
  "",   //在职证明

  "",
  "",

  "",
  "",

  "",
  ""
];
//console.log(uploadicons);
//let trendFun=new TrendFun(); //公共函数库
//let __REQUEST=trendFun.__REQUEST();
let __URILIST = _global.URILIST;

const FILETYPE=[];
FILETYPE[0]='image/jpeg';
FILETYPE[1]='image/png';
export default {
  name: "app",
  data() {
    return {
      cardList: [],
      uploadicons,
      uploaddefaulticon,
      CurrentIndex: 0 //当前操作的是那一个上传对象
    };
  },
  created() {
    this.getCardList();
  },
  methods: {
    backIndex() {
      this.$router.push({ path: '/', query: { from: 'banklist' }})
      return;

    },
    onBeforeRead(file){
        //读取之前
       // setTimeout(() => {
            //console.log("读取之前:"+file.type);
            //console.log(file.type=="image/jpeg");
            if(file.type !="image/jpeg" && file.type != "image/png"){
                alert("只能上传png或是jpg格式.");
                return false; //停止上传
            }
            return true;
       // },200);
    },
    onRead(file) {
      //读取以后
      //console.log("读取以后:"+file.file.type)
      setTimeout(() => {
        this.$set(this.uploadicons, this.CurrentIndex, file.content);
      }, 200);

      //    this.uploadicons[0]=file.content;
      //    this.uploadicons[1]=file.content;
      console.log(this.uploadicons)
    },
    tellCurrentIndex(CurrentIndex) {
      this.CurrentIndex = CurrentIndex;
    },
    getCardList() {
      let request = {};
      axios
        .post(__URILIST[4], request)
        .then(response => {
          if (response.data.success) {
            this.cardList = response.data.data.cardList;
          } else {
            alert(response.data.msg);
          }
        })
        .catch(error => {
          //console.log(error);
          //reject(error);
        });
    }
  }
};
</script>

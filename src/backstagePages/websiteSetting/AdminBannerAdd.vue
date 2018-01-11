<template>
  <div class="my-form">
    <div class="my-form-title">
      添加首页轮播图
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>轮播图</span>
        <FileUploadBox v-model="Target" @onChange="fileChange"fileOriginName="bannerImg"></FileUploadBox>
      </div>
      <div class="my-form-item">
        <span>轮播图描述</span>
        <input type="text" v-model="BannerDesc"/>
      </div>
      <div class="my-form-item">
        <span>点击后链接地址</span>
        <input type="text" v-model="BannerUrl"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="AddBannerInfo">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import FileUploadBox from '../../components/fileUpload.vue'
  export default {
    components:{
      FileUploadBox
    },
    data(){
      return {
        Target:'',
        BannerDesc:'',
        BannerUrl:'',
        BannerImg:''
      }
    },
    methods:{
      fileChange(BannerImg){
        this.BannerImg = BannerImg
      },
      AddBannerInfo() {
        let el = this
        let data = {
          bannerUrl: el.BannerUrl,
          bannerDesc: el.BannerDesc,
          bannerFile: el.BannerImg
        }
        el.$http(el.$api.adminShopBannerAdd, data)
          .then((res) => {
            el.$message({
              type: 'success',
              message: res.message
            })
          }, (error) => {
            el.$message({
              type: 'error',
              message: '新增轮播图失败！'
            })
          })
      }
    }
  }









//  import FileUploadBox from '../../components/fileUpload.vue'
//  export default {
//    components:{
//      FileUploadBox
//    },
//    data(){
//      return{
//        Target:'',
//        BannerFile:'',
//        BannerDesc:'',
//        BannerUrl:''
//      }
//    },
//    methods:{
//      fileChange(file){
//        this.BannerFile = file
//      },
//      AddBannerInfo(){
//        let el = this
//        let data = {
//          bannerUrl:el.BannerUrl,
//          bannerDesc:el.BannerDesc,
//          bannerFile:el.BannerFile
//        }
//        el.$http(el.$api.adminShopBannerAdd,data)
//          .then((res)=>{
//            el.$message({
//              type:'success',
//              message:res.message
//            })
//          },(error)=>{
//            el.$message({
//              type:'error',
//              message:'新增轮播图失败！'
//            })
//          })
//      }
//    }
//  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

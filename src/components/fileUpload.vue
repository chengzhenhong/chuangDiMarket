<template>
  <div class="my-file-box">
    <form action="" method="post" enctype="multipart/form-data" id="uploadForm">
      <input
        type="file"
        id="fileUpload"
        @change="uploadImg('uploadForm')"
        :name="fileOriginName"
        multiple accept="image/jpg,image/jpeg,image/png,image/gif"
      />
      <label for="fileUpload" class="el-icon-plus"></label>
      <img v-if="fileUrl" :src="fileUrl"/>
      <img v-if="parentImgUrl && !fileUrl" :src="parentImgUrl"/>
      <div class="file-upload-mask">

      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props:{
      fileOriginName:{
        type:String,
        default:''
      },
      parentImgUrl:{
        type:String,
        default:''
      }
    },
    data(){
      return{
        fileUrl:''
      }
    },
    methods:{
      uploadImg(id){
        let el = this
        el.imageLoading = true
        var uploadForm = document.getElementById(id)
        var formData = new FormData(uploadForm)
        el.uploadImgReq(formData)/*调用自定义上传图片方法，返回图片地址*/
      },
      uploadImgReq(formData){
        let el = this
        el.$http(el.$api.adminShopBannerImgUpload,formData)
        .then((res)=>{
          el.$emit('onChange',res.data)
        },(error)=>{
          alert(error.message)
        })
      }
    }
  }














//  export default {
//    props:{
//      parentImgUrl:String
//    },
//    data(){
//      return{
//        file:'',
//        fileUrl:''
//      }
//    },
//    methods:{
//      handleFileChange(e){
//        let inputDOM = this.$refs.inputer
//        this.file = inputDOM.files[0]/*通过dom提取数据*/
//        this.imgPreview(this.file)
//      },
//      imgPreview(file){
//        let self = this
//        var reader = new FileReader()
//        reader.readAsDataURL(file)
//        reader.onloadend = function () {
//          self.fileUrl = this.result;
//          self.$emit('onChange',self.fileUrl)
//        }
//      }
//    }
//  }
</script>

<style scoped>
  .my-file-box{
    position: relative;
    text-align: center;
    width: 148px;
    height: 148px;
    border:1px dashed #c0ccda;
  }
  .my-file-box input[type=file]{
    display: none;
  }
  .my-file-box label{
    position: absolute;
    z-index: 10;
    top:0;
    right:0;
    bottom: 0;
    left:0;
    cursor: pointer;
  }
  .el-icon-plus:before{
     font-size: 25px;
     line-height: 148px;
   }
  .my-file-box img{
    z-index: 9;
    width: 148px;
    height: 148px;
  }
  .file-upload-mask{
    z-index: 8;
  }
</style>

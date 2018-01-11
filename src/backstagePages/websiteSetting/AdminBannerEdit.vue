<template>
  <div class="my-form">
    <div class="my-form-title">
      编辑首页轮播图
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>轮播图</span>
        <FileUploadBox v-model="target" :parentImgUrl="OldBannerFileShow" @onChange="fileChange"></FileUploadBox>
      </div>
      <div class="my-form-item">
        <span>轮播图描述</span>
        <input type="text" v-model="BannerDesc" />
      </div>
      <div class="my-form-item">
        <span>点击后链接地址</span>
        <input type="text" v-model="BannerUrl"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="editSave">保存</button>
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
      return{
        BaseURL:'http://192.168.1.201:8081',
        target:'',
        BannerDesc:'',
        BannerUrl:' ',
        OldBannerFile:'',
        OldBannerFileShow:'',
        BannerFile:'',
        ShopBannerId:''
      }
    },
    mounted(){
      this.loadPage()
    },
    watch:{
      '$route':'loadPage'
    },
    methods:{
      loadPage(){/*加载页面，将要修改的轮播图信息加载出来*/
        let el = this
        el.ShopBannerId = el.$route.query.banId/*获取路由带过来的参数（轮播图id）*/
        el.$http(el.$api.adminShopBannerEdit,{shopBannerId:el.ShopBannerId})
        .then((res)=>{
          el.BannerUrl = res.data.bannerUrl
          el.BannerDesc = res.data.bannerDesc
          el.OldBannerFileShow = el.BaseURL + res.data.bannerPath
          el.OldBannerFile = res.data.bannerPath
        },(error)=>{
        })
      },
      fileChange(file){
        this.BannerFile = file
      },
      editSave(){/*保存修改*/
        let el = this
        let data = {
          banid:el.ShopBannerId,
          bannerUrl:el.BannerUrl,
          bannerDesc:el.BannerDesc,
          bannerFile:el.BannerFile,
          oldBannerFile:el.OldBannerFile
        }
        el.$http(el.$api.adminShopBannerAdd,data)
          .then((res)=>{
            el.$message({
              message:res.message,
              type: 'success'
            })
          },(error)=>{
            el.$message({
              message:'编辑首页轮播图失败！',
              type: 'error'
            })
          })
      }
    }
  }
</script>

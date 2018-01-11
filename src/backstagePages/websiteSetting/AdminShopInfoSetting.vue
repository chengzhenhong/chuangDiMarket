<template>
  <div class="my-form">
    <div class="my-form-title">
      商城基本信息设置
    </div>
      <div class="my-form-content">
        <div class="my-form-item">
          <span>商城名称</span>
          <input type="text" v-model="shopName"/>
        </div>
        <div class="my-form-item">
          <span>商城LOGO</span>
          <FileUploadBox v-model="target" :parentImgUrl="OldLogoShow" @onChange="fileChange"></FileUploadBox>
        </div>
        <div class="my-form-item">
          <button v-on:click="submitShopInfo">提交</button>
        </div>
      </div>
  </div>
</template>

<script>
  import FileUploadBox from '../../components/fileUploadBase64.vue'
  export default {
    components:{
      FileUploadBox
    },
    data(){
      return{
        BaseURL:'http://192.168.1.201:8081',
        shopLogo:'',
        OldLogo:'',
        OldLogoShow:'',
        shopName:'',
        target:''
      }
    },
    mounted(){
      this.loadPage()
    },
    methods:{
      loadPage(){/*加载页面信息*/
        let el = this
        el.$http(el.$api.adminShopInfoShow)
        .then((res)=>{
          el.shopName = res.data.nsname
          el.OldLogo = res.data.nslogo
          el.OldLogoShow = el.BaseURL + res.data.nslogo
        },(error)=>{
        })
      },
      fileChange(file){
        this.shopLogo = file
      },
      submitShopInfo(){/*提交商城信息*/
        let el = this
        let data = {
          nsname:el.shopName,
          nslogo:el.shopLogo,
          oldNslogo:el.OldLogo
        }
        el.$http(el.$api.adminSaveShopInfo,data)
        .then((res)=>{
          el.$message({
            type:'success',
            message:res.message
          })
          el.loadPage()
        },(error)=>{
          el.$message({
            type:'error',
            message:'编辑商城信息失败！'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>

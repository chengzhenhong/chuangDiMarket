<template>
  <div class="my-form">
    <div class="my-form-title">
      编辑会员信息
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>会员名称</span>
        <input type="text" v-model="UserTypeName"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="editSave">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        UserTypeId:'',
        UserTypeName:''
      }
    },
    mounted(){
      this.loadPage()
    },
    watch:{
      '$route':'loadPage'
    },
    methods:{
      loadPage(){/*加载页面，将需要修改的会员的userTypeId带过来*/
        let el = this
        el.UserTypeId = el.$route.query.userTypeId/*获取路由带过来的参数（会员类型的id）*/
        el.$http(el.$api.adminUserTypeEdit,{userTypeId:el.UserTypeId})
        .then((res)=>{
          el.UserTypeName = res.data.userTypeName
        },(error)=>{
        })
      },
      editSave(){/*保存编辑后的会员类型*/
        let el = this
        let data = {
          userTypeId:el.UserTypeId,
          userTypeName:el.UserTypeName
        }
        el.$http(el.$api.adminUserTypeSave,data)
        .then((res)=>{
          el.$message({
            type:'success',
            message:res.message
          })
        },(error)=>{
          el.$message({
            type:'error',
            message:'会员编辑失败'
          })
        })
      }
    }
  }
</script>

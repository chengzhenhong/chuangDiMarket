<template>
  <div class="my-form">
    <div class="my-form-title">
      新增会员信息
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>会员类型</span>
        <input type="text" v-model="UserTypeName"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="addSave">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        UserTypeName:''
      }
    },
    methods:{
      addSave(){
        let el = this
        let data = {
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
            message:'新增会员失败'
          })
        })
      }
    }
  }
</script>

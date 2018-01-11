<template>
  <div class="my-form">
    <div class="my-form-title">
      重置会员密码
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>会员名称</span>
        <input type="text" class="input-with-action"/>
        <button class="input-action">查看会员信息</button>
      </div>
      <div class="clear-fix"></div>
      <div class="my-form-item">

      </div>
      <div class="my-form-item">
        <button>会员重置密码</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .input-with-action{
    width:85%;
    float: left;
    border-radius: 3px 0 0 3px;
  }
  .input-action{
    position: absolute;
    display: inline-block;
    float: right;
    line-height: 29px;
    background-color: palevioletred;
    border:none;
    border-radius: 0 3px 3px 0;
  }
</style>

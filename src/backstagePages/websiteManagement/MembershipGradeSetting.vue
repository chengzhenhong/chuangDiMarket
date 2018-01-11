<template>
  <div class="my-form">
    <div class="my-form-title">
      会员等级设置
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>会员名称</span>
        <input type="text" class="input-with-action"/>
        <button class="input-action">查看会员信息</button>
      </div>
      <div class="clear-fix"></div>
      <div class="my-form-item">
        <span>选择会员升级类型</span>
        <select>
          <option>二级代理商</option>
          <option>一级代理商</option>
          <option>经销商</option>
        </select>
      </div>
      <div class="my-form-item">
        <button>设置</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        message:'会员等级设置'
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

<template>
  <div class="my-form">
    <div class="my-form-title">
      商品板块添加
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>商品板块名称</span>
        <input type="text" v-model="GoodsPlateName"/>
      </div>
      <div class="my-form-item">
        <span>备注</span>
        <input type="text" v-model="GoodsPlateMark"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="addGoodsPlate">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        GoodsPlateName:'',
        GoodsPlateMark:''
      }
    },
    methods:{
      addGoodsPlate(){
        let el =this
        let data = {
          gpname:el.GoodsPlateName,
          gpremark:el.GoodsPlateMark
        }
        el.$http(el.$api.adminGoodsPlateSave,data)
        .then((res)=>{
          el.$message({
            type:'success',
            message:res.message
          })
        },(error)=>{
          el.$message({
            type:'error',
            message:'商品板块新增失败'
          })
        })
      }

    }
  }
</script>

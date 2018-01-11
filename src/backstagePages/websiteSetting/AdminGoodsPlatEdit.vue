<template>
  <div class="my-form">
    <div class="my-form-title">
      商品板块编辑
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
        <button v-on:click="editSave">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        GoodsPlateId:'',
        GoodsPlateName:'',
        GoodsPlateMark:''
      }
    },
    watch:{
      '$route':'loadPage'
    },
    mounted(){
      this.loadPage()
    },
    methods:{/*加载页面，将需要修改的商品板块的goodsPlateId带过来*/
      loadPage(){
        let el = this
        el.GoodsPlateId = el.$route.query.goodsPlateId/*获取路由带过来的参数（商品板块的id）*/
        el.$http(el.$api.adminGoodsPlateEdit,{goodsPlateId:el.GoodsPlateId})
        .then((res)=>{
          el.GoodsPlateName = res.data.gpname
          el.GoodsPlateMark = res.data.gpremark
        },(error)=>{
        })
      },
      editSave(){/*保存编辑*/
        let el = this
        let data = {
          gpid:el.GoodsPlateId,
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
            message:'商品板块编辑失败！'
          })
        })
      }
    }
  }
</script>

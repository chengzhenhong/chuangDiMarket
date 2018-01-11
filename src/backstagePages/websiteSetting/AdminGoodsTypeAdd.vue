<template>
  <div class="my-form">
    <div class="my-form-title">
      新增商品类别
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>商品所属板块</span>
        <select v-model="GoodsPlateId">
          <option
            v-for="goodsPlate in GoodsPlateInfo"
            v-if="goodsPlate.gpid"
            :value="goodsPlate.gpid"
          >
            {{goodsPlate.gpname}}
          </option>
        </select>
      </div>
      <div class="my-form-item">
        <span>商品类别的名称</span>
        <input type="text" v-model="GoodsTypeName"/>
      </div>
      <div class="my-form-item">
        <span>备注</span>
        <input type="text" v-model="GoodsMark"/>
      </div>
      <div class="my-form-item">
        <button v-on:click="addGoodsTypeSave">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        GoodsPlateInfo:[],
        GoodsPlateId:'',
        GoodsTypeName:'',
        GoodsMark:''
      }
    },
    mounted(){
      this.loadPage()
    },
    methods:{
      loadPage(){
        let el = this
        el.$http(el.$api.adminGoodsPlateList)
          .then((res)=>{
            el.GoodsPlateInfo = res.data
            console.log("获取商品板块id进入success方法"+el.GoodsPlateInfo)
          },(error)=>{
            console.log("获取商品板块id进入error方法"+error)
          })
      },
      addGoodsTypeSave(){
        let el = this
        let data = {
          gpid:el.GoodsPlateId,
          gtname:el.GoodsTypeName,
          gtremark:el.GoodsMark
        }
        el.$http(el.$api.adminGoodsTypeAdd,data)
        .then((res)=>{
          el.$message({
            type:'success',
            message:res.message
          })
        },(error)=>{
          el.$message({
            type:'error',
            message:'新增商品类别失败'
          })
        })
      }
    }
  }
</script>

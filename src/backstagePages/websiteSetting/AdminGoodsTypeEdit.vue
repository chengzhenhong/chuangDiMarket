<template>
  <div class="my-form">
    <div class="my-form-title">
      商品类别编辑
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
        <span>商品类别名称</span>
        <input type="text" v-model="GoodsTypeName"/>
      </div>
      <div class="my-form-item">
        <span>备注</span>
        <input type="text" v-model="GoodsTypeMark"/>
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
        GoodsPlateInfo:[],
        GoodsPlateId:'',
        GoodsTypeId:'',
        GoodsTypeName:'',
        GoodsTypeMark:''
      }
    },
    watch:{
      '$route':'loadPage'
    },
    mounted(){
      this.loadPage()
    },
    methods:{/*加载页面，将需要修改的商品类别的goodsTypeId带过来*/
      loadPage(){
        let el = this
        el.GoodsTypeId = el.$route.query.goodsTypeId/*获取路由带过来的参数（商品类别的id）*/
        el.$http(el.$api.adminGoodsTypeEdit,{goodsTypeId:el.GoodsTypeId})
        .then((res)=>{
          el.GoodsPlateId = res.data.goodsPlate.gpid
          el.GoodsTypeName = res.data.gtname
          el.GoodsTypeMark = res.data.gtremark
        },(error)=>{
        })
        /*获取所有的板块信息（板块id以及板块名称）*/
        el.$http(el.$api.adminGoodsPlateList)
        .then((res)=>{
          el.GoodsPlateInfo = res.data
        },(error)=>{
        })
      },
      editSave(){/*保存编辑*/
        let el = this
        let data = {
          gtid:el.GoodsTypeId,
          gtname:el.GoodsTypeName,
          gtremark:el.GoodsTypeMark,
          gpid:el.GoodsPlateId
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
              message:'商品类别编辑失败'
            })
          })
      }
    }
  }
</script>

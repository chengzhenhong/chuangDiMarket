<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">
        <i class="el-icon-setting"></i>
        商品类别设置
      </div>
      <div class="title-right">
        <router-link to="goodsTypeAdd">
          <button>添加</button>
        </router-link>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <el-table
        :data="GoodsTypeList"
        style="width: 100%"
        class="my-el-table"
      >
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gtid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品类别名称"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gtname}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="所属板块"
          width="220">
          <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
              {{scope.row.goodsPlate.gpname}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.gtid)"
            >编辑</el-button>

            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.gtid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        GoodsTypeList:[],
        GoodsPlate:[]
      }
    },
    mounted(){
      this.loadPage()
    },
    methods:{
      loadPage(){
        let el = this
        el.$http(el.$api.adminGoodsTypeList)
        .then((res)=>{
          el.GoodsTypeList = res.data
        },(error)=>{
        })
      },
      handleEdit(gtid){
        this.$router.push({path:'goodsTypeEdit',query:{goodsTypeId:gtid}})/*跳转到商品类别编辑页并带一个商品类别id过去*/
      },
      handleDelete(gtid){
        let el = this
        el.$confirm('删除该商品类别?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          el.$http(el.$api.adminGoodsTypeDel,{goodsTypeId:gtid})
          .then((res)=>{
            el.$message({
              type:'success',
              message:res.message
            })
            el.loadPage()
          },(error)=>{
            el.$message({
              type:'error',
              message:'删除商品类别失败'
            })
          })
        }).catch(() => {

        })
      }
    }
  }
</script>

<style scoped>
  .banner-img{
    width: 100px;
    height: 50px;
  }
</style>

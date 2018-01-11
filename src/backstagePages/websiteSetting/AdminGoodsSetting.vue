<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">
        <i class="el-icon-setting"></i>
        商品板块设置
      </div>
      <div class="title-right">
        <router-link to="goodsPlateAdd">
          <button>添加</button>
        </router-link>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <el-table
        :data="goodsPlateList"
        style="width: 100%"
        class="my-el-table"
      >
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gpid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品板块名称"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gpname}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="备注"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.gpremark}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.gpid)"
            >编辑</el-button>

            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.gpid)">删除</el-button>
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
        goodsPlateList:[]
      }
    },
    mounted(){
      this.loadPage()
    },
    watch:{
      '$route':'loadPage'
    },
    methods:{
      loadPage(){
        let el =this
        el.$http(el.$api.adminGoodsPlateList)
        .then((res)=>{
          el.goodsPlateList = res.data
        },(error)=>{
        })
      },
      handleEdit(gpid){
        this.$router.push({path:'goodsPlateEdit',query:{goodsPlateId :gpid}})/*跳转到商品板块编辑页并带一个商品板块id过去*/
      },
      handleDelete(gpid){
        let el = this
        this.$confirm('删除该商品板块?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          el.$http(el.$api.adminGoodsPlateDel,{goodsPlateId:gpid})
          .then((res)=>{
            el.$message({
              type:'success',
              message:res.message
            })
            el.loadPage()
          },(error)=>{
            el.$message({
              type:'error',
              message:'删除失败！'
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

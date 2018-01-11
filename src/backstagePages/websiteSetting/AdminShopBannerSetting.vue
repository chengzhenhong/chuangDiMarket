<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">
        <i class="el-icon-setting"></i>
        商城首页轮播图设置
      </div>
      <div class="title-right">
        <router-link to="shopBannerAdd">
          <button>添加</button>
        </router-link>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <el-table
        :data="bannerList"
        style="width: 100%"
        class="my-el-table"
      >
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.banid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="轮播图"
          width="220">
          <template slot-scope="scope">
            <img :src="BaseURL+scope.row.bannerPath" class="banner-img"/>
          </template>
        </el-table-column>
        <el-table-column
          label="描述"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.bannerDesc}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="链接地址"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.bannerUrl}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.banid)"
            >编辑</el-button>

            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.banid)">删除</el-button>
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
        BaseURL:'http://192.168.1.201:8081',
        bannerList:[]
      }
    },
    mounted(){
      this.loadPage()
    },
    watch:{
      '$route':'loadPage'
    },
    methods:{
      loadPage(){/*加载首页轮播图信息列表*/
        let el = this
        el.$http(el.$api.adminShopBannerList)
        .then((res)=>{
          el.bannerList = res.data
        },(error)=>{
        })
      },
      handleEdit(banId){
        this.$router.push({path:'shopBannerEdit',query:{banId:banId}})/*跳转到首页轮播图编辑页并带一个轮播图id过去*/
      },
      handleDelete(banId){/*删除首页轮播图*/
        let el = this
        el.$confirm('删除首页轮播图, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          el.$http(el.$api.adminShopBannerDel,{shopBannerId:banId})
          .then((res)=>{
            el.$message({
              message: res.message,
              type: 'success'
            })
            el.loadPage()
          },(error)=>{
          })
        }).catch(() => {
          el.$message({
            message: '已取消删除',
            type: 'info'
          });
        });
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

<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">
        <i class="el-icon-setting"></i>
        会员类型设置
      </div>
      <div class="title-right">
        <router-link to="memberAdd">
          <button>添加</button>
        </router-link>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <el-table
        :data="memberList"
        style="width: 100%"
        class="my-el-table"
      >
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.userTypeId}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="会员类型名称"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.userTypeName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row.userTypeId)"
            >编辑</el-button>

            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.userTypeId)"
            >删除</el-button>
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
        memberList:[]
      }
    },
    mounted(){
      this.loadPage()
    },
    methods:{
      loadPage(){/*加载会员列表*/
        let el = this
        el.$http(el.$api.adminUserTypeList)
          .then((res)=>{
            el.memberList = res.data
          },(error)=>{
          })
      },
      handleEdit(userTypeId){
        this.$router.push({path:'memberEdit',query:{userTypeId :userTypeId}})/*跳转到会员类型编辑页并带一个会员id过去*/
      },
      handleDelete(userTypeId){
        let el = this
        this.$confirm('删除该会员?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          el.$http(el.$api.adminUserTypeDel,{userTypeId:userTypeId})
          .then((res)=>{
            el.$message({
              type:'success',
              message:res.message
            })
            this.loadPage()
          },(error)=>{
            el.$message({
              type:'error',
              message:'删除失败！'
            })
          })
        }).catch(() => {
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

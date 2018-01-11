<template>
  <div class="my-form">
    <div class="my-form-title">
      后台查看商品
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>用户名</span>
        <input type="text" class="input-with-action"/>
        <button class="input-action">查询</button>
      </div>
      <div class="clear-fix"></div>
      <div class="my-form-item">
        <el-table
          :data="GoodsTypeList"
          style="width: 100%"
          class="my-el-table"
        >
          <el-table-column
            label="序号"
            width="150">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtid}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="卖家会员"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtname}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="商品名称"
            width="200">
            <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
            </span>
            </template>
          </el-table-column>
          <el-table-column
            label="商品类别"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="录入时间"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="状态"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row.gtid)"
              >冻结</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.gtid)">激活</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        GoodsTypeList:[]
      }
    }
  }
</script>

<style scoped>
  .input-with-action{
    width:90%;
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

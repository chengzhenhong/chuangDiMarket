<template>
  <div class="my-form">
    <div class="my-form-title">
      商品审批
    </div>
    <div class="my-form-content">
      <el-tabs type="border-card">
        <el-tab-pane label="待处理">
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
              label="申报卖家"
              width="220">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtname}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="商品名称"
              width="220">
              <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
            </span>
              </template>
            </el-table-column>
            <el-table-column
              label="价格"
              width="220">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="会员价"
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
        </el-tab-pane>
        <el-tab-pane label="已处理">
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
              label="申报卖家"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtname}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="商品名称"
              width="180">
              <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
            </span>
              </template>
            </el-table-column>
            <el-table-column
              label="价格"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="会员价"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="审批时间"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="审批意见"
              width="180">
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
        </el-tab-pane>
      </el-tabs>
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

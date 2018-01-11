<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">后台订单处理</div>
      <div class="title-right">
        <button @click="dialogFormVisible = true">输入查询条件</button>
      </div>
      <!--dialog-->
      <el-dialog title="订单查询" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="订单编号" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="卖家用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="买家用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="开始时间"
            :label-width="formLabelWidth"
            style="display: inline-block;float: left"
          >
            <el-date-picker
              v-model="startVal"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="结束时间"
            :label-width="formLabelWidth"
            style="display: inline-block"
          >
            <el-date-picker
              v-model="endVal"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-form-item>
          <div class="clear-fix"></div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <el-table
          :data="GoodsTypeList"
          style="width: 100%"
          class="my-el-table"
        >
          <el-table-column
            label="订单编号"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtid}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="时间"
            width="240">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtname}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="卖家"
            width="240">
            <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
            </span>
            </template>
          </el-table-column>
          <el-table-column
            label="订单金额"
            width="240">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="买家"
            width="240">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="订单明细">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtremark}}</span>
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
      return {
        GoodsTypeList:[],
        startVal:'',
        endVal:'',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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

<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">菜单列表</div>
      <div class="title-right">
        <button>添加</button>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <el-table
          :data="data4"
          style="width: 100%"
          class="my-el-table"
        >
          <el-table-column
            label="菜单编号"
            width="150">
            <template slot-scope="scope">
              <el-tree
                :data="data4"
                :props="defaultProps"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
              </el-tree>
            </template>
          </el-table-column>
          <el-table-column
            label="菜单名称"
            width="200">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.gtname}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="地址"
            width="200">
            <template slot-scope="scope" v-if="scope.row.goodsPlate">
            <span style="margin-left: 10px">
            </span>
            </template>
          </el-table-column>
          <el-table-column
            label="等级"
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

        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        GoodsTypeList:[],
        data4: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }

    }
  }
</script>


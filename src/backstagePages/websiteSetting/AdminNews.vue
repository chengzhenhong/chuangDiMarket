<template>
  <div class="my-form">
    <div class="my-form-title">
      <div class="title-left">
        <i class="el-icon-setting"></i>
        新闻公告
      </div>
      <div class="title-right">
        <router-link to="newsAdd">
          <button>添加</button>
        </router-link>
      </div>
      <div class="clear-fix"></div>
    </div>
    <div class="my-form-content">
      <el-table
        :data="newsList"
        style="width: 100%"
        class="my-el-table"
      >
        <el-table-column
          label="序号"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.snid}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="标题"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="发布时间"
          width="220">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.newsDate}}</span>
          </template>
        </el-table-column>
        <el-table-column label="预览">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="preview(scope.row.snid)"
            >预览</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--dialog-->
      <el-dialog title="预览" :visible.sync="dialogFormVisible">
        <div class="">
          <div>标题：{{newsPreviewInfo.title}}</div>
          <div>时间：{{newsPreviewInfo.newsDate}}</div>
          <div v-html="newsPreviewInfo.context"></div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        newsList:[],
        dialogFormVisible:false,
        newsPreviewInfo:[]
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
        el.$http(el.$api.adminNewsList)
          .then((res)=>{
            el.newsList = res.data
          },(error)=>{
          })
      },
      preview(newsId){/*新闻预览*/
        let el = this
        el.dialogFormVisible = true
        el.$http(el.$api.adminNewsPreview,{shopNewsId:newsId})
          .then((res)=>{
            el.newsPreviewInfo = res.data
            console.log("进入success方法")
          },(error)=>{

          })
      }
    }
  }
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div>
        <el-card class="my-el-card">
          <div slot="header">
            <span>推广积分</span>
          </div>
          <div>
            {{UserScores.tuiguanScore}}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <el-card class="my-el-card">
          <div slot="header">
            <span>购物积分</span>
          </div>
          <div>
            {{UserScores.gouwuScore}}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <el-card class="my-el-card">
          <div slot="header">
            <span>增值积分</span>
          </div>
          <div>
            {{UserScores.zengzhiScore}}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <el-card class="my-el-card">
          <div slot="header">
            <span>兑换积分</span>
          </div>
          <div>
            {{UserScores.duihuanScore}}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div>
        <el-card class="my-el-card">
          <div slot="header">
            <span>现金积分</span>
          </div>
          <div>
            {{UserScores.xianjinScore}}
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){
      return{
        UserScores:[]
      }
    },
    mounted(){
      this.loadUserInfo()
    },
    methods:{
      loadUserInfo(){/*加载当前用户信息，获取其积分列表*/
        let el = this
        el.$http(el.$api.adminLoadUser)
        .then((res)=>{
          el.UserScores = res.data
        },(error)=>{
        })
      }
    }
  }
</script>


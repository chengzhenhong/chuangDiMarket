<template>
  <el-container>
    <el-header class="my-el-header">
      <div class="header-left">
        创福后台管理系统
      </div>
      <div class="header-right">
        <!--<img src="../assets/defaultHead.jpg" class="person-head"/>-->
        <img :src="BaseURL+UserInfo.headPic" class="person-head"/>
        <el-dropdown>
          <span class="person-center">个人中心</span>
          <span class="el-icon-caret-bottom"></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="personInfo">个人信息</router-link>
            </el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <el-aside class="my-el-aside">
        <div class="person-info">
          <div class="head-box">
            <img :src="BaseURL+UserInfo.headPic" class="person-head"/>
          </div>
          <div class="person-name">
            <p>会员名称：{{UserInfo.userName}}</p>
            <p v-if="UserInfo.userType">会员等级：{{UserInfo.userType.userTypeName}}</p>
          </div>
        </div>
        <el-menu class="my-el-menu">
          <el-menu-item class="my-el-menu-item" v-for="(menu,menuIndex) in MenuList" v-if="menuIndex == 0" index="menuIndex" :key="'menuIndex'">
            <router-link to="scores">
              <i class="el-icon-menu"></i>
              {{menu.menuName}}
            </router-link>
          </el-menu-item>
          <el-submenu
            class="my-el-submenu"
            v-for="(menu,menuIndex) in MenuList"
            v-if="menuIndex > 0"
            :index = "'-'+menuIndex"
            :key = "menuIndex"
          >
            <template slot="title">
              <i class="el-icon-setting"></i>
              {{menu.menuName}}
            </template>
            <el-menu-item-group class="my-el-menu-item-group">
              <el-menu-item
                class="my-el-menu-item"
                v-for="(submenu,subMenuIndex) in menu.childMenus"
                :index = "menuIndex+'-'+subMenuIndex"
                :key = "menuIndex+'-'+subMenuIndex"
              >
                <router-link :to="submenu.menuUrl">{{submenu.menuName}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
  export default {
    data(){
      return{
        BaseURL:'http://192.168.1.201:8081',
        UserInfo:[],
        MenuList:[]
      }
    },
    mounted(){
      this.loadUserInfo()
      this.loadMenu()
    },
    methods:{
      loadUserInfo(){/*后台加载用户信息*/
        let el = this
        el.$http(el.$api.adminLoadUser)
        .then((res)=>{
          el.UserInfo = res.data
        },(error)=>{
        })
      },
      loadMenu(){/*加载左侧菜单列表*/
        let el = this
        el.$http(el.$api.adminMenu)
        .then((res)=>{
          el.MenuList = res.data
        },(error)=>{
        })
      }
    },
    created: function () {
    }
  }
</script>

<style scoped>
  .header-left,
  .header-right{
    display: inline-block;
    height: inherit;
    line-height: 75px;
    padding: 0 25px;
  }
  .header-left{
    font-size: 20px;
  }
  .header-right{
    float: right;
  }
  .person-head{
    width: 45px;
    height: 45px;
    margin-right: 10px;
    vertical-align: middle;
    border:3px solid #FFFFFF;
    border-radius: 100%;
  }
  .person-center,
  .el-icon-caret-bottom{
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
  }
  /*左侧菜单的样式*/
  .person-info{
    padding: 15px 20px 0;
    text-align: center;
    color: #ffffff;
  }
  .person-info .head-box{
    margin:0 auto;
    width: 75px;
    height: 75px;
  }
  .person-info .head-box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border: 4px solid #44576b;;
  }
  .person-name{
    margin-top: 25px;
    font-size: 13px;
  }
  .person-name p{
    line-height: 1.8;
  }
</style>



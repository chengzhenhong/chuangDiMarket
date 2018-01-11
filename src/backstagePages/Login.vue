<template>
  <div class="login-background">
    <div class="login-box">
      <div class="login-title">后台管理员登录</div>
      <div class="login-input">
        <input type="text" placeholder="用户名" v-model="userName"/>
      </div>
      <div class="login-input">
        <input type="password" placeholder="密码" v-model="userPass"/>
      </div>
      <div class="login-input">
        <input type="text" placeholder="验证码" v-model="checkCode"/>
        <!--<img src="../assets/defaultHead.jpg" v-on:click="refresh"/>-->
        <img :src="checkCodeUrl" v-on:click="refresh"/>
      </div>
      <div class="login-input">
        <input type="button" value="登录" v-on:click="doLogin"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        baseUrl:'http://192.168.1.201:8081',
        userName:'',
        userPass:'',
        checkCode:'',
        checkCodeUrl:'http://192.168.1.201:8081/valiCode'
      }
    },
    methods:{
      refresh(){
        this.checkCodeUrl = this.baseUrl + '/valiCode?d'+new Date()*1;
      },
      doLogin(){
        let el = this
        let data = {
          userName:el.userName,
          userPass:el.userPass,
          checkCode:el.checkCode
        }
        el.$http(el.$api.adminLogin,data)
        .then((res)=>{
          alert(res.message)
          if(res.code == 1){
            el.$router.push('/admin/index')/*登陆成功以后跳转到后台首页*/
          }else {}
          console.log("后台登录进入success方法!"+res)
        },(error)=>{
          console.log("后台登录进入error方法!"+error)
        })
      }
    }
  }
</script>

<style scoped>
  .login-background{
    background-image: url("../assets/backstage/loginBg.jpg");
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    min-width: 1200px;
    min-height: 960px;
  }
  .login-box{
    width: 450px;
    height: 350px;
    margin: 200px auto;
    padding: 40px 15px 0;
    background-color: rgba(0,0,0,0.5);
    border-radius: 4px;
    text-align: center;
  }
  .login-title{
    font-size: 25px;
    color: #ffffff;
    letter-spacing: 5px;
    margin-bottom: 50px;
  }
  .login-input{
    width: 380px;
    margin: 20px auto;
  }
  .login-input input{
    width: 280px;
    padding: 8px;
    line-height: 25px;
    font-size: 16px;
    border:none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .login-input:nth-child(4) input{
    width: 193px;
    border-radius: 3px 0 0 3px;
  }
  .login-input:nth-child(4) img{
    width: 85px;
    height: 41px;
    vertical-align: bottom;
    cursor: pointer;
    margin-left: -5px;
    border-radius: 0 3px 3px 0;
  }
  .login-input input[type=button]{
    width: 296px;
    color: #ffffff;
    letter-spacing: 15px;
    background-color: cadetblue;
    cursor: pointer;
  }
</style>

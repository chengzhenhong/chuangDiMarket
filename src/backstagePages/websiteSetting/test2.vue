<template>
  <div class="input-box clearFix">
    <div>
      <input v-model="age" v-verify="age" placeholder="age"/>
      <label class="fl" v-remind="age"></label>
    </div>
    <div>
      <input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">
      <label class="fl" v-remind="regInfo.phone"></label>
    </div>
    <div>
      <input v-model="teacher" v-verify="age" placeholder="teacher"/>
      <label class="fl" v-remind="teacher"></label>
    </div>
    <button v-on:click="submit">提交</button>
  </div>
</template>

<script>
  import Vue from "vue"
  import verify from "vue-verify-plugin"
  var myRules={
    max6:{
      test:function(val){
        if(val.length>6) {
          return false
        }
        return true;
      },
      message:"最大为6位"
    }
  }
  Vue.use(verify,{
    rules:myRules
  });

  export default {
    name: 'app',
    data () {
      return {
        age:"",
        teacher:"",
        regInfo: {
          phone: ""
        }
      }
    },
    verify: {
      age:"required",
      teacher:"max6",
      regInfo: {
        phone: ["required","mobile"]
      }
    },
    methods:{
      submit: function () {
        console.log(this.$verify.check());
      }
    }
  }
</script>
































<!--<template>
  <div class="column is-12">
    <div>
      <label for='email'>邮箱：</label>
      <input v-validate="'required|email'" type="text" id='email' name='myEmail'>
    </div>
    <span v-show="errors.has('myEmail')">{{errors.first('myEmail')}}</span>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>-->

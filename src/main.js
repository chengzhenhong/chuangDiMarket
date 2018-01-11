import Vue from 'vue'
/*引入vue-router及配置*/
import VueRouter from 'vue-router'
import Routers from './configs/router'
/*引入http以及api配置*/
import Configs from './configs/globalSetting'
/*引入mock数据的相关配置*/
import MockConfigs from './configs/mockGlobalSetting'
/*全局引入element-ui*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*引入reset.css*/
import '../static/style/reset.css'
import '../static/style/resetElement.css'
import '../static/style/myForm.css'
import App from './App'
// import 'jquery/src/jquery'

Vue.use(VueRouter)
Vue.use(Configs)
Vue.use(MockConfigs)
Vue.use(ElementUI)
const router = new VueRouter({
  mode:'history',
  routes:Routers
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

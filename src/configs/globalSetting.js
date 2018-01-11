import http from './httpSetting'
import ApiSetting from './apiSetting'
export default{
  install (Vue, options) {
    Vue.prototype.$http = http
    Vue.prototype.$api = ApiSetting
    Vue.prototype.$BaseUrl = 'http://192.168.1.201:8081'
  }
}

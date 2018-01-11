import Axios from 'axios'
import MockApiSetting from './mockApiSetting'
export default{
  install (Vue, options) {
    Vue.prototype.$mockHttp = Axios
    Vue.prototype.$mockApi = MockApiSetting
  }
}

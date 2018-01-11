import Axios from 'axios'
import Qs from 'qs'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

//对接收到的数据初始化
function receiveData (obj) {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === 'null' || obj[key] === '0' || obj[key] === 0) {
      obj[key] = ''
    } else {
      obj[key] = obj[key]
    }
  }
  return obj
}

// 对发送的数据初始化
function sendData (obj) {
  for (let key in obj) {
    if (obj[key] === '') {
      delete obj[key]
    }
  }
  return obj || {}
}

/*成功状态*/
function successState (res) {
  if (res.data.code === 101) {
    history.go(0)
    return 0
  }
  if (res.data.code === 0) {
    return res
  }
}

/*失败的状态*/
function errorState (response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    console.log('错误信息但是状态吗正常')
    return response
  }
}
const httpServer = (opts,data)=>{
  let Public = {//设置公共参数
    'token':'',
    'admin_sid':'',
    'time': new Date().getTime()
  }
  let httpDefaultOpts = {
    method: opts.method,
    baseURL: 'http://192.168.1.201:8081',
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, sendData(data)),/*get请求时，通过params传参数*/
    data: Qs.stringify(Object.assign(Public, data)),/*post请求，通过data传参数*/
    withCredentials:true,/*表示跨域请求时是否需要使用凭证,默认是false*/
    headers: opts.method === 'get' ? {/*设置不同的请求头*/
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  }
  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  }else {
    delete httpDefaultOpts.params
  }
  if((typeof FormData !== 'undefined') && (data instanceof FormData)){
    data.append('token','')
    data.append('admin_sid','')
    data.append('time', new Date().getTime())
    httpDefaultOpts.data = data
    httpDefaultOpts.headers = {
      'Content-Type':'multipart/form-data'
    }
  }
  let promise = new Promise(function (resolve, reject) {
    Axios(httpDefaultOpts).then(
      (res) => {
        successState(res)
        resolve(receiveData(res.data))
      }
    ).catch(
      (response) => {
        errorState(response)
        reject(response)
      }
    )
  })
  return promise
}

export default httpServer

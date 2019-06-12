import axios from 'axios'
import store from './store'

axios.defaults = {
  timeout: 5000,
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

// 服务器端拦截
axios.interceptors.request.use(
  config => {
    if(store.getters.token) {
      // 判断是否存在 token ，添加到 authorization 中
      config.headers.Authorization = `token ${store.getters.token}`
    }
    window.console.log('request 请求配置', config)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    window.console.log('响应成功', response)
    return response
  },
  err => {
    if(err.response) {
      switch(err.response.status) {
        case 401:
        alert('没有登录') 
        break
        default: 
        window.console.log('服务器出错，请稍后重试！')
        alert('服务器出错，请稍后重试')
      }
    }
    return Promise.reject(err.response)
  }
)

export default axios
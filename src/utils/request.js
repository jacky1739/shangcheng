/**
 * axios 二次封裝
 */
 import axios from 'axios'
 import config from './../config'
 import { ElMessage } from 'element-plus'
 import router from './../router'
 
 const TOKEN_INVALID = 'TOKEN 驗證失敗，請重新登入'
 const NETWORK_ERROR = '網路請求異常，請稍候重試'
 
 // 創建 axios 實例對象，添加全局配置
 const service = axios.create({
     baseURL: config.baseApi,
     timeout: 8000
 })
 
 // 請求攔截
 service.interceptors.request.use((req) => {
     const headers = req.headers
     if(!headers.Authorization) headers.Authorization = 'jacky'
     return req
 })
 
 // 響應攔截
 service.interceptors.response.use((res) => {
     const { code, data, msg } = res.data
     if (code === 200) {
         return data
     } else if (code === 40001) {
         ElMessage.error(TOKEN_INVALID)
         setTimeout(() => {
             router.push('/login')
         }, 15000)
         return Promise.reject(TOKEN_INVALID)
     } else {
         ElMessage.error(msg || NETWORK_ERROR)
         return Promise.reject(msg || NETWORK_ERROR)
     }
 })
 
 /**
  * 請求核心函數
  * @param {*} options 
  * @returns 
  */
 function request(options) {
     options.method = options.method || 'get'
     if (options.method.toLowerCase() === 'get') {
         options.params = options.data
     }
     if (config.env === 'prod') {
         service.defaults.baseURL = config.baseApi
     } else {
         service.defaults.baseURL = config.mock ? config.mockApi:config.baseApi
     }
 
     return service(options)
 }
 
export default request
import axios, { AxiosError } from 'axios'

const HOST = ''
const PORT = ''

export const BASE_URL = `http://${HOST}:${PORT}`

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  timeout: 30000,
  // headers: { 'x-access-token': '' }
})

export const AVATAR_PREIX = `${BASE_URL}/gdfs/image/`

export const PLACEHOLDER_IMG = `${BASE_URL}/pictures/placeholder.png`

// FIXME:
export const PUSH_ENDPOINT = `${BASE_URL}/api/v1/push-token`

axiosInstance.interceptors.response.use(
  function r(response) {
    return response
  },
  function e(error: AxiosError) {
    const err: AxiosError = error
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)'
          break
        case 401:
          err.message = '未授权，请重新登录(401)'
          break
        case 403:
          err.message = '拒绝访问(403)'
          break
        case 404:
          err.message = '请求出错(404)'
          break
        case 408:
          err.message = '请求超时(408)'
          break
        case 500:
          err.message = '服务器错误(500)'
          break
        case 501:
          err.message = '服务未实现(501)'
          break
        case 502:
          err.message = '网络错误(502)'
          break
        case 503:
          err.message = '服务不可用(503)'
          break
        case 504:
          err.message = '网络超时(504)'
          break
        case 505:
          err.message = 'HTTP版本不受支持(505)'
          break
        default:
          err.message = `连接出错(${err.response.status})!`
      }
    } else {
      err.message = '连接服务器失败!'
    }
    // message.error(err.message)
    // throw err
    return Promise.reject(err)
  }
)

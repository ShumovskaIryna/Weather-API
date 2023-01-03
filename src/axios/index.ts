import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(config => {
  config.url =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    config.url + '$appid=' + process.env.REACT_APP_API_KEY
  return config
})

export default api

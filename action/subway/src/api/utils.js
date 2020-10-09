import jsonp from 'jsonp'
import { parseParamUrl } from '../helpers/utils'

// 把jsonp封装成类似axios的风格
export function getJsonp(url, params) {
  const options = { param: 'callback', timeout: 10000 }

  url = parseParamUrl(url, params)

  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(new Error(err))
      }
    })
  })
}

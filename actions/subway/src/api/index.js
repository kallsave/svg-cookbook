import { getJsonp } from './utils'

export function getSubWay(cityCode) {
  const url = 'https://api.map.baidu.com'

  return new Promise((resolve) => {
    getJsonp(url, {
      qt: 'subways',
      c: cityCode,
      format: 'json',
      ak: 'yZSTYLk9UUvs0ZqXqBbtTp8ViKk5vxLM',
      v: '3.0',
      from: 'jsapi',
    }).then((res) => {
      resolve(res.subways.l)
    })
  })
}

export function parseParamUrl(originUrl, params) {
  if (!params) {
    return originUrl
  }
  let url = ''
  for (const k in params) {
    const value = params[k] !== undefined ? params[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  url = url ? url.substring(1) : ''

  originUrl += (originUrl.indexOf('?') === -1 ? '?' : '&') + url

  return originUrl
}

const SVG_URL = 'http://www.w3.org/2000/svg'

export function createSVG(attrs = {}) {
  const el = document.createElementNS(SVG_URL, 'svg')
  const defaultAttrs = {
    version: '1.1',
    width: '100%',
    height: '100%',
  }
  Object.assign(attrs, defaultAttrs)
  setAttribute(el, attrs)
  return el
}

// 创建一个svg标签
export function createSVGChildElement(tag, attrs) {
  const el = document.createElementNS(SVG_URL, tag)
  setAttribute(el, attrs)
  return el
}

export function setAttribute(el, attrs) {
  for (const key in attrs) {
    const value = attrs[key]
    el.setAttribute(key, value)
  }
}

// -转驼峰
export function cameCase(str) {
  return str.replace(/-(\w)/g, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

// 驼峰转-
export function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export function hasClass(el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return
  }
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

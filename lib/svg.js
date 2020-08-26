const SVG_URL = 'http://www.w3.org/2000/svg'

function createSVG(attrs = {}) {
  const el = document.createElementNS(SVG_URL, 'svg')
  const defaultAttrs = {
		width: 400,
    height: 400,
    viewBox: '0 0 400 400',
  }
  Object.assign(attrs, defaultAttrs)
	setAttribute(el, attrs)
  return el
}

// 创建一个svg标签
function createSVGChildElement(tag, attrs) {
  const el = document.createElementNS(SVG_URL, tag)
  setAttribute(el, attrs)
  return el
}

function setAttribute(el, attrs) {
  for (const key in attrs) {
    const value = attrs[key]
		el.setAttribute(key, value)
	}
}

// -转驼峰
function cameCase(str) {
	return str.replace(/-(\w)/g, function (m, c) {
		return c ? c.toUpperCase() : ''
	})
}

// 驼峰转-
function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

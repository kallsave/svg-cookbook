function createSVG(attrs) {
  const body = document.body
  const el = document.createElement('svg')
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
  body.appendChild(el)
  return el
}

// 创建一个svg标签
function createSVGChildElement(svg, tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
  svg.appendChild(el)
  return el
}

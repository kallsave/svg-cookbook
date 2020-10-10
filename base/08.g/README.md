## g

要点
----------
g是一个组,本身没有宽度高度,通常用来做局部图形的变换

实例
----------
```javascript
const wrapper = document.getElementById('app')

const width = 700
const height = 500

const svg = createSVG({
  width,
  height,
})
wrapper.appendChild(svg)

const g = createSVGChildElement('g')

svg.appendChild(g)

const circle1 = createSVGChildElement('circle', {
  cx: 0,
  cy: 0,
  r: 50,
  fill: '#fdd'
})

const circle2 = createSVGChildElement('circle', {
  cx: 100,
  cy: 0,
  r: 50,
  fill: 'red'
})

g.appendChild(circle1)
g.appendChild(circle2)

g.setAttribute('transform', `translate(${width / 2}, ${height / 2})`)
```
## 动态创建SVG和SVG子元素/直线

createElementNS
----------

```javascript
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
document.body.appendChild(svg)
const el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
svg.appendChild(el)
```

- 创建svg和svg子元素时,应该使用createElementNS创建
- 如果是用createElement,浏览器会认为是自定义标签,会处理成element的盒子标签
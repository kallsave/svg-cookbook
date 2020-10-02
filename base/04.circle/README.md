## circle

实例
----------

```javascript
  const svg = createSVG()
  document.body.appendChild(svg)

  const rect = createSVGChildElement('circle', {
    // 圆心x坐标
    cx: 100,
    // 圆心y坐标
    cy: 100,
    // 半径
    r: 50,
    fill: '#fdd'
  })

  svg.appendChild(rect)
```

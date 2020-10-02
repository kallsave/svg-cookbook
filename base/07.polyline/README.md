## polyline and polygon

实例
----------
```javascript
  const svg = createSVG()
  document.body.appendChild(svg)

  const data = [
    [50, 160],
    [55, 180],
    [70, 180],
    [60, 190],
    [65, 205],
    [50, 195],
    [35, 205],
    [40, 190],
    [30, 180],
    [45, 180],
  ]

  const points = data.map((item) => {
    return `${item[0]} ${item[1]}`
  }).join(',')


  const polyline = createSVGChildElement('polyline', {
    points,
    fill: 'transparent',
    stroke: 'gold',
  })

  svg.appendChild(polyline)

  // polygon和polyline类似,区别是ploygon路径最后一个点自动连到第一个点
  // const polygon = createSVGChildElement('polygon', {
  //   points,
  //   fill: 'transparent',
  //   stroke: 'gold',
  // })

  // svg.appendChild(polygon)
```

- points由一系列的点组成
- 注意使用fill: 'transparent'透明化,不然默认fill: '#000'
- polygon和polyline类似,区别是ploygon路径最后一个点自动连到第一个点
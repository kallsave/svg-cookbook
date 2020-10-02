## ellipase

实例
----------

```javascript
  const svg = createSVG()
  document.body.appendChild(svg)

  const cx = 200
  const cy = 200
  const rx = 150
  const ry = 100

  const ellipse = createSVGChildElement('ellipse', {
    // 圆心x坐标
    cx,
    // 圆心y坐标
    cy,
    // 椭圆x半径
    rx,
    // 椭圆y半径
    ry,
    fill: '#fdd',
  })
  svg.appendChild(ellipse)

  const data = [
    {
      cx,
      cy,
      r: 1,
      fill: 'black'
    },
    {
      cx: cx - rx,
      cy,
      r: 1,
      fill: 'black'
    },
    {
      cx: cx + rx,
      cy,
      r: 1,
      fill: 'black'
    },
    {
      cx: cx,
      cy: cy - ry,
      r: 1,
      fill: 'black'
    },
    {
      cx: cx,
      cy: cy + ry,
      r: 1,
      fill: 'black'
    },
  ]

  for (const item of data) {
    const circle = createSVGChildElement('circle', item)
    svg.appendChild(circle)
  }

```

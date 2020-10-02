## rect

实例
----------

```javascript
  const svg = createSVG()
  document.body.appendChild(svg)

  const rect = createSVGChildElement('rect', {
    // 矩形左上角x坐标,默认为0
    x: 10,
    // 矩形左上角y坐标,默认为0
    y: 10,
    // 矩形宽度
    width: 100,
    // 矩形高度
    height: 100,
    // x轴方向圆角半径
    rx: 10,
    // y轴方向圆角半径
    ry: 20,
    fill: 'peru',
  })

  svg.appendChild(rect)
```

rx和ry
----------

- rx和ry有一个被设置为0,则都为0
- rx和ry有一个被设置,则全部被设置成被设置的值
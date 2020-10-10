## path

要点
----------
- 大写表示绝对定位,小写表示相对定位(例如M和m)
- M: Move To把画笔移动到一个点x y
- L: 从起点绘制一条直线到x y
- Z: 关闭path

实例
----------

```javascript
  const svg = createSVG()
  document.body.appendChild(svg)

  const path = createSVGChildElement('path', {
    d: 'M50 50 L100 100 M90 50 L200 100 Z',
    stroke: '#fdd',
    'stroke-width': '5',
  })

  svg.appendChild(path)
```
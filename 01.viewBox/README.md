## SVG 盒子容器和画布容器

```javascript
<svg style="width:150px; height:300px" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
  <circle cx="200" cy="200" r="200" fill="#fdd" stroke="none"></circle>
</svg>
```

盒子容器 width,heigh
----------
- svg的width,height是svg元素在Element布局中的像素单位,是个Element盒子容器

画布容器 viewBox
----------
- svg是矢量的,可以缩放svg,但是里面的元素的相对位置保持不变,因此就有viewBox画布容器
- viewBox的起点默认是左上角(0, 0),往右x增加,往下y增加
- viewBox参数分别为x(起点x轴坐标),y(起点x轴坐标),width(容器宽度),height(容器高度)
- 一般设置viewBox="0 0 x x"的正方形
- 画布容器和盒子容器相当于div盒子和background-size,有偏差值,因此有了preserveAspectRatio属性

画布容器对齐盒子容器 preserveAspectRatio
----------
- preserveAspectRatio属性默认为"xMidYMid meet"
- 第一个参数:
- xMin的意思是画布容器viewBox的x轴方向以x轴变小的方向对齐盒子容器Element,也就是Element左边
- xMax的意思是画布容器viewBox的x轴方向以x轴变小的方向对齐盒子容器Element,也就是Element右边
- xMin的意思是居中的
- yMin的意思是画布容器viewBox的x轴方向以x轴变小的方向对齐盒子容器Element,也就是Element上边
- yMax的意思是画布容器viewBox的x轴方向以x轴变小的方向对齐盒子容器Element,也就是Element下边
- yMin的意思是居中的
- 第二个参数:
- meet类似于background-size: contain
- slice类似于background-size: cover


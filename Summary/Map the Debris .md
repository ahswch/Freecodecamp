# Map the Debris 

---
1.要求

- 返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.
- 原数组中会包含格式化的对象内容，像这样 {name: 'name', avgAlt: avgAlt}.
- 求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.
- 地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI
- 至于轨道周期怎么求，下面相关链接第一个

2.思路

- 查找资料得到计算轨道周期相关公式：

```
GMm/R^2=mRω^2 ω=2π/T，R=r+h，T=2π(r+h)·sqr((r+h)/GM)
```

- 遍历输入的数组元素，依次计算轨道周期
- delete不要的元素，添加要求的元素

3.代码

```javascript
function orbitalPeriod(arr) {
  //公式GMm/R^2=mRω^2 ω=2π/T，R=r+h，T=2π(r+h)·sqr((r+h)/GM)
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var res;
  for (var i in arr){
    res=2*Math.PI*(earthRadius+arr[i].avgAlt)*Math.pow(((earthRadius+arr[i].avgAlt)/GM),1/2);
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod=Math.round(res);//求得的值应该是一个与其最接近的整数
  }
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

4.相关链接

- http://en.wikipedia.org/wiki/Orbital_period
-  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
- http://www.runoob.com/jsref/jsref-round.html

5.说明

- 至此，fcc系列算法题目整理基本完成。
- 接下来我会把《Head first html and css》这本书看完并总结。
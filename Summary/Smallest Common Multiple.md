# Smallest Common Multiple

---
1.要求

- 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

2.思路

- 设定一个twoMultiple(a,b)函数，求出输入两个参数的最小公倍数
- 设定结果变量res，初始为给定两个参数的最小值
- 在主函数中设定从给定两个参数最小值到最大值的循环
- 在主函数循环中运行twoMultiple(res,i+1),得出两个给定参数和它们之间的连续数字整除的最小公倍数

3.代码

```javascript
function twoMultiple(a,b){//计算两个数最小公倍数
  for(var i=1;i<=a;i++){
    if((i*b)%a===0){
      return i*b;
    }
  }
}
function smallestCommons(arr) {
  var max=Math.max(arr[0],arr[1]);
  var min=Math.min(arr[0],arr[1]);
  var res=min;
  for (var i=min;i<max;i++){
    res = twoMultiple(res,i+1);
  }
  return res;
}
smallestCommons([1,5]);
```

4.相关链接

- https://www.mathsisfun.com/least-common-multiple.html
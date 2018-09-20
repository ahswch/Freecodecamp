# Sum All Primes

---
1.要求

- 求小于等于给定数值的质数之和。
- 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

2.思路

- 在从3开始到不大于num的循环中定义mark变量，初始为true
- 二层循环中判断i是否为质数，否，把mark变为false
- 一层循环末尾在mark为true时，把小于等于给定数值的质数加起来

3.代码

```javascript
function sumPrimes(num) { 
  var arr = [2];
  var newNum = 2;
  
  for (var i=3; i<=num; i++){
    var mark = true;
    for (var j=0; j<arr.length; j++){
      if(i%arr[j] === 0){
        mark = false;
      }
    }
    if(mark){
      arr.push(i);
      newNum += i;
    }
  }

  return newNum;//本代码只计算num大于2的情况
}
sumPrimes(9);
```
4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push
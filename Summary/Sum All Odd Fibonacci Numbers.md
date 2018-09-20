# Sum All Odd Fibonacci Numbers

---
1.要求

- 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
- 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
- 此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。

2.思路

- 利用for循环得出斐波纳契数前一百个数组成的数列arr
- 用.filter()按顺序提出arr中的所有奇数
- 利用for循环计算小于或等于num的斐波纳契奇数之和

3.代码

```javascript
function sumFibs(num) {
  var arr=[1,1];
  var sum=0;
  for (var i=2;i<100;i++){
    arr[i]=arr[i-2]+arr[i-1];
  }
  arr=arr.filter(function(val){
    return val%2 ===1;
  });
  for(var j=0;arr[j]<=num;j++){
    sum +=arr[j];
  }
  return sum;
}
sumFibs(3);

```
4.相关链接

- http://www.cnblogs.com/meteoric_cry/archive/2010/11/29/1891241.html
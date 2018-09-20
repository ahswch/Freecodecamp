# Pairwise

---
1.要求

- 找到你的另一半
- 譬如：你编程能力强，估值11分，如果以20分为最佳情侣来计算，你应该找一个设计能力强，估值为9分的女生。
- 举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。
- 所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。
- 帮下面的pairwise函数实现上面的功能。
```
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

2.思路

- 循环遍历arr，判断数组自当前元素后是否含有当前元素的配对值，有 则把二者索引加到结果变量res中。
- 注意循环中判断数组自当前元素后含有当前元素的配对值时，需要把arr含有的配对值元素在判断结尾处设置为大于arg的值，防止循环中会再次用到该值的索引。这样才能满足测试要求：如pairwise([0, 0, 0, 0, 1, 1], 1) 应该返回 10.

3.代码

```javascript
function pairwise(arr, arg) {
  var res=0;
  for(var i=0;i<arr.length;i++){
    var aIndex=arr.indexOf(arg-arr[i],i+1);
    if(aIndex !==-1){
      res +=i;
      res +=aIndex;
      arr[aIndex]=arg+1;
    }
  }
  return res;
}

pairwise([1,4,2,3,0,5], 7);
```

4.相关链接

- https://freecodecamp.cn/liuboaibc
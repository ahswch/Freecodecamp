# Drop it 

---
1.要求

- 丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。
- 第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
- 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。

2.思路

- 利用while，当func(arr[0])为false时，用.shift()去除arr的第一个元素，实现继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true

3.代码

```javascript
function drop(arr, func) {
  // Drop them elements.
  var a =arr.length;
  while(func(arr[0])===false){
    arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
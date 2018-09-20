# Finders Keepers

---
1.要求

- 写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素。
- 举个例子，如果 arr 为 [1, 2, 3]，func 为 function(num) {return num === 2; }，那么 find 的返回值应为 2。

2.思路提示

- filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
- 根据filter()的使用方法返回符合条件的第一个元素

3.代码

```javascript
function find(arr, func) {
  return arr.filter(func)[0];
}
find([1, 3, 4], function(num){ return num % 2 === 0; });
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
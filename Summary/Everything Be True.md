# Everything Be True

---
1.要求

- 完善every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
- 你只能通过中括号来访问对象的变量属性(pre)。
- 提示：你可以有多种实现方式，最简洁的方式莫过于Array.prototype.every()。

2.思路

- 设定测试函数，返回val[pre]；
- 用every() 方法测试数组的所有元素是否都通过了指定函数的测试

3.代码

```javascript
function every(collection, pre) {
  // Is everyone being true?
  return collection.every(function(val){
    return val[pre];
  });
}
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
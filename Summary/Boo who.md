# Boo who

---
1.要求

- 检查一个值是否是基本布尔类型，并返回 true 或 false。
- 基本布尔类型即 true 和 false

2.思路

- 利用switch语句判断输入的数据是true/false/其它，如果是布尔值则返回true，非布尔值返回false

3.代码

```javascript
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  switch(bool){
    case true:return true;
    case false:return true;
    default:return false;
  }
}
boo(null);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean
# Spinal Tap Case

---
1.要求

- 将字符串转换为 spinal case。
- Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。

2.思路

- 用.replace()和正则表达式把小写字母和大写字母之间用空格隔开
- 再

3.再用.replace()把空格替换成'-'，最后小写化即可

```javascript
function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
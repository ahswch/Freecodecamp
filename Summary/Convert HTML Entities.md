# Convert HTML Entities

---
1.要求

- 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。

2.思路

- 利用.replace()和正则表达式把字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体

3.代码

```javascript
function convert(str) {
  // &colon;&rpar;
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}
convert("Dolce & Gabbana");
```

4.相关链接

- http://www.runoob.com/jsref/jsref-replace.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- http://dev.w3.org/html5/html-author/charref
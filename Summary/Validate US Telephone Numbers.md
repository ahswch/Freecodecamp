# Validate US Telephone Numbers

---
1.要求

- 如果传入字符串是一个有效的美国电话号码，则返回 true.
- 用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):
```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```
- 你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 如果字符串中给出了国家代码, 你必须验证其是 1. 如果号码有效就返回 true ; 否则返回 false.

2.思路

- 用.test()方法和正则表达式判断号码格式是否符合邀请

3.代码

```javascript
function telephoneCheck(str) {
  // 祝你好运
  var reg = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  return reg.test(str);
}  
telephoneCheck("1 (555)-555-5555");
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- http://www.runoob.com/jsref/jsref-test-regexp.html

5.说明

- 博主此时不熟悉正则表达式相关知识，本题解决代码参考：https://freecodecamp.cn/yinyoupoet
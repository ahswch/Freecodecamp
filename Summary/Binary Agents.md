# Binary Agents

---
1.要求

- 传入二进制字符串，翻译成英语句子并返回。
- 二进制字符串是以空格分隔的。

2.思路

- 用.split(' ')将输入二进制字符串转化为各个二进制数字符串组成的数组
- 用for循环遍历数组元素，在for循环中用parseInt(str[i],2)把二进制数字符串转化为十进制数
- 用String.fromCharCode(str[i])把得到的十进制数转化为相应字符赋值给相应数组元素，再用.join('')把数组元素合成句子即可

3.代码

```javascript
function binaryAgent(str) {
  str=str.split(' ');
  for(var i=0;i<str.length;i++){
    str[i]=parseInt(str[i],2);
    str[i]=String.fromCharCode(str[i]);
  } 
  return str.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
-https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
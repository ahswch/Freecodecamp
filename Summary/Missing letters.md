# Missing letters

---
1.要求

- 从传递进来的字母序列中找到缺失的字母并返回它。
- 如果所有字母都在序列中，返回 undefined。

2.思路

- 设定缺失变量miss
- 在for循环遍历字符串的各个字符时，判断后一个字符的UTF-16 代码单元值的数字与当前字符的UTF-16 代码单元值的数字的差值是否为1，否，则把对应缺失字母赋给miss，是则返回undefine

3.代码

```javascript  
function fearNotLetter(str) {
var miss='';
for(var i=0;i<str.length-1;i++){
    var c=str.charCodeAt(i+1)-str.charCodeAt(i);
    if(c!==1){
    miss=String.fromCharCode(str.charCodeAt(i)+1);break;
    }
    else{
    miss= undefined;
    }
}
return miss;
}
fearNotLetter("bcd");
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
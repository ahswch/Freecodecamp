# Steamroller

---
1.要求

- 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。

2.思路

- 设定结果数组res
- 用for循环遍历arr的元素，判断是否为数组，是，则用res=res.concat(steamroller(arr[i]))继续输入到函数；否，则把元素push到res中
- 最后返回res

3.代码

```javascript
function steamroller(arr) {
  // I'm a steamroller, baby
  var res=[];
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res=res.concat(steamroller(arr[i]));
    }
    else{
      res.push(arr[i]);
    }
  }
  return res;
}

steamroller([1, [2], [3, [[4]]]]);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- http://www.runoob.com/jsref/jsref-concat-string.html
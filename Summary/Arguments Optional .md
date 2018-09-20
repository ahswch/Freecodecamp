# Arguments Optional 

---
1.要求

- 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
- 如果两个参数都不是有效的数字，则返回 undefined。

2.思路

- 判断输入数据个数
- 数据个数为1，判断数据类型，
    - 类型为数字：把这个数据赋值给a，返回一个函数，这个函数要求一个数据b，判断b的类型，是数字返回a+b，不是数字，返回undefined；
    - 类型不是数字：返回undefined。
- 数据个数为2，判断数据类型，都为数字，返回两数据和，否则返回undefined。

3.代码

```javascript
function add() {
  if(arguments.length===1){
      if(typeof(arguments[0])==='number'){
        var a=arguments[0];
          return function(b){
            if(typeof(b)==='number'){
              return a+b;
            }
            else{
              return undefined;
            }
          };
      }
      else{
        return undefined;
      }
  }
  else if(arguments.length===2){
    if(typeof(arguments[0])==='number' && typeof(arguments[1])==='number'){
      return arguments[0]+arguments[1];
    }
    else{
      return undefined;
    }
  }
}
add(2)(2);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
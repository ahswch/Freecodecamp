# Sorted Union

---
1.要求

- 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
- 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
- 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。

2.思路

- 将输入的各个数组用.concat连接起来
- 定义结果数组初始为含有输入数组的的第一个元素
- for循环中遍历输入数组除第一个元素外的各个元素，利用.indexOf()判断结果数组是否包含这个元素，如果没包含就push到结果数组，最后返回结果数组即可

3.代码

```javascript
function unite(arr1, arr2) {
  var arr3=arguments[2]? arguments[2]:[]; 
  var arr4=arguments[3]? arguments[3]:[]; 
  var arr =arr1.concat(arr2,arr3,arr4);
  var result=[arr[0]];
  for(var i=1;i<arr.length;i++){
    if(result.indexOf(arr[i]) ===-1){
      result.push(arr[i]);
    }
}
  return result;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
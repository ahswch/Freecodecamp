# Symmetric Difference

---
1.要求

- 创建一个函数，接受两个或多个数组，返回所给数组的对等差分(symmetric difference)
- 例子：给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

2.思路

- 定义cut函数去除所给数组中重复的值
- 利用for循环把输入数组去重，去重的数组转移到temp
- 定义一个函数diff，比较两个数组a、b,把A △ B的结果赋给a，再对a进行升序排列，返回a
- 在for循环中将temp中第1个数组与其他数组一一进行diff 最终将所求结果返回到temp[0]

3.代码

```javascript
function sym(args) {
  var temp=[];
  //去除所给每个数组中重复的值
   function cut(arr){
         var result = [];
         for(var i=0;i<arr.length;i++){
             if(result.indexOf(arr[i])==-1){
                 result.push(arr[i]);
             }
         }
         return result;
   }
  //将去重的数组转移到temp
  for(var i=0;i<arguments.length;i++){
    temp.push(cut(arguments[i]));
  }
  //定义一个函数diff，比较两个数组a、b,把A △ B的结果赋给a，再对a进行升序排列，返回a
  function diff(a,b){
    
    for(var j=0;j<b.length;j++){
        if(a.indexOf(b[j])!==-1){
          a.splice(a.indexOf(b[j]),1);
        }
        else{
          a.push(b[j]);
        }
    }
    a=a.sort(function(v,t){
      return v-t;
    });
  }
  //temp中将第1个数组与其他数组一 一进行diff 最终将所求结果返回到temp[0]
  for(var k=1;k<temp.length;k++){
    diff(temp[0],temp[k]);
  }

  return temp[0];
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
```

4.相关链接

- https://www.youtube.com/watch?v=PxffSUQRkG4
# No repeats please

---
1.要求

- 把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
- 例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).

2.思路

- 递归不理解。待解决

3.代码

```javascript
function isRepeat(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
      return false;
    }
  }
  return true;
}
function swap(arr,a,b){
  var temp=arr[b];
  arr[b]=arr[a];
  arr[a]=temp;
  return arr;
}

function please(arr,op,ed){
  var count=0;
  if(op===ed){
    if(isRepeat(arr)){
      return 1;
    }
    return 0;
  }
  for (var i=op;i<=ed;i++){
    arr=swap(arr,op,i);
    count +=please(arr,op+1,ed);//递归 不明
    arr =swap(arr,op,i);
  }
  return count;
}
function permAlone(str) {
  var arr=str.split('');
  return please(arr,0,arr.length-1);
}

permAlone('aab');
```

4.相关链接

- https://www.mathsisfun.com/combinatorics/combinations-permutations.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- https://freecodecamp.cn/yinyoupoet
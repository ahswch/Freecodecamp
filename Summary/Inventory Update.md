# Inventory Update

---
1.要求

- 依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 
- 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.

2.思路

- 设置两层循环，一层在arr2循环，二层在arr1循环，一层里设置标记变量mark。
- 在二次循环里判断货物是否存在，是则更新数量，mark变为false。一层循环末尾判断mark，true则把对应货物加入到数组中
- 在两层for循环中对当前的库存数组按货物名称的字母顺序排列.

3.代码

```javascript
function updateInventory(arr1, arr2) {
    // 请保证你的代码考虑到所有情况
  for(var i=0;i<arr2.length;i++){//更新
    var mark =true;
    for(var j=0;j<arr1.length;j++){
      if(arr2[i][1]===arr1[j][1]){
        arr1[j][0] +=arr2[i][0];
        mark=false;
      }
    }
    if(mark){
      arr1.push(arr2[i]);
    }
  }
  
  for(var k=0;k<arr1.length;k++){//排序
    for(var l=k+1;l<arr1.length;l++){
      if(arr1[k][1]>arr1[l][1]){
        var temp=arr1[k];
        arr1[k]=arr1[l];
        arr1[l]=temp;
      }
    }
  }
    return arr1;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

```

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://freecodecamp.cn/yinyoupoet
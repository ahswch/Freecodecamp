# Diff Two Arrays(比较两个数组) #

---
1.要求

- 比较两个数组，然后返回一个新数组
- 该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

2.思路

- 定义一个新数组变量，将输入的两个数组用.concat()连接到一起赋值给它
- 定义一个check函数，返回两个给定数组中所有独有的数组元素
- 用.filter()筛选出新数组变量的符合条件的元素

3.代码

    function diff(arr1, arr2) {
    var newArr = [];
    newArr = arr1.concat(arr2);
    function check(item){
        if(arr1.indexOf(item) === -1 ||arr2.indexOf(item) === -1){
        return item;
        }
    }
    return newArr.filter(check);
    }
    diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

5.博客说明：以后的博客均采用mardown语法编写
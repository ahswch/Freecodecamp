# Where art thou

---
1.要求

- 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
- 如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

2.思路

- 用Object.keys(source)取出source的属性
- 利用Object.keys()在for循环中遍历collection所有子元素的属性，设定mark标记变量，一层循环中初始为true。
- 在for循环中遇到collection子元素不含sourse属性或者两对应属性值不相等时，mark变为false
- 一层循环最后，如果mark为true，就把对应collection子元素push到结果数组

3.代码

    function where(collection, source) {
    var arr = [];
    var arrj = Object.keys(source);
    for(var i = 0; i<collection.length; i++){
        var arri = Object.keys(collection[i]);
        var mark = true;
        for (var j = 0; j < arrj.length; j++){
        if (arri.indexOf(arrj[j]) === -1 ||  collection[i][arrj[j]] !== source[arrj[j]]) {
            mark =false;
        }
        }
        if (mark){
        arr.push(collection[i]);
        }
    }
    // What's in a name?
    return arr;
    }

    where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
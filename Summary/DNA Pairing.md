# DNA Pairing

---
1.要求

- DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
- Base pairs（碱基对）是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
- 字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。

2.思路

- 用.split('')将输入的字母串分割成字母数组
- 定义结果数组变量，在for循环中遍历每个给定的字母，push到结果数组的二维元素中，利用switch语句，判断各个字母配对的碱基，push到相应数组
- 返回结果数组

3.代码

    function pair(str) {
    var result=[];
    var temp = str.split('');
    for(var i=0;i<temp.length;i++){
        result[i]=[];
        result[i].push(temp[i]);
        switch(temp[i]){
            case 'A': result[i].push('T');break;
            case 'T': result[i].push('A');break;
            case 'G': result[i].push('C');break;
            case 'C': result[i].push('G');break;
        }
    }
    return result;
    }
    pair("GCG");
4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split
- http://en.wikipedia.org/wiki/Base_pair
# Search and Replace 

---
1.要求

- 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
- 第一个参数是将要对其执行查找和替换的句子。
- 第二个参数是将被替换掉的单词（替换前的单词）。
- 第三个参数用于替换第二个参数（替换后的单词）。
- 替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。

2.思路

- 将句子用.split(' ')分割成各个单词组成的数组
- 判断要被替换的的单词是否开头大写，是，则将用于替换的单词也开头大写
- 利用.indexOf()寻找到被替换单词的索引，利用.splice()删除要被替换的单词，再添加用于替换的单词即可
- 最后用.join()将单词数组合并成句子

3.代码

    function myReplace(str, before, after) {
    str = str.split(" ");
    if(before[0]>='A'&&before[0]<='Z'){
        after = after.slice(0,1).toUpperCase()+after.slice(1);
    }
    var num = str.indexOf(before);
    str.splice(num,1,after);
    return str.join(" ");
    }

    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

4.相关链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join

# Pig Latin

---
1.要求

- Pig Latin把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
- 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。

2.思路

- 在for循环中遍历字符串的各个字符，利用判断语句找到第一个辅音或辅音丛的索引
- 如果索引为0，直接在原字符串后加上'way'即可；如果索引不为0，截取索引从num开始到字符串结尾的字符，加上截取的从开头到num索引的字符，再加上'ay'即可

3.代码

    function translate(str) {
    var num;
    for(var i=0;i<str.length;i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='e'||str[i]==='o'||str[i]==='u')
        { 
        num=i;
        break;
        }
    }
    if(num===0){
        str =str+'way';
    }
    else{
        str=str.slice(num)+str.slice(0,num)+'ay';
    }
    return str;
    }

    translate("consonant");

4.相关链接

- http://en.wikipedia.org/wiki/Pig_Latin
- http://www.runoob.com/jsref/jsref-slice-array.html